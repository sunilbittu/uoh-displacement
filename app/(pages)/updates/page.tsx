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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="9_e2vqr">
            <Navigation
                activeSection="updates"
                scrollToSection={scrollToSection}
                data-oid="c811bp1"
            />

            <div className="pt-20 pb-10" data-oid="84dq6jr">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="3c:0dx7">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="05sd4pd">
                        Updates
                    </h1>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="la:6c0u">
                        <p className="text-gray-700 mb-4" data-oid="qgij7uo">
                            Conference updates, announcements, and posters will be available here
                            soon.
                        </p>
                        <div
                            className="border-2 border-dashed border-gray-300 p-8 rounded-lg text-center"
                            data-oid="bern:yo"
                        >
                            <h2
                                className="text-xl font-semibold text-gray-500 mb-2"
                                data-oid="xh_hkp_"
                            >
                                Poster Section Coming Soon
                            </h2>
                            <p className="text-gray-500" data-oid="8jc7-ar">
                                This section will be updated with conference posters and other
                                important announcements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="d_6z863" />
        </div>
    );
}
