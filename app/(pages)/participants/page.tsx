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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="jr5w8ia">
            <Navigation
                activeSection="participants"
                scrollToSection={scrollToSection}
                data-oid="2oe4mp9"
            />

            <div className="pt-20 pb-10" data-oid="n4rb7xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="19k1mus">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="_s_jm18">
                        Participants
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-8" data-oid="ug6_cj4">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="31fn6-j">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="kt7c-0m"
                            >
                                Keynote Speakers
                            </h2>
                            <div className="space-y-6" data-oid="rs4yib9">
                                <div className="flex items-start space-x-4" data-oid="wf:-gxr">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="qi6gfta"
                                    >
                                        <Image
                                            src="/images/speaker-rajini.png"
                                            alt="Prof. Rajini Srikant"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="rxlmpo5"
                                        />
                                    </div>
                                    <div data-oid="e2o:s77">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="-m9y..k"
                                        >
                                            Prof. Rajini Srikant
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="-88rej8">
                                            University of Massachusetts, Boston, USA
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="812j5_2"
                                        >
                                            Expert in Migration Studies and Displacement
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid=":.1r0q6">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="o2.97xi"
                                    >
                                        <Image
                                            src="/images/speaker-irudaya.jpeg"
                                            alt="Prof. Irudaya Rajan"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="irna993"
                                        />
                                    </div>
                                    <div data-oid="rqhy6nr">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="wlvh8ib"
                                        >
                                            Prof. Irudaya Rajan
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="atz5-ua">
                                            The International Institute of Migration and Development
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="fcbv9av"
                                        >
                                            Renowned researcher on migration patterns
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="gv:8w:x">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="papaf4:"
                                    >
                                        <Image
                                            src="/images/speaker-divya.jpeg"
                                            alt="Divya Jose"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="7s8pbry"
                                        />
                                    </div>
                                    <div data-oid="t8i_jcf">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="o:w4rml"
                                        >
                                            Divya Jose
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="3.cc_:w">
                                            Refugee Education, UK
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="jzt1wd5"
                                        >
                                            Advocate for refugee education rights
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="vdq1wen">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="5xqqupr"
                                    >
                                        <Image
                                            src="/images/speaker-vinay.jpeg"
                                            alt="Prof. Vinay Lal"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="5tq7im0"
                                        />
                                    </div>
                                    <div data-oid="sebd9-7">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="b093n3a"
                                        >
                                            Prof. Vinay Lal
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="n7pis0r">
                                            University of California, LA, USA
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="ci7-kn2"
                                        >
                                            Historian specializing in colonial and postcolonial
                                            studies
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="tn4645t">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="mqh_o-."
                                    >
                                        <Image
                                            src="/images/speaker-knarayna.png"
                                            alt="Prof. K Narayana Chandran"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="dwnp6u_"
                                        />
                                    </div>
                                    <div data-oid="j2v3qm_">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="7ne_de1"
                                        >
                                            Prof. K Narayana Chandran
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="4fyl39a">
                                            Former Professor, UoH
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="o0nds7k"
                                        >
                                            Distinguished scholar in literary studies
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="6p9.b2u">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="a645hvd"
                            >
                                Poets
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2"
                                data-oid="jh5g4z-"
                            >
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="r.ah.or"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="zbbkhwp">
                                        Yousif M. Qasmiyeh
                                    </h3>
                                </div>
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="1nrwx-d"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="3iu93_j">
                                        Shash Trevett
                                    </h3>
                                </div>
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="svd7u9b"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="g.kg9z4">
                                        Anthony Vahni Capildeo
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="64:6c-c">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="4hqio2r">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="fc:zwsn"
                            >
                                Paper Presenters
                            </h2>
                            <div className="space-y-4" data-oid="dr1b2cb">
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="akl89s_"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="8nc9v7h">
                                        Aneil Rallin
                                    </h3>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="bw5v2q4"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="0za186l">
                                        Ido Fuchs
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="7t.qgc9">
                                        Visiting Researcher at the Network for Environmental
                                        Humanities at the Research Institute for Cultural Inquiry,
                                        Utrecht University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="0f0q2ru"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="hn_w01l">
                                        K.S. Ahima
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="myz-3l6">
                                        Research Scholar, Humanities and Social Sciences, NIT
                                        Warangal
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="fch74t0"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="ihf.o4l">
                                        Abhilasha Sawlani
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="d722s4_">
                                        Research Scholar, Ashoka University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="zf3hz9n"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="c.6m9ah">
                                        John Leandro Reyes
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="p6tpt-6">
                                        Associate Lecturer at Mindanao State University - Iligan
                                        Institute of Technology
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="rad79ln">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="n5aeg.a"
                            >
                                Round Table Presenters
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2"
                                data-oid="9r587rg"
                            >
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="h0mwis9"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="g2wcu61"
                                    >
                                        Arundhathi Padmanabhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="8qypyme"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="b0bm1ar"
                                    >
                                        Ardra Dinesh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":tgjylk"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="h377gvp"
                                    >
                                        Arup Kumar Bag
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="swkt::1"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="nev745o"
                                    >
                                        Monideepa Raichaudhuri and Raj Shekhar Barman
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="glilqtl"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="q9g8hr_"
                                    >
                                        Niharika Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="s:.lxf9"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="qpoh27b"
                                    >
                                        Bihan Bandyopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="b.sa-wh"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="nxkym55"
                                    >
                                        Minyoung Kim
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="dx-fo.a"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":_rnk5y"
                                    >
                                        Abul Bashar
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="anp9mhg"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ouoorz0"
                                    >
                                        Pooja Prasain
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="ac-o9jy"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="8guw2ad"
                                    >
                                        Trijit Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="c:ggf9p"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="es88y8n"
                                    >
                                        Akanchha Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="z6kojs4"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="7.l5zqd"
                                    >
                                        Meenakshi S. Thambi
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="19g:9pm"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="q3zj111"
                                    >
                                        Prasann K Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="35796jl"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="8-g3_60"
                                    >
                                        Swayam Sikha Srichandan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="j4btxqo"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="26p.8q1"
                                    >
                                        Muhammad Ashar Khan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="po6s4-n"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="-h-tf59"
                                    >
                                        Shataaxi Chauhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="2o6-s1o"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="m.zo:5j"
                                    >
                                        Nayan Mary Tom
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="oezev-."
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="-d_tmag"
                                    >
                                        Prachi Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="9jk-nuy"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="0swnfya"
                                    >
                                        Bhakti Deshmukh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="nj6ixze"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="xf-axr8"
                                    >
                                        Sumana Sinhababu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":5r-b5t"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="xeo-09w"
                                    >
                                        Rubaiya Nasrin
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="1.ugy:8"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="did.22e"
                                    >
                                        Aishiki Bandhopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="vgk26.z"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="4biz.xx"
                                    >
                                        Anjali Kaushik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="qjbcc9g"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ziih_ar"
                                    >
                                        Gazala F. Ansari
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="x2cz2ox"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="8-qpnk0"
                                    >
                                        Muhammed Saeed PK
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="mzlbcg9"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="o:fp9-p"
                                    >
                                        Piyush Protim Saikia and Trishna Saikia
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="_s1kc_d"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="lmeu9jn"
                                    >
                                        Nandhana Suresh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="383w093"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="4a0rkzd"
                                    >
                                        Aadrit Banerjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="3n3hiz9"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":5c6yh9"
                                    >
                                        Gautham Anil Warrier (Gaw)
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="n4q1pmi"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="rj:q8_w"
                                    >
                                        Biraj Biswas
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":wv.v_."
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="::rzry7"
                                    >
                                        Swarupa Das
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="j7md:t:"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="wgvbi_t"
                                    >
                                        Astik Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="uzby54g"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="f44vb0h"
                                    >
                                        Theadora War
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="loz_-sz"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=".w9nmpj"
                                    >
                                        Manisha Madhu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="tk-il16"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ozj:_m9"
                                    >
                                        Rashmi Ranjan Panigrahi and Parthajyoti Roy
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="8d9d6n8"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="bmoebl4"
                                    >
                                        Saptanil Maji
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8" data-oid="f5_:4_a">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="pc1qpq4">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="409fnm-"
                            >
                                Chairs
                            </h2>
                            <div className="space-y-4" data-oid="e3vbanr">
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="jag8t9d"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="dzb55qs"
                                    >
                                        Prof. Pramod K Nayar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="64lk87c">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="pvtlt2u"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ourahky"
                                    >
                                        Dr. Salah Punathil
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="orujt14">
                                        Regional Studies, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="_4oe4z9"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="tqyhfpc"
                                    >
                                        Dr. Nandini Shankar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="tddy97c">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="etmfj_b"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ksgfm5v"
                                    >
                                        Dr. Goutam Karmakar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="mwfsxt8">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="sye_.ks"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="6y7i52c"
                                    >
                                        Dr. Girish D. Pawar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="6542jhm">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="0k.4j3r"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="772z::l"
                                    >
                                        Dr. B. Krishnaiah
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="4_2q:8u">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="n.7.kq5"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="3:np4xp"
                                    >
                                        Dr. Yakaiah Kathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="m98gh.-">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="2bix7zr"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="iygi2gc"
                                    >
                                        Prof. Sathya Prakash
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="als:uc0">
                                        Department of Communication, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="-if9ej1"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="w-8kkd6"
                                    >
                                        Dr. Saradindu Bhattacharya
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="2:2j75e">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="hvjpxj."
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="iekt6rl"
                                    >
                                        Prof. Ajaya Sahoo
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="tm781d6">
                                        Centre for Indian Diaspora, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":47.ow9"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="1i7rx2q"
                                    >
                                        Dr. Siddharth Satpathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="r8syxwz">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="v3p_ssk"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ab6uh6m"
                                    >
                                        Dr. Sriparna Das
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="30st4e6">
                                        CALTS, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="w81ekhp"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="4o2g_re"
                                    >
                                        Dr. Laboni Mukherjee
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="q8zq-mu">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="bqvytg."
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="cfogx.o"
                                    >
                                        Dr. Pushpanjali Sampathkumar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="od-us5w">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="-pw63hx"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="gbe9gam"
                                    >
                                        Dr. Purna Chandra Naik
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="i9s2tjy">
                                        CCL, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="7629r2z"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="tup3qa_"
                                    >
                                        Prof. Anna Kurian
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="tm1f_tm">
                                        Department of English, UoH
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="i8ig5tr" />
        </div>
    );
}
