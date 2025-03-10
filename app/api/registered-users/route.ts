import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

type User = {
    id: string;
    name: string;
    email: string;
    institution: string;
    registrationType: string;
    registrationDate: string;
    receiptUrl?: string;
};

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('uoh');
        
        // Fetch all registrations from the database
        const registrations = await db.collection('registrations')
            .find({})
            .project({
                _id: 0,
                name: 1,
                email: 1,
                designation: 1,
                paperTitle: 1,
                participationMode: 1,
                receiptUrl: 1
            })
            .toArray();

        return NextResponse.json({ users: registrations });
    } catch (error) {
        console.error('Error fetching registered users:', error);
        return NextResponse.json(
            { error: 'Failed to fetch registered users' },
            { status: 500 }
        );
    }
}

export async function POST() {
    try {
        const client = await clientPromise;
        const db = client.db('uoh');
        
        const registration = await db.collection('registrations')
            .insertOne(
                {
                    id: 0,
                    name: 0,
                    email: 0,
                    designation: 1,
                    paperTitle: 1,
                    participationMode: 1,
                    receiptUrl: 1
                }
            );
        
        return NextResponse.json(
            { registration: registration },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching registered users:', error);
        return NextResponse.json(
            { error: 'Failed to fetch registered users' },
            { status: 500 }
        );
    }
}