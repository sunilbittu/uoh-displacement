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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="eoatebl">
            <Navigation
                activeSection="participants"
                scrollToSection={scrollToSection}
                data-oid="67kevhc"
            />

            <div className="pt-20 pb-10" data-oid="ia5hjio">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="e0zocmr">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="rcwuptp">
                        Participants
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-8" data-oid="c34hrn4">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="cel3-c5">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="vtiaejb"
                            >
                                Keynote Speakers
                            </h2>
                            <p className="text-gray-700 mb-4" data-oid="h-s29_2">
                                Information about conference speakers will be available soon.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="tx0ozne">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="mh6p_.1"
                            >
                                Poets
                            </h2>
                            <p className="text-gray-700 mb-4" data-oid="scbeann">
                                Information about participating poets will be available soon.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid=".elgez3">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="n_1_:fe">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="_0eifx8"
                            >
                                Paper Presenters
                            </h2>
                            <p className="text-gray-700 mb-4" data-oid="21ou6fu">
                                Information about paper presenters will be available soon.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="z7j.:h7">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="0i94da_"
                            >
                                Round Table Presenters
                            </h2>
                            <p className="text-gray-700 mb-4" data-oid="kslol-_">
                                Information about round table presenters will be available soon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="jp0tr6b" />
        </div>
    );
}
