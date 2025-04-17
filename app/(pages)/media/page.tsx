'use client';
import React from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

export default function MediaPage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="8-95n1.">
            <Navigation
                activeSection="media"
                scrollToSection={scrollToSection}
                data-oid="9.ltrh."
            />

            <div className="pt-20 pb-10" data-oid=":_e932a">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="mhe_-r8">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="ek3oonp">
                        Media
                    </h1>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="9f0s2-i">
                        <p className="text-gray-700 mb-4" data-oid="ri_z6.8">
                            Conference media, photos, videos, and press releases will be available
                            here.
                        </p>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="184sc99" />
        </div>
    );
}
