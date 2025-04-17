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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="vr95n_1">
            <Navigation
                activeSection="participants"
                scrollToSection={scrollToSection}
                data-oid="vbh9a78"
            />

            <div className="pt-20 pb-10" data-oid="mhz8kqb">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="-rypr4u">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="cluyb7p">
                        Participants
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-8" data-oid="3u.8ea.">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid=":yslgnx">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="4dsax-h"
                            >
                                Keynote Speakers
                            </h2>
                            <div className="space-y-6" data-oid="ccj59jk">
                                <div className="flex items-start space-x-4" data-oid="jtbk:i4">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="yzaggmv"
                                    >
                                        <Image
                                            src="/images/speaker-rajini.png"
                                            alt="Prof. Rajini Srikant"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="-7ao-.v"
                                        />
                                    </div>
                                    <div data-oid="kvgi0lq">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="v0toihj"
                                        >
                                            Prof. Rajini Srikant
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="m:ihj8s">
                                            University of Massachusetts, Boston, USA
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="1ub8.d:"
                                        >
                                            Expert in Migration Studies and Displacement
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="7.pjbze">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="syf_axo"
                                    >
                                        <Image
                                            src="/images/speaker-irudaya.jpeg"
                                            alt="Prof. Irudaya Rajan"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="j3ha4zd"
                                        />
                                    </div>
                                    <div data-oid="kzv0seu">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="fcahqds"
                                        >
                                            Prof. Irudaya Rajan
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="k26ucn:">
                                            The International Institute of Migration and Development
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="9tw638g"
                                        >
                                            Renowned researcher on migration patterns
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="k:3q_oh">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="ogpqu4z"
                                    >
                                        <Image
                                            src="/images/speaker-divya.jpeg"
                                            alt="Divya Jose"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="j4p_e2d"
                                        />
                                    </div>
                                    <div data-oid="bxjppa2">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="fs6-l8u"
                                        >
                                            Divya Jose
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="ow8p:t6">
                                            Refugee Education, UK
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="98:s0ut"
                                        >
                                            Advocate for refugee education rights
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="6woulz9">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="ijx5o:_"
                                    >
                                        <Image
                                            src="/images/speaker-vinay.jpeg"
                                            alt="Prof. Vinay Lal"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid=":gyoio5"
                                        />
                                    </div>
                                    <div data-oid="qql:3jg">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="avog_t2"
                                        >
                                            Prof. Vinay Lal
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="uv2.vyw">
                                            University of California, LA, USA
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="gp.7cuq"
                                        >
                                            Historian specializing in colonial and postcolonial
                                            studies
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="ztjptcm">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="0:aknyi"
                                    >
                                        <Image
                                            src="/images/speaker-knarayna.png"
                                            alt="Prof. K Narayana Chandran"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="z9obqr6"
                                        />
                                    </div>
                                    <div data-oid="fbzx3_u">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="nx8ls2k"
                                        >
                                            Prof. K Narayana Chandran
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="boryful">
                                            Former Professor, UoH
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="p:ycpkm"
                                        >
                                            Distinguished scholar in literary studies
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="0.dkcy.">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="c5o81pz"
                            >
                                Poets
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2"
                                data-oid="7k20pol"
                            >
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="d::6j-0"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="dksvayt">
                                        Yousif M. Qasmiyeh
                                    </h3>
                                </div>
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="b3k8h.8"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="6.yhc6l">
                                        Shash Trevett
                                    </h3>
                                </div>
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="04fcn_4"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="g6dog44">
                                        Anthony Vahni Capildeo
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="55sxcaz">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="lous0bx">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="gnpiywc"
                            >
                                Paper Presenters
                            </h2>
                            <div className="space-y-4" data-oid="m25q--9">
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="7imy.39"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="t8gv5r4">
                                        Aneil Rallin
                                    </h3>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="tw11juv"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="t9r.7xi">
                                        Ido Fuchs
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="6dxodzp">
                                        Visiting Researcher at the Network for Environmental
                                        Humanities at the Research Institute for Cultural Inquiry,
                                        Utrecht University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="ig8oa06"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="j.6m25d">
                                        K.S. Ahima
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="2ger9ry">
                                        Research Scholar, Humanities and Social Sciences, NIT
                                        Warangal
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="a5c_gw2"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="6v23yop">
                                        Abhilasha Sawlani
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="q:r2mif">
                                        Research Scholar, Ashoka University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="webwrja"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="mv3-ld9">
                                        John Leandro Reyes
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="awqydx3">
                                        Associate Lecturer at Mindanao State University - Iligan
                                        Institute of Technology
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="989crim">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="yu6bgcv"
                            >
                                Round Table Presenters
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2"
                                data-oid="jrjkb29"
                            >
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="z8xfr2j"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="q0ehc:y"
                                    >
                                        Arundhathi Padmanabhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="eigwkk."
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="9ysxw56"
                                    >
                                        Ardra Dinesh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="tqh1n_j"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="g_v.102"
                                    >
                                        Arup Kumar Bag
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="gl5w7ht"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="263ec-1"
                                    >
                                        Monideepa Raichaudhuri and Raj Shekhar Barman
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="58-mrgc"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="unnmagy"
                                    >
                                        Niharika Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="ccx82ba"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="otgoy7g"
                                    >
                                        Bihan Bandyopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="9c1kiz:"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="1ov9maa"
                                    >
                                        Minyoung Kim
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":_p9fsh"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="7pscydj"
                                    >
                                        Abul Bashar
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="8ssdotb"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":0r_..9"
                                    >
                                        Pooja Prasain
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="v892lq2"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="-kfdibt"
                                    >
                                        Trijit Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="pp48f5c"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="bbe_uil"
                                    >
                                        Akanchha Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="44znz05"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="2u6byyr"
                                    >
                                        Meenakshi S. Thambi
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="xycoheu"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="v_5sav3"
                                    >
                                        Prasann K Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="aam:_ov"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="w3lzcea"
                                    >
                                        Swayam Sikha Srichandan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="ww_m8ho"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="16.xt:z"
                                    >
                                        Muhammad Ashar Khan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="vpny76_"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="b2db878"
                                    >
                                        Shataaxi Chauhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="_xgf6j."
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="0hh-y5g"
                                    >
                                        Nayan Mary Tom
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="rypdr7s"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="er8r.vh"
                                    >
                                        Prachi Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="bjr306e"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="38htdjt"
                                    >
                                        Bhakti Deshmukh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="cucs7z."
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="edvx0.h"
                                    >
                                        Sumana Sinhababu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="euwge3a"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="npp59g0"
                                    >
                                        Rubaiya Nasrin
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="pj8tlk3"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="gixycay"
                                    >
                                        Aishiki Bandhopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="vf-wzq4"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="6r8:gx8"
                                    >
                                        Anjali Kaushik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="pqspd18"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="64gnuoj"
                                    >
                                        Gazala F. Ansari
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="6b8caos"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="_msuzf4"
                                    >
                                        Muhammed Saeed PK
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="2odpe6p"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="a3opir6"
                                    >
                                        Piyush Protim Saikia and Trishna Saikia
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="2xze.nu"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ta:u0ku"
                                    >
                                        Nandhana Suresh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="t1:_7pn"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="o6g.od8"
                                    >
                                        Aadrit Banerjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="e7rwi8:"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="b.wxgyo"
                                    >
                                        Gautham Anil Warrier (Gaw)
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="05-ax5a"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="z2e1tjq"
                                    >
                                        Biraj Biswas
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="2rrda_3"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="m2njwkn"
                                    >
                                        Swarupa Das
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="70cvq_3"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="wgdil9j"
                                    >
                                        Astik Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="-hpc2sr"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="u1o0w.o"
                                    >
                                        Theadora War
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="6mp0gw-"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="bgxi3f_"
                                    >
                                        Manisha Madhu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="8abe785"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="jghr6ok"
                                    >
                                        Rashmi Ranjan Panigrahi and Parthajyoti Roy
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="4jhy0b2"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=".pd-e:b"
                                    >
                                        Saptanil Maji
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8" data-oid="6hfpla3">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="ssjxh6i">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="grvghti"
                            >
                                Chairs
                            </h2>
                            <div className="space-y-4" data-oid="x22.v8y">
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="ybsiq:7"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="phhgpl5"
                                    >
                                        Prof. Pramod K Nayar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="_:gmp5a">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="e-vui94"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="dkgzxtj"
                                    >
                                        Dr. Salah Punathil
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="nw564od">
                                        Regional Studies, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="wzkibbj"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="69vqo_5"
                                    >
                                        Dr. Nandini Shankar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="hcebx7f">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="4z18r9k"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=".y-xk19"
                                    >
                                        Dr. Goutam Karmakar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="m7iehdz">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="u8ogi56"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="bv3_:71"
                                    >
                                        Dr. Girish D. Pawar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="mk5cg23">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="u4tdz_1"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="5lcf3qh"
                                    >
                                        Dr. B. Krishnaiah
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="kjsktqj">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="3g4h:v0"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="mla0v:x"
                                    >
                                        Dr. Yakaiah Kathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="yk2vbfh">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="quh4q.2"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="rnev0w8"
                                    >
                                        Prof. Sathya Prakash
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="b:17fy1">
                                        Department of Communication, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="-_0ner1"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="9ur2ab6"
                                    >
                                        Dr. Saradindu Bhattacharya
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="41pouw2">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="vy-2d10"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="np.2wcf"
                                    >
                                        Prof. Ajaya Sahoo
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="b3bef1u">
                                        Centre for Indian Diaspora, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="m60zyg:"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="twtyej-"
                                    >
                                        Dr. Siddharth Satpathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="ovt3yam">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="l74lx-8"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="_a1lhes"
                                    >
                                        Dr. Sriparna Das
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="4u7y2_2">
                                        CALTS, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="qrye20t"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="kn7:h4_"
                                    >
                                        Dr. Laboni Mukherjee
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="iaz16v-">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="eyq89s_"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="tf_jfaz"
                                    >
                                        Dr. Pushpanjali Sampathkumar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="kigwquw">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":475a.2"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="jhbihui"
                                    >
                                        Dr. Purna Chandra Naik
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="1v7jrco">
                                        CCL, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=".g:nm4_"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="v2k-2qw"
                                    >
                                        Prof. Anna Kurian
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="s7xduse">
                                        Department of English, UoH
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="o4a3.fg" />
        </div>
    );
}
