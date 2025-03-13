'use client';
import React from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

export default function ParticipantsPage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            <Navigation activeSection="participants" scrollToSection={scrollToSection} />

            <div className="pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-red-800 mb-8">Participants</h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-red-800 mb-4">Speakers</h2>
                            <p className="text-gray-700 mb-4">
                                Information about conference speakers will be available soon.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-red-800 mb-4">Poets</h2>
                            <p className="text-gray-700 mb-4">
                                Information about participating poets will be available soon.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-red-800 mb-4">
                                Paper Presenters
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Information about paper presenters will be available soon.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-red-800 mb-4">
                                Round Table Presenters
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Information about round table presenters will be available soon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
