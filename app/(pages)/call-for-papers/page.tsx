'use client';
import React from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CallForPapersPage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    // Sample PDF documents - replace with your actual PDFs
    const pdfDocuments = [
        {
            title: 'Call for Papers - Main Document',
            description: 'Detailed information about submission guidelines and conference themes',
            url: '/pdfs/call-for-papers.pdf',
        },
        {
            title: 'Submission Template',
            description: 'Template for paper submissions',
            url: '/pdfs/submission-template.pdf',
        },
        {
            title: 'Important Dates',
            description: 'Key deadlines for submissions and registration',
            url: '/pdfs/important-dates.pdf',
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            <Navigation activeSection="call-for-papers" scrollToSection={scrollToSection} />

            <div className="pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-red-800 mb-8">Call for Papers</h1>

                    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Conference Theme: Displacement
                        </h2>
                        <p className="text-gray-700 mb-4">
                            We invite scholars, researchers, and practitioners to submit papers
                            exploring the multifaceted dimensions of displacement in contemporary
                            society. The conference aims to foster interdisciplinary dialogue on
                            various aspects of displacement including but not limited to:
                        </p>
                        <ul className="list-disc pl-5 mb-4 text-gray-700">
                            <li>Forced migration and refugee studies</li>
                            <li>Environmental displacement</li>
                            <li>Economic displacement</li>
                            <li>Cultural and social displacement</li>
                            <li>Technological displacement</li>
                            <li>Historical perspectives on displacement</li>
                        </ul>
                        <p className="text-gray-700">
                            Please review the documents below for detailed submission guidelines and
                            important dates.
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Documents</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pdfDocuments.map((doc, index) => (
                            <div
                                key={index}
                                className="bg-white p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">
                                    {doc.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{doc.description}</p>
                                <Link
                                    href={doc.url}
                                    target="_blank"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    View PDF
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-2 h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
