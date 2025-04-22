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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="xjbyo6v">
            <Navigation
                activeSection="media"
                scrollToSection={scrollToSection}
                data-oid="2mwz94v"
            />

            <div className="pt-20 pb-10" data-oid="htwawa9">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="3btfvdo">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="_dajjbn">
                        Media
                    </h1>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="h37:ob_">
                        <h2 className="text-xl font-semibold text-red-800 mb-4" data-oid="waw-d20">
                            Conference Media Gallery
                        </h2>

                        <p className="text-gray-700 mb-6" data-oid="5l5s7ld">
                            Browse photos and videos from the Displacement Conference. More media
                            will be added as the event approaches.
                        </p>

                        {/* Photos Section */}
                        <div className="mb-10" data-oid="v93701j">
                            <h3
                                className="text-lg font-medium text-indigo-700 mb-4"
                                data-oid="u8:68kn"
                            >
                                Photos
                            </h3>
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                                data-oid="7sry_wk"
                            >
                                {images.map((image, index) => (
                                    <div
                                        key={index}
                                        className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                        onClick={() => openImageModal(image.url)}
                                        data-oid="tys_5z0"
                                    >
                                        <div
                                            className="relative h-48 overflow-hidden"
                                            data-oid="2xpl59k"
                                        >
                                            <Image
                                                src={image.url}
                                                alt={image.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                data-oid="_2wdhq5"
                                            />

                                            <div
                                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center"
                                                data-oid="9yez01."
                                            >
                                                <div
                                                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    data-oid="o962_eb"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-10 w-10"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        data-oid="i7xdpl3"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                                            data-oid="7gjstta"
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
                        <div data-oid="juuha40">
                            <h3
                                className="text-lg font-medium text-indigo-700 mb-4"
                                data-oid="uvktuv1"
                            >
                                Videos
                            </h3>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                data-oid="a9n2ax:"
                            >
                                {videos.map((video, index) => (
                                    <div
                                        key={index}
                                        className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                        data-oid="l3l26s6"
                                    >
                                        <div
                                            className="relative overflow-hidden bg-gray-900"
                                            data-oid="k7iu.zc"
                                        >
                                            <video
                                                className="w-full h-auto transition-transform duration-500 group-hover:scale-105 bg-black"
                                                onClick={() => openVideoModal(video.url)}
                                                preload="metadata"
                                                data-oid="mo1wdgl"
                                            >
                                                <source
                                                    src={video.url}
                                                    type="video/mp4"
                                                    data-oid="tbv4:l_"
                                                />
                                                Your browser does not support the video tag.
                                            </video>
                                            <div
                                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center pointer-events-none"
                                                data-oid="sjrzyam"
                                            >
                                                <div
                                                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    data-oid="jt48jq6"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-16 w-16"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        data-oid="_u57ozw"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                                            data-oid="fmls7qb"
                                                        />

                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            data-oid="zz.u68t"
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
                            data-oid="e3:tksi"
                        >
                            <div
                                className="relative max-w-5xl max-h-screen animate-scaleIn"
                                data-oid=".twkllx"
                            >
                                <button
                                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        closeImageModal();
                                    }}
                                    aria-label="Close"
                                    data-oid="5ha-yne"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="q-h_1vm"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="smadaq0"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className="bg-white bg-opacity-5 p-1 rounded-lg"
                                    data-oid="7.gyqtx"
                                >
                                    <Image
                                        src={selectedImage}
                                        alt="Enlarged photo"
                                        width={1600}
                                        height={1000}
                                        className="max-h-[90vh] w-auto object-contain rounded shadow-2xl"
                                        priority
                                        data-oid="c.4na._"
                                    />
                                </div>
                                <div
                                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                                    data-oid="vt-b_et"
                                >
                                    <p
                                        className="text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full"
                                        data-oid="p1kfmx-"
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
                            data-oid="p-eoc88"
                        >
                            <div
                                className="relative max-w-5xl max-h-screen animate-scaleIn"
                                data-oid="4-0kaix"
                            >
                                <button
                                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors z-10"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        closeVideoModal();
                                    }}
                                    aria-label="Close"
                                    data-oid="93itrq8"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="p-:zcjf"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="omot1uj"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className="bg-white bg-opacity-5 p-1 rounded-lg"
                                    data-oid="v.fjfbk"
                                >
                                    <video
                                        controls
                                        autoPlay
                                        className="max-h-[90vh] max-w-full rounded shadow-2xl bg-black"
                                        onClick={(e) => e.stopPropagation()}
                                        data-oid="2782u.7"
                                    >
                                        <source
                                            src={selectedVideo}
                                            type="video/mp4"
                                            data-oid="rlxyep:"
                                        />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div
                                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
                                    data-oid="33s2ht2"
                                >
                                    <p
                                        className="text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full"
                                        data-oid="goy-_oq"
                                    >
                                        Click anywhere to close
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid=".jwnbbg" />
        </div>
    );
}
