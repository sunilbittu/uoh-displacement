'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
    const router = useRouter();

    useEffect(() => {
        router.push('/people');
    }, [router]);

    return null;
}
