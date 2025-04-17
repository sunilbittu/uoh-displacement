'use client';
import React, { useState } from 'react';
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

    // CFP images from public/images
    const cfpImages = [
        {
            id: 'cfp',
            src: '/images/cfp.webp',
            alt: 'Call for Papers',
        },
        {
            id: 'cfp1',
            src: '/images/cfp1.webp',
            alt: 'Call for Papers 1',
        },
        {
            id: 'cfp2',
            src: '/images/cfp2.webp',
            alt: 'Call for Papers 2',
        },
        {
            id: 'cfp3',
            src: '/images/cfp3.webp',
            alt: 'Call for Papers 3',
        },
    ];

    // Function to open the image modal
    const openImageModal = (imageSrc: string) => {
        setSelectedImage(imageSrc);
    };

    // Function to close the image modal
    const closeImageModal = () => {
        setSelectedImage(null);
    };

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
                        {cfpImages.map((image) => (
                            <div
                                key={image.id}
                                className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                                onClick={() => openImageModal(image.src)}
                                data-oid="ap1ttw4"
                            >
                                <div className="relative w-full h-[400px]" data-oid="5s1bhl:">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        className="rounded"
                                        data-oid="ejl:poq"
                                    />
                                </div>
                                <div className="mt-4 text-center" data-oid="j-_coyn">
                                    <button
                                        className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition-colors"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            openImageModal(image.src);
                                        }}
                                        data-oid="qaebls0"
                                    >
                                        View Full Size
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeImageModal}
                    data-oid="ynacttk"
                >
                    <div
                        className="relative max-w-4xl max-h-[90vh] w-full"
                        onClick={(e) => e.stopPropagation()}
                        data-oid="8hyoi9h"
                    >
                        <button
                            className="absolute top-2 right-2 bg-white rounded-full p-2 z-10"
                            onClick={closeImageModal}
                            data-oid="s56gqzm"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="72_98qu"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                    data-oid=":kc691r"
                                />
                            </svg>
                        </button>
                        <div className="relative w-full h-[80vh]" data-oid="y87163x">
                            <Image
                                src={selectedImage}
                                alt="Call for Papers"
                                fill
                                style={{ objectFit: 'contain' }}
                                className="rounded"
                                data-oid="uxnd28h"
                            />
                        </div>
                    </div>
                </div>
            )}

            <Footer scrollToSection={scrollToSection} data-oid="2jllk54" />
        </div>
    );
}
