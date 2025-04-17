'use client';
import React from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

export default function UpdatesPage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="i3rmk:6">
            <Navigation
                activeSection="updates"
                scrollToSection={scrollToSection}
                data-oid="x3ocedf"
            />

            <div className="pt-20 pb-10" data-oid="dnur87u">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="hxf9hyf">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="qr-akl0">
                        Updates
                    </h1>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="268zqb.">
                        <p className="text-gray-700 mb-4" data-oid="mm9_n5j">
                            Conference updates, announcements, and posters will be available here
                            soon.
                        </p>
                        <div
                            className="border-2 border-dashed border-gray-300 p-8 rounded-lg text-center"
                            data-oid="zun7xqw"
                        >
                            <h2
                                className="text-xl font-semibold text-gray-500 mb-2"
                                data-oid=".n-.86z"
                            >
                                Poster Section Coming Soon
                            </h2>
                            <p className="text-gray-500" data-oid="88pj1:l">
                                This section will be updated with conference posters and other
                                important announcements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="cb2m4e." />
        </div>
    );
}
