'use client';
import React from 'react';
import Image from 'next/image';
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
                            <div className="space-y-6" data-oid="72iw:z_">
                                <div className="flex items-start space-x-4" data-oid="nu2_gef">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="rxdsaum"
                                    >
                                        <Image
                                            src="/images/speaker-rajini.png"
                                            alt="Prof. Rajini Srikant"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="tv95w2z"
                                        />
                                    </div>
                                    <div data-oid=":qbkrju">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="pr896_o"
                                        >
                                            Prof. Rajini Srikant
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="m9qan-b">
                                            University of Massachusetts, Boston, USA
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="z.em7pg"
                                        >
                                            Expert in Migration Studies and Displacement
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="r27q.i_">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="zfr1pz3"
                                    >
                                        <Image
                                            src="/images/speaker-irudaya.jpeg"
                                            alt="Prof. Irudaya Rajan"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="yw_lg7i"
                                        />
                                    </div>
                                    <div data-oid="qt.8ees">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="90gi4-3"
                                        >
                                            Prof. Irudaya Rajan
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="tjgi8s5">
                                            The International Institute of Migration and Development
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="phkcksw"
                                        >
                                            Renowned researcher on migration patterns
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="rp2l9o.">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid=".k6:mi0"
                                    >
                                        <Image
                                            src="/images/speaker-divya.jpeg"
                                            alt="Divya Jose"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="j08d1_-"
                                        />
                                    </div>
                                    <div data-oid="1hov0-p">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="-:3e1sj"
                                        >
                                            Divya Jose
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="qrb2_za">
                                            Refugee Education, UK
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="w3si5.x"
                                        >
                                            Advocate for refugee education rights
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="xr2atxx">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="1_byscz"
                                    >
                                        <Image
                                            src="/images/speaker-vinay.jpeg"
                                            alt="Prof. Vinay Lal"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="nr94gte"
                                        />
                                    </div>
                                    <div data-oid="083y7hs">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="qzsi9tg"
                                        >
                                            Prof. Vinay Lal
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="zrbnf83">
                                            University of California, LA, USA
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="6sk1bw2"
                                        >
                                            Historian specializing in colonial and postcolonial
                                            studies
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="r9rg14q">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="86:.0hp"
                                    >
                                        <Image
                                            src="/images/speaker-knarayna.png"
                                            alt="Prof. K Narayana Chandran"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="oqov.1p"
                                        />
                                    </div>
                                    <div data-oid="1z0oq82">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="zsu6ltx"
                                        >
                                            Prof. K Narayana Chandran
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="ob7.y2.">
                                            Former Professor, UoH
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="f5y-x_g"
                                        >
                                            Distinguished scholar in literary studies
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="tjwurl1">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="ji_rc91"
                            >
                                Chairs
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2"
                                data-oid="3nhzd62"
                            >
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
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="cq.eww4"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="dpbns9i"
                                    >
                                        Dr. Goutam Karmakar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="3bwvdx_">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="u3awa_f"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":d1dd9r"
                                    >
                                        Dr. Girish D. Pawar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="9rd9-fi">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="s6exrdl"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="42aibs0"
                                    >
                                        Dr. B. Krishnaiah
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="w5x_t3m">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="rcd:s5o"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="pa8qlm3"
                                    >
                                        Dr. Yakaiah Kathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="d-wlxd1">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="0aws.vd"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="nfm_u35"
                                    >
                                        Prof. Sathya Prakash
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="n8n0ts-">
                                        Department of Communication, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="pnug703"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="4n4-ncq"
                                    >
                                        Dr. Saradindu Bhattacharya
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="0tembj6">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="e12ff_v"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=".851lcm"
                                    >
                                        Prof. Ajaya Sahoo
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="9lkozw6">
                                        Centre for Indian Diaspora, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="r4.c.fz"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="mv1y801"
                                    >
                                        Dr. Siddharth Satpathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="m-bhuo-">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="wpqak2g"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ulql4h_"
                                    >
                                        Dr. Sriparna Das
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="520oeim">
                                        CALTS, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="z_565-4"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="quvaa2n"
                                    >
                                        Dr. Laboni Mukherjee
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="4356i-e">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="w5ytw_h"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="hjl:f-k"
                                    >
                                        Dr. Pushpanjali Sampathkumar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="53wb1x0">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="s.q16nr"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="t0wf6tl"
                                    >
                                        Dr. Purna Chandra Naik
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="2fjq9_m">
                                        CCL, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="py7qzic"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="9_p__j."
                                    >
                                        Prof. Anna Kurian
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="v351z46">
                                        Department of English, UoH
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

                    <div className="mt-8" data-oid="rcbqk.1">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="tx0ozne">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="mh6p_.1"
                            >
                                Poets
                            </h2>
                            <div className="space-y-4" data-oid="9e1b49l">
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="16oju:g"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="5inau4v"
                                    >
                                        Prof. Pramod K Nayar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="h0.jhah">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="dpns1li"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="nfh7ure"
                                    >
                                        Dr. Salah Punathil
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="15xrdqq">
                                        Regional Studies, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="n-5-mb9"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="chgvymv"
                                    >
                                        Dr. Nandini Shankar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="e::cz6f">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="4ituwm2"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="8iapt_8"
                                    >
                                        Dr. Goutam Karmakar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="pjn-jw7">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="7jtg7jd"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="2pdv9co"
                                    >
                                        Dr. Girish D. Pawar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="suhoqty">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="fxmt87s"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="8vyh117"
                                    >
                                        Dr. B. Krishnaiah
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="6tu1lnn">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="0jsvru1"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="eie-k88"
                                    >
                                        Dr. Yakaiah Kathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="pmyb7n7">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="ev72d16"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="pu14t_d"
                                    >
                                        Prof. Sathya Prakash
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="jb4a6ny">
                                        Department of Communication, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="o5ils1j"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="u_pg_lc"
                                    >
                                        Dr. Saradindu Bhattacharya
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="wl9o5jy">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="r6c4m4."
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="oia0i70"
                                    >
                                        Prof. Ajaya Sahoo
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="534-vw-">
                                        Centre for Indian Diaspora, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="8:t.uw2"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="c:cp6rb"
                                    >
                                        Dr. Siddharth Satpathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="1_sm49s">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="awf.fys"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="y9afbx:"
                                    >
                                        Dr. Sriparna Das
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="w8s6lgd">
                                        CALTS, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="o2rd782"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="4zt1qj8"
                                    >
                                        Dr. Laboni Mukherjee
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="z8my:q7">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="jwm11i1"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="415iv0x"
                                    >
                                        Dr. Pushpanjali Sampathkumar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="w08qhjy">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="d36h8_t"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="x9rshq8"
                                    >
                                        Dr. Purna Chandra Naik
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="9deuoyp">
                                        CCL, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="p:qy0ay"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="1ogw-hf"
                                    >
                                        Prof. Anna Kurian
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="t_oxaux">
                                        Department of English, UoH
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
