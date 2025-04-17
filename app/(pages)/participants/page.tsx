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
                                    <h3 className="font-medium text-indigo-700" data-oid="2409cro">
                                        Yousif M. Qasmiyeh
                                    </h3>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="7v5yjco"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="fh6h3n7">
                                        Shash Trevett
                                    </h3>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="0ilj5z6"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="775.i_k">
                                        Anthony Vahni Capildeo
                                    </h3>
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
                            <div className="space-y-4" data-oid="41t3k-9">
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="5wn0kga"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="sirsv:v">
                                        Aneil Rallin
                                    </h3>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="t0blltk"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="nr9qaen">
                                        Ido Fuchs
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="znty-10">
                                        Visiting Researcher at the Network for Environmental
                                        Humanities at the Research Institute for Cultural Inquiry,
                                        Utrecht University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="f9k12xo"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="rzzvfir">
                                        K.S. Ahima
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="ipzaski">
                                        Research Scholar, Humanities and Social Sciences, NIT
                                        Warangal
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="wdt77ys"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="hv_eydb">
                                        Abhilasha Sawlani
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="nxqcuqw">
                                        Research Scholar, Ashoka University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="mg2j4u9"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="2k29r7m">
                                        John Leandro Reyes
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="r9l57i_">
                                        Associate Lecturer at Mindanao State University - Iligan
                                        Institute of Technology
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="z7j.:h7">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="0i94da_"
                            >
                                Round Table Presenters
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2"
                                data-oid="x::j0u1"
                            >
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="mhz24is"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="4cv-zo1"
                                    >
                                        Arundhathi Padmanabhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":ehrr3g"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="_9rfboi"
                                    >
                                        Ardra Dinesh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="70av_1-"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="3s94trd"
                                    >
                                        Arup Kumar Bag
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="mr-cf2v"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="2fofmr5"
                                    >
                                        Monideepa Raichaudhuri and Raj Shekhar Barman
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="8--8r3f"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="kt.lq8-"
                                    >
                                        Niharika Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="o79fjed"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="v0jd:5h"
                                    >
                                        Bihan Bandyopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="sw-yo66"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="fpnkdnl"
                                    >
                                        Minyoung Kim
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="_z2d996"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="mb50c.s"
                                    >
                                        Abul Bashar
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="kkq_p_q"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="gaz3.7d"
                                    >
                                        Pooja Prasain
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="71ga1d:"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="jyw_._:"
                                    >
                                        Trijit Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="9cqtoht"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="14t.6d3"
                                    >
                                        Akanchha Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="gaqxpq6"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="dwn6aqh"
                                    >
                                        Meenakshi S. Thambi
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="uqwqa5e"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="nbseckb"
                                    >
                                        Prasann K Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="bfq-02a"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="39url4y"
                                    >
                                        Swayam Sikha Srichandan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="-km8py9"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="9dxbnux"
                                    >
                                        Muhammad Ashar Khan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="u_2pb.c"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="14xk2m2"
                                    >
                                        Shataaxi Chauhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="9r.s-5:"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ast0esa"
                                    >
                                        Nayan Mary Tom
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="c6iktfn"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="k.dcjl-"
                                    >
                                        Prachi Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="ovlpob_"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=".q4_8lv"
                                    >
                                        Bhakti Deshmukh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="zmdiv8x"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="p8isftd"
                                    >
                                        Sumana Sinhababu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="-8h.xna"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="lprzuc6"
                                    >
                                        Rubaiya Nasrin
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="h09eouv"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="31e4mo6"
                                    >
                                        Aishiki Bandhopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="g3dtoej"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="88mnkx5"
                                    >
                                        Anjali Kaushik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="lelztlk"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="gi4bx30"
                                    >
                                        Gazala F. Ansari
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="afh4dbe"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="p-zvru6"
                                    >
                                        Muhammed Saeed PK
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="5wcrzlj"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="96qpl5_"
                                    >
                                        Piyush Protim Saikia and Trishna Saikia
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="_tn6a3."
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="44lilbv"
                                    >
                                        Nandhana Suresh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="fzfktrt"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="a.xuskk"
                                    >
                                        Aadrit Banerjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="zvtxrg4"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="hnok0n6"
                                    >
                                        Gautham Anil Warrier (Gaw)
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="a-5e__-"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="phhfqcb"
                                    >
                                        Biraj Biswas
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="br.0l7e"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="zmt8oe7"
                                    >
                                        Swarupa Das
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="xwycqj4"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="wz14vt-"
                                    >
                                        Astik Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="p7g--a5"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="3r9eus5"
                                    >
                                        Theadora War
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="gxw00yv"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="w5nkm8d"
                                    >
                                        Manisha Madhu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="g348swj"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="usxw_ke"
                                    >
                                        Rashmi Ranjan Panigrahi and Parthajyoti Roy
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="io1.exi"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ddkr7yr"
                                    >
                                        Saptanil Maji
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="jp0tr6b" />
        </div>
    );
}
