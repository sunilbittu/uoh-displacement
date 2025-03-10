import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { uploadFileToS3 } from '@/lib/s3';

export async function POST(request: NextRequest) {
    try {
        console.log('Starting registration process...');
        const formData = await request.formData();

        // Validate required fields
        const requiredFields = ['name', 'designation', 'paperTitle', 'participationMode'];
        const missingFields = requiredFields.filter(field => !formData.get(field));
        
        if (missingFields.length > 0) {
            console.log('Missing required fields:', missingFields);
            return NextResponse.json(
                { 
                    success: false, 
                    message: `Missing required fields: ${missingFields.join(', ')}` 
                },
                { status: 400 }
            );
        }

        // Extract file from form data
        const receiptFile = formData.get('receipt') as File;
        if (!receiptFile) {
            console.log('No receipt file provided');
            return NextResponse.json(
                { success: false, message: 'Receipt file is required' },
                { status: 400 }
            );
        }

        // Upload file to S3
        let fileUrl = '';
        try {
            console.log('Uploading file to S3...');
            fileUrl = await uploadFileToS3(receiptFile);
            console.log('File uploaded successfully. URL:', fileUrl);
        } catch (error: any) {
            console.error('S3 upload error:', error);
            return NextResponse.json(
                { success: false, message: 'Failed to upload receipt file' },
                { status: 500 }
            );
        }

        // Extract other form fields
        const name = formData.get('name') as string;
        const designation = formData.get('designation') as string;
        const paperTitle = formData.get('paperTitle') as string;
        const participationMode = formData.get('participationMode') as string;

        console.log('Form data received:', {
            name,
            designation,
            paperTitle,
            participationMode,
            receiptUrl: fileUrl
        });

        // Connect to MongoDB
        console.log('Connecting to MongoDB...');
        const client = await clientPromise;
        const db = client.db('uoh');
        
        // Test database connection
        try {
            await db.command({ ping: 1 });
            console.log('MongoDB connection successful');
        } catch (error) {
            console.error('MongoDB connection test failed:', error);
            throw error;
        }

        // Check if collection exists
        const collections = await db.listCollections().toArray();
        console.log('Available collections:', collections.map(c => c.name));

        // Insert registration data
        console.log('Attempting to insert registration data...');
        const registrationData = {
            name,
            designation,
            paperTitle,
            participationMode,
            receiptUrl: fileUrl,
            createdAt: new Date(),
        };
        console.log('Data to be inserted:', registrationData);

        const result = await db.collection('registrations').insertOne(registrationData);
        console.log('Insert result:', result);

        if (!result.acknowledged) {
            console.error('Insert operation not acknowledged');
            throw new Error('Failed to save registration data');
        }

        // Verify the document was inserted
        const insertedDoc = await db.collection('registrations').findOne({ _id: result.insertedId });
        console.log('Verification - inserted document:', insertedDoc);

        return NextResponse.json({
            success: true,
            message: 'Registration successful! Your receipt has been uploaded.',
            id: result.insertedId,
        });
    } catch (error: any) {
        console.error('Registration error:', error);
        
        // Handle specific MongoDB errors
        if (error.name === 'MongoError') {
            console.error('MongoDB specific error:', {
                name: error.name,
                code: error.code,
                message: error.message
            });
            return NextResponse.json(
                { 
                    success: false, 
                    message: 'Database error occurred. Please try again.' 
                },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { 
                success: false, 
                message: error.message || 'Registration failed. Please try again.' 
            },
            { status: 500 }
        );
    }
}
