import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { uploadFileToS3 } from '@/lib/s3';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        // Extract file from form data
        const receiptFile = formData.get('receipt') as File;

        // Upload file to S3
        let fileUrl = '';
        if (receiptFile) {
            fileUrl = await uploadFileToS3(receiptFile);
        }

        // Extract other form fields
        const name = formData.get('name') as string;
        const designation = formData.get('designation') as string;
        const paperTitle = formData.get('paperTitle') as string;
        const participationMode = formData.get('participationMode') as string;

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db('conference');

        // Insert registration data
        const result = await db.collection('registrations').insertOne({
            name,
            designation,
            paperTitle,
            participationMode,
            receiptUrl: fileUrl,
            createdAt: new Date(),
        });

        return NextResponse.json({
            success: true,
            message: 'Registration successful! Your receipt has been uploaded.',
            id: result.insertedId,
        });
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { success: false, message: 'Registration failed. Please try again.' },
            { status: 500 },
        );
    }
}
