'use client';
import React from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CallForPapersPage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // CFP PDFs
    const cfpDocuments = [
        {
            id: 'displacement1',
            title: 'Displacement - Document 1',
            url: 'https://uoh-bucket-images.s3.us-east-1.amazonaws.com/docs/Displacement1.pdf',
        },
        {
            id: 'displacement2',
            title: 'Displacement - Document 2',
            url: 'https://uoh-bucket-images.s3.us-east-1.amazonaws.com/docs/Displacement2.pdf',
        },
    ];

    // No need for modal functions since we're using direct PDF links

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="vs9-2eg">
            <Navigation
                activeSection="call-for-papers"
                scrollToSection={scrollToSection}
                data-oid="lg3z.9d"
            />

            <div className="pt-20 pb-10" data-oid="o7jalo1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="m79.ugn">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="qo62hgc">
                        Call for Papers
                    </h1>

                    <div className="bg-white p-6 rounded-lg shadow-md mb-8" data-oid="03u-ew.">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4" data-oid=":jwl439">
                            Conference Theme: Displacement
                        </h2>
                        <p className="text-gray-700 mb-4" data-oid="u3tjvk4">
                            We invite scholars, researchers, and practitioners to submit papers
                            exploring the multifaceted dimensions of displacement in contemporary
                            society. Please review the call for papers documents below for detailed
                            submission guidelines and important dates.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6" data-oid="r7c9nc9">
                        {cfpDocuments.map((doc) => (
                            <div
                                key={doc.id}
                                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                                data-oid="ap1ttw4"
                            >
                                <div
                                    className="flex flex-col items-center justify-center space-y-4"
                                    data-oid="na4mwno"
                                >
                                    <div className="text-5xl text-red-700" data-oid="xm2gmt8">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-20 w-20"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="gkuiojl"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                data-oid="r_2l4bx"
                                            />
                                        </svg>
                                    </div>
                                    <h3
                                        className="text-xl font-semibold text-gray-800 text-center"
                                        data-oid="w1exh98"
                                    >
                                        {doc.title}
                                    </h3>
                                    <a
                                        href={doc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors flex items-center space-x-2"
                                        data-oid="o29n-j1"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="z.l5aq6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                data-oid="m6rvxr0"
                                            />
                                        </svg>
                                        <span data-oid="iwtlv1b">Download PDF</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* No image modal needed anymore */}

            <Footer scrollToSection={scrollToSection} data-oid="2jllk54" />
        </div>
    );
}
