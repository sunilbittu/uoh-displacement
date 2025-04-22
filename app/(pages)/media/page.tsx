'use client';
import React, { useState } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function MediaPage() {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Define the media items with the provided URLs
    const images = [
        {
            url: 'https://uoh-bucket-images.s3.us-east-1.amazonaws.com/photos/photo+(1).jpeg',
            title: 'Conference Photo 1',
        },
        {
            url: 'https://uoh-bucket-images.s3.us-east-1.amazonaws.com/photos/photo+(2).jpeg',
            title: 'Conference Photo 2',
        },
        {
            url: 'https://uoh-bucket-images.s3.us-east-1.amazonaws.com/photos/photo+(3).jpeg',
            title: 'Conference Photo 3',
        },
        {
            url: 'https://uoh-bucket-images.s3.us-east-1.amazonaws.com/photos/photo+(4).jpeg',
            title: 'Conference Photo 4',
        },
        {
            url: 'https://uoh-bucket-images.s3.us-east-1.amazonaws.com/photos/photo+(5).jpeg',
            title: 'Conference Photo 5',
        },
        {
            url: 'https://uoh-bucket-images.s3.us-east-1.amazonaws.com/photos/photo+(6).jpeg',
            title: 'Conference Photo 6',
        },
        {
            url: 'https://uoh-bucket-images.s3.us-east-1.amazonaws.com/photos/photo+(7).jpeg',
            title: 'Conference Photo 7',
        },
    ];

    const videos = [
        {
            url: 'https://uoh-bucket-images.s3.us-east-1.amazonaws.com/photos/video+(1).mp4',
            title: 'Conference Video',
        },
    ];

    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    // Function to open the image modal
    const openImageModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    // Function to close the image modal
    const closeImageModal = () => {
        setSelectedImage(null);
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
                        <h2 className="text-xl font-semibold text-red-800 mb-4" data-oid="_qhl19v">
                            Conference Media Gallery
                        </h2>

                        <p className="text-gray-700 mb-6" data-oid="rx8fhpi">
                            Browse photos and videos from the Displacement Conference. More media
                            will be added as the event approaches.
                        </p>

                        {/* Photos Section */}
                        <div className="mb-10" data-oid="72m.vt5">
                            <h3
                                className="text-lg font-medium text-indigo-700 mb-4"
                                data-oid="_lkuxom"
                            >
                                Photos
                            </h3>
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                                data-oid="je257st"
                            >
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                        onClick={() => openImageModal(image.url)}
                                        data-oid="sice1-9"
                                    >
                                        <div className="relative h-48" data-oid="ppuiw8.">
                                            <Image
                                                src={image.url}
                                                alt={image.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                data-oid="w.z_ojt"
                                            />
                                        </div>
                                        <div className="p-3 bg-gray-50" data-oid="93hcso9">
                                            <p
                                                className="text-sm font-medium text-gray-700"
                                                data-oid="3dhh5n."
                                            >
                                                {image.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Videos Section */}
                        <div data-oid=".ais2:4">
                            <h3
                                className="text-lg font-medium text-indigo-700 mb-4"
                                data-oid="jeae.br"
                            >
                                Videos
                            </h3>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="61gw6x7"
                            >
                                {videos.map((video, index) => (
                                    <div
                                        key={index}
                                        className="overflow-hidden rounded-lg shadow-md"
                                        data-oid="exubn1-"
                                    >
                                        <video
                                            controls
                                            className="w-full h-auto"
                                            data-oid="jutduzc"
                                        >
                                            <source
                                                src={video.url}
                                                type="video/mp4"
                                                data-oid="bivjv7q"
                                            />
                                            Your browser does not support the video tag.
                                        </video>
                                        <div className="p-3 bg-gray-50" data-oid="n4r5gku">
                                            <p
                                                className="font-medium text-gray-700"
                                                data-oid="axa_e7t"
                                            >
                                                {video.title}
                                            </p>
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
                            data-oid="6fbkdby"
                        >
                            <div className="relative max-w-4xl max-h-screen" data-oid="0k1f-33">
                                <button
                                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        closeImageModal();
                                    }}
                                    data-oid="j0omsf1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="qun67kt"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="81ptc6r"
                                        />
                                    </svg>
                                </button>
                                <Image
                                    src={selectedImage}
                                    alt="Enlarged photo"
                                    width={1200}
                                    height={800}
                                    className="max-h-[90vh] w-auto object-contain"
                                    data-oid="43ut_k9"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="184sc99" />
        </div>
    );
}
