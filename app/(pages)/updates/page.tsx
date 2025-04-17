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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="n2ozyxl">
            <Navigation
                activeSection="updates"
                scrollToSection={scrollToSection}
                data-oid="p-y3s1g"
            />

            <div className="pt-20 pb-10" data-oid="06r71rq">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="j8mukjo">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="2ny7f-f">
                        Updates
                    </h1>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="nngy9-i">
                        <p className="text-gray-700 mb-4" data-oid="x6gzs2z">
                            Conference updates, announcements, and posters will be available here
                            soon.
                        </p>
                        <div
                            className="border-2 border-dashed border-gray-300 p-8 rounded-lg text-center"
                            data-oid="jf9pzb_"
                        >
                            <h2
                                className="text-xl font-semibold text-gray-500 mb-2"
                                data-oid="7_z443r"
                            >
                                Poster Section Coming Soon
                            </h2>
                            <p className="text-gray-500" data-oid="yj7jyc:">
                                This section will be updated with conference posters and other
                                important announcements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="0fhn7jv" />
        </div>
    );
}
