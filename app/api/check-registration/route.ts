import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request: NextRequest) {
    try {
        // Get email from query parameters
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');

        if (!email) {
            return NextResponse.json(
                { success: false, message: 'Email is required' },
                { status: 400 },
            );
        }

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db('uoh');

        // Find registration by email
        const registration = await db
            .collection('registrations')
            .findOne({ email: email }, { projection: { name: 1, email: 1, receiptUrl: 1 } });

        if (!registration) {
            return NextResponse.json(
                { success: false, message: 'No registration found with this email' },
                { status: 404 },
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Registration found',
            registration: {
                name: registration.name,
                email: registration.email,
                receiptUrl: registration.receiptUrl,
            },
        });
    } catch (error: any) {
        console.error('Error checking registration:', error);

        return NextResponse.json(
            {
                success: false,
                message: error.message || 'Failed to check registration. Please try again.',
            },
            { status: 500 },
        );
    }
}
