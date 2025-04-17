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
                            <div className="space-y-4" data-oid="l.oip3s">
                                {/* We'll add photos later when provided */}
                                <div className="flex items-start space-x-3" data-oid="2_teow-">
                                    <div
                                        className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"
                                        data-oid="te.hqor"
                                    >
                                        {/* Photo placeholder - will be replaced with Image component */}
                                    </div>
                                    <div data-oid="o4w5npx">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="t3c7tbl"
                                        >
                                            Prof. Rajini Srikant
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="pnkbb-d">
                                            University of Massachusetts, Boston, USA
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3" data-oid="g3e9gs2">
                                    <div
                                        className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"
                                        data-oid="0cipe47"
                                    >
                                        {/* Photo placeholder */}
                                    </div>
                                    <div data-oid="z5mus:c">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="sqd:b1d"
                                        >
                                            Prof. Irudaya Rajan
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="okv:t58">
                                            The International Institute of Migration and Development
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3" data-oid="ceciru4">
                                    <div
                                        className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"
                                        data-oid="tah7x_n"
                                    >
                                        {/* Photo placeholder */}
                                    </div>
                                    <div data-oid="izl5yim">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="p3jdo_s"
                                        >
                                            Divya Jose
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="k.dl1up">
                                            Refugee Education, UK
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3" data-oid=".px-269">
                                    <div
                                        className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"
                                        data-oid="s:4mnff"
                                    >
                                        {/* Photo placeholder */}
                                    </div>
                                    <div data-oid="sza:ujl">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="v8374un"
                                        >
                                            Prof. Vinay Lal
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="rl2d4.l">
                                            University of California, LA, USA
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3" data-oid="-x-u.7x">
                                    <div
                                        className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"
                                        data-oid="lj-ysig"
                                    >
                                        {/* Photo placeholder */}
                                    </div>
                                    <div data-oid="fs4h4_b">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="fhgt_1i"
                                        >
                                            Prof. K Narayana Chandran
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="1j-xp:m">
                                            Former Professor, UoH
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="tx0ozne">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="mh6p_.1"
                            >
                                Poets
                            </h2>
                            <div className="space-y-4" data-oid="9e1b49l">
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="o-gxhc0"
                                >
                                    <h3
                                        className="font-medium text-indigo-700 mb-1"
                                        data-oid="2409cro"
                                    >
                                        Yousif M. Qasmiyeh
                                    </h3>
                                    <p className="text-gray-700 italic text-sm" data-oid="y6dzh48">
                                        "Poetry is the language of displacement, where words
                                        themselves become refugees."
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="7v5yjco"
                                >
                                    <h3
                                        className="font-medium text-indigo-700 mb-1"
                                        data-oid="fh6h3n7"
                                    >
                                        Shash Trevett
                                    </h3>
                                    <p className="text-gray-700 italic text-sm" data-oid="gu4mxvl">
                                        "Through poetry, we can traverse borders that are otherwise
                                        impassable."
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="0ilj5z6"
                                >
                                    <h3
                                        className="font-medium text-indigo-700 mb-1"
                                        data-oid="775.i_k"
                                    >
                                        Anthony Vahni Capildeo
                                    </h3>
                                    <p className="text-gray-700 italic text-sm" data-oid="r0-ba-g">
                                        "The poem is a home we build with words when our physical
                                        homes are lost."
                                    </p>
                                </div>
                            </div>
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
