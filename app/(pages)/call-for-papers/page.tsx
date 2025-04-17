'use client';
import React from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

export default function CallForPapersPage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    // CFP PDFs
    const cfpDocuments = [
        {
            id: 'displacement1',
            title: 'Call for creative contributions',
            url: 'https://uoh-bucket-images.s3.us-east-1.amazonaws.com/docs/Displacement1.pdf',
        },
        {
            id: 'displacement2',
            title: 'Call for Papers',
            url: 'https://uoh-bucket-images.s3.us-east-1.amazonaws.com/docs/Displacement2.pdf',
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="37m:09e">
            <Navigation
                activeSection="call-for-papers"
                scrollToSection={scrollToSection}
                data-oid="u:dxie3"
            />

            <div className="pt-20 pb-10" data-oid="_-oeatk">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".6ekamx">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="cwojia6">
                        Call for Papers
                    </h1>

                    <div className="bg-white p-6 rounded-lg shadow-md mb-8" data-oid="k1r4o1i">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4" data-oid="viar0rh">
                            Conference Theme: Displacement
                        </h2>
                        <p className="text-gray-700 mb-4" data-oid="qv-5tng">
                            We invite scholars, researchers, and practitioners to submit papers
                            exploring the multifaceted dimensions of displacement in contemporary
                            society. Please review the call for papers documents below for detailed
                            submission guidelines and important dates.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6" data-oid="znybw7_">
                        {cfpDocuments.map((doc) => (
                            <div
                                key={doc.id}
                                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                                data-oid="cp_f-6k"
                            >
                                <div
                                    className="flex flex-col items-center justify-center space-y-4"
                                    data-oid="g2qij:f"
                                >
                                    <div className="text-5xl text-red-700" data-oid="m637itu">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-20 w-20"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="xy6bmgy"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                data-oid="s3a42xg"
                                            />
                                        </svg>
                                    </div>
                                    <h3
                                        className="text-xl font-semibold text-gray-800 text-center"
                                        data-oid="tu03bcy"
                                    >
                                        {doc.title}
                                    </h3>
                                    <a
                                        href={doc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors flex items-center space-x-2"
                                        data-oid="i3sqk92"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="8tgx2sf"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                data-oid="v2c2i.q"
                                            />
                                        </svg>
                                        <span data-oid="8cxpdzw">Download PDF</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="y:k-onp" />
        </div>
    );
}
