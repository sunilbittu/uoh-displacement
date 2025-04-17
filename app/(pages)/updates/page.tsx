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
                                Conference Materials
                            </h2>
                            <div className="space-y-4" data-oid="411gw7b">
                                <div className="p-4 bg-gray-50 rounded-lg" data-oid="yr:.kd3">
                                    <h3
                                        className="text-lg font-medium text-red-800 mb-2"
                                        data-oid="o2cnzkr"
                                    >
                                        Displacement Schedule
                                    </h3>
                                    <p className="text-gray-600 mb-3" data-oid="krp6fm.">
                                        View or download the conference schedule for the
                                        Displacement event.
                                    </p>
                                    <a
                                        href="https://uoh-bucket-images.s3.us-east-1.amazonaws.com/docs/Displacement+Schedule.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-700 transition-colors"
                                        data-oid="clk9x5n"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="-s:w.en"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                data-oid="wqt3z77"
                                            />
                                        </svg>
                                        View Schedule PDF
                                    </a>
                                </div>
                                <p className="text-gray-500" data-oid="88pj1:l">
                                    More conference materials and announcements will be added here
                                    as they become available.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="cb2m4e." />
        </div>
    );
}
