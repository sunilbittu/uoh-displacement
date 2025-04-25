'use client';
import React, { useState } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function MediaPage() {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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

    // Function to open the video modal
    const openVideoModal = (videoUrl: string) => {
        setSelectedVideo(videoUrl);
    };

    // Function to close the video modal
    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="h5jrb5x">
            <Navigation
                activeSection="media"
                scrollToSection={scrollToSection}
                data-oid="94ec:50"
            />

            <div className="pt-20 pb-10" data-oid="n0.5.qj">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="kl1:wmq">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="8kew9:f">
                        Media
                    </h1>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="rkn6bvq">
                        <h2 className="text-xl font-semibold text-red-800 mb-4" data-oid="qk50n6p">
                            Culturals BTS
                        </h2>

                        <p className="text-gray-700 mb-6" data-oid="77dkp83">
                            Browse behind-the-scenes photos and videos from our cultural events.
                            More media will be added as events take place.
                        </p>

                        {/* Photos Section */}
                        <div className="mb-10" data-oid="q1oc6ad">
                            <h3
                                className="text-lg font-medium text-indigo-700 mb-4"
                                data-oid="oafbtf:"
                            >
                                Photos - Culturals BTS
                            </h3>
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                                data-oid="wn0sgdv"
                            >
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                        onClick={() => openImageModal(image.url)}
                                        data-oid="bffa:ci"
                                    >
                                        <div
                                            className="relative h-48 overflow-hidden"
                                            data-oid="jg25q5q"
                                        >
                                            <Image
                                                src={image.url}
                                                alt={image.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                data-oid="lm8aw51"
                                            />

                                            <div
                                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center"
                                                data-oid="koxdt_a"
                                            >
                                                <div
                                                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    data-oid=":acu7eo"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-10 w-10"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        data-oid="ka.ip5c"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                                            data-oid="kt8dn48"
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
                        <div data-oid="v44rgqz">
                            <h3
                                className="text-lg font-medium text-indigo-700 mb-4"
                                data-oid="5.8ic26"
                            >
                                Videos - Culturals BTS
                            </h3>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="r4d_vby"
                            >
                                {videos.map((video, index) => (
                                    <div
                                        key={index}
                                        className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                        data-oid="27e3zld"
                                    >
                                        <div
                                            className="relative overflow-hidden bg-gray-900"
                                            data-oid="1li3568"
                                        >
                                            <video
                                                className="w-full h-auto transition-transform duration-500 group-hover:scale-105 bg-black"
                                                onClick={() => openVideoModal(video.url)}
                                                preload="metadata"
                                                data-oid="f:ihr8_"
                                            >
                                                <source
                                                    src={video.url}
                                                    type="video/mp4"
                                                    data-oid="fiwr-cs"
                                                />
                                                Your browser does not support the video tag.
                                            </video>
                                            <div
                                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center pointer-events-none"
                                                data-oid="k8b8iik"
                                            >
                                                <div
                                                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    data-oid="hjzgogt"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-16 w-16"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        data-oid="a315hru"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                                            data-oid="j9.276t"
                                                        />

                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            data-oid="k2hv3p:"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
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
                            data-oid="wfekgq0"
                        >
                            <div
                                className="relative max-w-5xl max-h-screen animate-scaleIn"
                                data-oid="hbtlawh"
                            >
                                <button
                                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        closeImageModal();
                                    }}
                                    aria-label="Close"
                                    data-oid="y5_9eig"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="ccfk_7."
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="7iqs-56"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className="bg-white bg-opacity-5 p-1 rounded-lg"
                                    data-oid="gsq6dfd"
                                >
                                    <Image
                                        src={selectedImage}
                                        alt="Enlarged photo"
                                        width={1600}
                                        height={1000}
                                        className="max-h-[90vh] w-auto object-contain rounded shadow-2xl"
                                        priority
                                        data-oid="q:5--tz"
                                    />
                                </div>
                                <div
                                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                                    data-oid="7e3:081"
                                >
                                    <p
                                        className="text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full"
                                        data-oid="e53uty3"
                                    >
                                        Click anywhere to close
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Video Modal */}
                    {selectedVideo && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fadeIn"
                            onClick={closeVideoModal}
                            data-oid="oocq-_f"
                        >
                            <div
                                className="relative max-w-5xl max-h-screen animate-scaleIn"
                                data-oid="rnk7kry"
                            >
                                <button
                                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors z-10"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        closeVideoModal();
                                    }}
                                    aria-label="Close"
                                    data-oid="w6xzvaw"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="xwkp5yx"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="hs9k9:y"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className="bg-white bg-opacity-5 p-1 rounded-lg"
                                    data-oid="axw-3k1"
                                >
                                    <video
                                        controls
                                        autoPlay
                                        className="max-h-[90vh] max-w-full rounded shadow-2xl bg-black"
                                        onClick={(e) => e.stopPropagation()}
                                        data-oid="v0vcg0x"
                                    >
                                        <source
                                            src={selectedVideo}
                                            type="video/mp4"
                                            data-oid="885gi15"
                                        />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div
                                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                                    data-oid="52g5td6"
                                >
                                    <p
                                        className="text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full"
                                        data-oid="xli4n14"
                                    >
                                        Click anywhere to close
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="-ptm:.u" />
        </div>
    );
}
