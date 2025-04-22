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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="n98rfjh">
            <Navigation
                activeSection="updates"
                scrollToSection={scrollToSection}
                data-oid="clxs8:-"
            />

            <div className="pt-20 pb-10" data-oid="htc2lj_">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="tnszw6l">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="uwaz04i">
                        Updates
                    </h1>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="b3c3ffm">
                        <p className="text-gray-700 mb-4" data-oid="ydam1bx">
                            Conference updates, announcements, and posters will be available here
                            soon.
                        </p>
                        <div
                            className="border-2 border-dashed border-gray-300 p-8 rounded-lg text-center"
                            data-oid="z_0:eeh"
                        >
                            <h2
                                className="text-xl font-semibold text-gray-500 mb-2"
                                data-oid="p4fxe7u"
                            >
                                Conference Materials
                            </h2>
                            <div className="space-y-4" data-oid="9ypf9n6">
                                <div className="p-4 bg-gray-50 rounded-lg" data-oid="1-agheq">
                                    <h3
                                        className="text-lg font-medium text-red-800 mb-2"
                                        data-oid="-pydw_x"
                                    >
                                        Displacement Schedule
                                    </h3>
                                    <p className="text-gray-600 mb-3" data-oid="t8tox_p">
                                        View or download the conference schedule for the
                                        Displacement event.
                                    </p>
                                    <a
                                        href="https://uoh-bucket-images.s3.us-east-1.amazonaws.com/docs/Displacement+Schedule.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-700 transition-colors"
                                        data-oid="gkze4kh"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="uziju_y"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                data-oid="ywke:xy"
                                            />
                                        </svg>
                                        View Schedule PDF
                                    </a>
                                </div>
                                <p className="text-gray-500" data-oid="-o96mss">
                                    More conference materials and announcements will be added here
                                    as they become available.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="l3pel16" />
        </div>
    );
}
