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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="a1c8qrv">
            <Navigation
                activeSection="participants"
                scrollToSection={scrollToSection}
                data-oid="ozpnt1b"
            />

            <div className="pt-20 pb-10" data-oid="ngeu:nk">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ptxpvcs">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="e73_:w2">
                        Participants
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-8" data-oid="bcwak73">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="tnujczp">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="v6_lmz4"
                            >
                                Keynote Speakers
                            </h2>
                            <div className="space-y-6" data-oid="upzrdzd">
                                <div className="flex items-start space-x-4" data-oid="r90rwbg">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="_j.9jv8"
                                    >
                                        <Image
                                            src="/images/speaker-rajini.png"
                                            alt="Prof. Rajini Srikant"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="au10aip"
                                        />
                                    </div>
                                    <div data-oid="nq3_:0h">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="lnsd50v"
                                        >
                                            Prof. Rajini Srikant
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="wso5c3c">
                                            University of Massachusetts, Boston, USA
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="cwozrrp"
                                        >
                                            Expert in Migration Studies and Displacement
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="9kahztd">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="vowrhyq"
                                    >
                                        <Image
                                            src="/images/speaker-irudaya.jpeg"
                                            alt="Prof. Irudaya Rajan"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="flr:4t_"
                                        />
                                    </div>
                                    <div data-oid="8it6271">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="gz.u13p"
                                        >
                                            Prof. Irudaya Rajan
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="_38384b">
                                            The International Institute of Migration and Development
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="p6n589p"
                                        >
                                            Renowned researcher on migration patterns
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="wndi1dm">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="1q0ygia"
                                    >
                                        <Image
                                            src="/images/speaker-divya.jpeg"
                                            alt="Divya Jose"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="pdc0q3y"
                                        />
                                    </div>
                                    <div data-oid="lj17tvq">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="eqjop:n"
                                        >
                                            Divya Jose
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="7yyxzu-">
                                            Refugee Education, UK
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="i.fvph:"
                                        >
                                            Advocate for refugee education rights
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="20z8_:g">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="7:wdpp:"
                                    >
                                        <Image
                                            src="/images/speaker-vinay.jpeg"
                                            alt="Prof. Vinay Lal"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="d8sfl_a"
                                        />
                                    </div>
                                    <div data-oid="-z27hb:">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="wy6bj65"
                                        >
                                            Prof. Vinay Lal
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="90jwoep">
                                            University of California, LA, USA
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="4jcrnfq"
                                        >
                                            Historian specializing in colonial and postcolonial
                                            studies
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid=".9b3llc">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="eb5a8id"
                                    >
                                        <Image
                                            src="/images/speaker-knarayna.png"
                                            alt="Prof. K Narayana Chandran"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="_6oz82z"
                                        />
                                    </div>
                                    <div data-oid="wr5z9uz">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="r7vgvzc"
                                        >
                                            Prof. K Narayana Chandran
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="ecoexqo">
                                            Former Professor, UoH
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="5330ka0"
                                        >
                                            Distinguished scholar in literary studies
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="f71.:a5">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="uw8:7go"
                            >
                                Poets
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2"
                                data-oid="hsabpru"
                            >
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="fofjj8h"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="94gml5s">
                                        Yousif M. Qasmiyeh
                                    </h3>
                                </div>
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="7.764xa"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid=":.m8r0s">
                                        Shash Trevett
                                    </h3>
                                </div>
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="ad7301q"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="1n:2pjw">
                                        Anthony Vahni Capildeo
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="gi.sg6x">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid=":b5r:-h">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="hhi-lgw"
                            >
                                Paper Presenters
                            </h2>
                            <div className="space-y-4" data-oid="-p7i__c">
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="9kyl601"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="tod-53p">
                                        Aneil Rallin
                                    </h3>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="lcgljs9"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="_txa:og">
                                        Ido Fuchs
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="pe0f6q5">
                                        Visiting Researcher at the Network for Environmental
                                        Humanities at the Research Institute for Cultural Inquiry,
                                        Utrecht University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="1yx:s48"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="79ee7p2">
                                        K.S. Ahima
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="kg:6x-l">
                                        Research Scholar, Humanities and Social Sciences, NIT
                                        Warangal
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="v7sci6g"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="2xl6m2i">
                                        Abhilasha Sawlani
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="xq:a30n">
                                        Research Scholar, Ashoka University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="macpaqx"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="1s4jaxf">
                                        John Leandro Reyes
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="37:f_au">
                                        Associate Lecturer at Mindanao State University - Iligan
                                        Institute of Technology
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="bh:.184">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="ltmzl26"
                            >
                                Round Table Presenters
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2"
                                data-oid="6t5aju_"
                            >
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="17eqs1z"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="kbewd2d"
                                    >
                                        Arundhathi Padmanabhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="yi7q7nm"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="dtiqmfr"
                                    >
                                        Ardra Dinesh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="uuqnic5"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="v3sq28t"
                                    >
                                        Arup Kumar Bag
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="66w53b1"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="lgunl3d"
                                    >
                                        Monideepa Raichaudhuri and Raj Shekhar Barman
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="03ryyrr"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="fgljyy4"
                                    >
                                        Niharika Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="io7b3zc"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="4umy2sx"
                                    >
                                        Bihan Bandyopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="qcs_ahb"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="t23:c84"
                                    >
                                        Minyoung Kim
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="7t7q87o"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="8lzxu0-"
                                    >
                                        Abul Bashar
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="_rcdnsy"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="zt:ik_m"
                                    >
                                        Pooja Prasain
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="f0j:r31"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="7q6own6"
                                    >
                                        Trijit Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="yi62t-z"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ltizxt."
                                    >
                                        Akanchha Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="9iczhvs"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="6e:fn1r"
                                    >
                                        Meenakshi S. Thambi
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="ut2wwie"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="5n67803"
                                    >
                                        Prasann K Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="et3g.bd"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="9eaz.at"
                                    >
                                        Swayam Sikha Srichandan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="4xqakk:"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="mqh.8.m"
                                    >
                                        Muhammad Ashar Khan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="zu_zfoz"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":xq_04g"
                                    >
                                        Shataaxi Chauhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="w.nvzfu"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="qrz30:q"
                                    >
                                        Nayan Mary Tom
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="x:vw0mx"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="82dzyew"
                                    >
                                        Prachi Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="s630b75"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="yli9d65"
                                    >
                                        Bhakti Deshmukh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="6u12gaf"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="q7ku_99"
                                    >
                                        Sumana Sinhababu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="wrh8o_k"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="zj-2f32"
                                    >
                                        Rubaiya Nasrin
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="ddxsbtt"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="x1q3rl9"
                                    >
                                        Aishiki Bandhopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="atpcdhm"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="m.wy3_o"
                                    >
                                        Anjali Kaushik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="dct8-p4"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="..b7y:_"
                                    >
                                        Gazala F. Ansari
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="t6tweqd"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="rw7cg64"
                                    >
                                        Muhammed Saeed PK
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="zkll_4r"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="xpogi.s"
                                    >
                                        Piyush Protim Saikia and Trishna Saikia
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="-niz8es"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="i-1.oer"
                                    >
                                        Nandhana Suresh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="eqcdv9:"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="0743w7q"
                                    >
                                        Aadrit Banerjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="_9k-m6a"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="pw215ih"
                                    >
                                        Gautham Anil Warrier (Gaw)
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="6svgv:k"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="teu:_y1"
                                    >
                                        Biraj Biswas
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="w9-yvdb"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="dbjzxa4"
                                    >
                                        Swarupa Das
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="00qxb3m"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="0.zb8xj"
                                    >
                                        Astik Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="h8s-f3c"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="va-ffky"
                                    >
                                        Theadora War
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="et-vbsd"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="2.w62id"
                                    >
                                        Manisha Madhu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="xsh0bz9"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":--lgkq"
                                    >
                                        Rashmi Ranjan Panigrahi and Parthajyoti Roy
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="r561q4s"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="qn3zz8j"
                                    >
                                        Saptanil Maji
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8" data-oid="0gtm4b8">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="rf81kt8">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid=".jsvhn6"
                            >
                                Chairs
                            </h2>
                            <div className="space-y-4" data-oid="km6x:7z">
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="99ete-s"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="uko9am0"
                                    >
                                        Prof. Pramod K Nayar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="32u5lj_">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="a_b0d4e"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="5r5-op8"
                                    >
                                        Dr. Salah Punathil
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="o9ezlpy">
                                        Regional Studies, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="qm:fq40"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="hqoho6_"
                                    >
                                        Dr. Nandini Shankar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="rfjhz1l">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="0rwgy10"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="5jjcx5s"
                                    >
                                        Dr. Goutam Karmakar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="tc2pm.8">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="5xrd:b7"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="p7yinup"
                                    >
                                        Dr. Girish D. Pawar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="p1vhwfz">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="xv72nwy"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="a5tam:k"
                                    >
                                        Dr. B. Krishnaiah
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="hfjdyq9">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="a7id:hb"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="o5p_7rg"
                                    >
                                        Dr. Yakaiah Kathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="o0maffh">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="pz6npay"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ta79hjd"
                                    >
                                        Prof. Sathya Prakash
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="r8_0gg5">
                                        Department of Communication, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="3jel1rb"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="fa.5.ak"
                                    >
                                        Dr. Saradindu Bhattacharya
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="3azm-bc">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="w6dy93t"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="m94s9uh"
                                    >
                                        Prof. Ajaya Sahoo
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="_k:6zoy">
                                        Centre for Indian Diaspora, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="vpnpa47"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="row84ue"
                                    >
                                        Dr. Siddharth Satpathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="yxpoivr">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="31u.2pk"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="v3hz8g_"
                                    >
                                        Dr. Sriparna Das
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="1dxts9f">
                                        CALTS, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="l6qs6y2"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="631kqph"
                                    >
                                        Dr. Laboni Mukherjee
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="7lwga8:">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="d64tj28"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="7w9::6:"
                                    >
                                        Dr. Pushpanjali Sampathkumar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="aym9vrp">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="u1rcbca"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="cv66:1j"
                                    >
                                        Dr. Purna Chandra Naik
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="x1iagjk">
                                        CCL, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="s4sxz6-"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="r7kf-g-"
                                    >
                                        Prof. Anna Kurian
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="httr24p">
                                        Department of English, UoH
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="w-cana4" />
        </div>
    );
}
