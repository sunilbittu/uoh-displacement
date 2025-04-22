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
            title: '',
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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="qs.j06b">
            <Navigation
                activeSection="media"
                scrollToSection={scrollToSection}
                data-oid="0i7zwt2"
            />

            <div className="pt-20 pb-10" data-oid="n638:el">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="-gd9w5-">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="2wdne2m">
                        Media
                    </h1>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="dwgg-6g">
                        <h2 className="text-xl font-semibold text-red-800 mb-4" data-oid="-:5.9t1">
                            Conference Media Gallery
                        </h2>

                        <p className="text-gray-700 mb-6" data-oid="-b:3_.6">
                            Browse photos and videos from the Displacement Conference. More media
                            will be added as the event approaches.
                        </p>

                        {/* Photos Section */}
                        <div className="mb-10" data-oid="1:1mrs.">
                            <h3
                                className="text-lg font-medium text-indigo-700 mb-4"
                                data-oid="t.echdo"
                            >
                                Photos
                            </h3>
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                                data-oid="q.hxpy3"
                            >
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                        onClick={() => openImageModal(image.url)}
                                        data-oid="5ts83z:"
                                    >
                                        <div
                                            className="relative h-48 overflow-hidden"
                                            data-oid="6larisf"
                                        >
                                            <Image
                                                src={image.url}
                                                alt={image.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                data-oid="vft6k7z"
                                            />

                                            <div
                                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center"
                                                data-oid="rdb-t7_"
                                            >
                                                <div
                                                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    data-oid="9d:80g5"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-10 w-10"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        data-oid="-zewa4z"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                                            data-oid="kua55oh"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Videos Section */}
                        <div data-oid="anro2oo">
                            <h3
                                className="text-lg font-medium text-indigo-700 mb-4"
                                data-oid="arml.4m"
                            >
                                Videos
                            </h3>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="vp2:0n_"
                            >
                                {videos.map((video, index) => (
                                    <div
                                        key={index}
                                        className="overflow-hidden rounded-lg shadow-md"
                                        data-oid="h-ryt9:"
                                    >
                                        <video
                                            controls
                                            className="w-full h-auto"
                                            data-oid="a_wp.q:"
                                        >
                                            <source
                                                src={video.url}
                                                type="video/mp4"
                                                data-oid="99e8nae"
                                            />
                                            Your browser does not support the video tag.
                                        </video>
                                        {/* Title section removed */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image Modal */}
                    {selectedImage && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fadeIn"
                            onClick={closeImageModal}
                            data-oid="2gpozym"
                        >
                            <div
                                className="relative max-w-5xl max-h-screen animate-scaleIn"
                                data-oid="1ob8pxl"
                            >
                                <button
                                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        closeImageModal();
                                    }}
                                    data-oid="dz1_xrd"
                                    aria-label="Close"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid=":wzmbv0"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="4lvhies"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className="bg-white bg-opacity-5 p-1 rounded-lg"
                                    data-oid="cp924ie"
                                >
                                    <Image
                                        src={selectedImage}
                                        alt="Enlarged photo"
                                        width={1600}
                                        height={1000}
                                        className="max-h-[90vh] w-auto object-contain rounded shadow-2xl"
                                        data-oid="vp4xg9w"
                                        priority
                                    />
                                </div>
                                <div
                                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                                    data-oid="_57st5_"
                                >
                                    <p
                                        className="text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full"
                                        data-oid="ofu65nk"
                                    >
                                        Click anywhere to close
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="tf4fgnd" />
        </div>
    );
}
