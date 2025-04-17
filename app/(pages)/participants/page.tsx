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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="1qz3rop">
            <Navigation
                activeSection="participants"
                scrollToSection={scrollToSection}
                data-oid="hmp1i4x"
            />

            <div className="pt-20 pb-10" data-oid="_bmt4s3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="kxjzmyb">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="ri4zu:p">
                        Participants
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-8" data-oid="gy_.2ct">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid=":rc9a:x">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="ew_c2oq"
                            >
                                Keynote Speakers
                            </h2>
                            <div className="space-y-6" data-oid="pt._nm:">
                                <div className="flex items-start space-x-4" data-oid="f.8k813">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="_dmclq."
                                    >
                                        <Image
                                            src="/images/speaker-rajini.png"
                                            alt="Prof. Rajini Srikant"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="5jxp_8k"
                                        />
                                    </div>
                                    <div data-oid="s4tvrm1">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="bdr7fqr"
                                        >
                                            Prof. Rajini Srikant
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid=".373mgi">
                                            University of Massachusetts, Boston, USA
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="t.2by7i"
                                        >
                                            Expert in Migration Studies and Displacement
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="l2qvpb3">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="yu3ayqh"
                                    >
                                        <Image
                                            src="/images/speaker-irudaya.jpeg"
                                            alt="Prof. Irudaya Rajan"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="oqvbdml"
                                        />
                                    </div>
                                    <div data-oid="17iwfz.">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="r2wsw99"
                                        >
                                            Prof. Irudaya Rajan
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="7yq2xs8">
                                            The International Institute of Migration and Development
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid=":8e885_"
                                        >
                                            Renowned researcher on migration patterns
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="64mv_.d">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="b2y2bbd"
                                    >
                                        <Image
                                            src="/images/speaker-divya.jpeg"
                                            alt="Divya Jose"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="ze1y1wv"
                                        />
                                    </div>
                                    <div data-oid=".52xhjc">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid=":k6f4:d"
                                        >
                                            Divya Jose
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="zm06njs">
                                            Refugee Education, UK
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="rl9fah."
                                        >
                                            Advocate for refugee education rights
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="bt7a:.e">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="mdvgosr"
                                    >
                                        <Image
                                            src="/images/speaker-vinay.jpeg"
                                            alt="Prof. Vinay Lal"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="uz.o.9m"
                                        />
                                    </div>
                                    <div data-oid="g9im6x_">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="5inanip"
                                        >
                                            Prof. Vinay Lal
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="qvkpxb_">
                                            University of California, LA, USA
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="v3_ltoj"
                                        >
                                            Historian specializing in colonial and postcolonial
                                            studies
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="7ti5seu">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="38gaqo_"
                                    >
                                        <Image
                                            src="/images/speaker-knarayna.png"
                                            alt="Prof. K Narayana Chandran"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="oa.a44d"
                                        />
                                    </div>
                                    <div data-oid="e.421qe">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="mxs6ikn"
                                        >
                                            Prof. K Narayana Chandran
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="eh6ltek">
                                            Former Professor, UoH
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="0tmvblm"
                                        >
                                            Distinguished scholar in literary studies
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="h4fhm.t">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="h7r7:ev"
                            >
                                Poets
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2"
                                data-oid="u:7a7.o"
                            >
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="4d:f56k"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="pcjt7_-">
                                        Yousif M. Qasmiyeh
                                    </h3>
                                </div>
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="qis8uyk"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="ecbum08">
                                        Shash Trevett
                                    </h3>
                                </div>
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="rflg4_7"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="dxj98i5">
                                        Anthony Vahni Capildeo
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="b779a2w">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="wpt3lz6">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="ssll6mv"
                            >
                                Paper Presenters
                            </h2>
                            <div className="space-y-4" data-oid="9f21r21">
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="a7x6zax"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="ehm1pz3">
                                        Aneil Rallin
                                    </h3>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="k2jse41"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="hp_mkye">
                                        Ido Fuchs
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="aet-2iy">
                                        Visiting Researcher at the Network for Environmental
                                        Humanities at the Research Institute for Cultural Inquiry,
                                        Utrecht University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="yn2u410"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="-ry_w0_">
                                        K.S. Ahima
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="p_nikl8">
                                        Research Scholar, Humanities and Social Sciences, NIT
                                        Warangal
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="88d_xne"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="xowi2ac">
                                        Abhilasha Sawlani
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="di3.356">
                                        Research Scholar, Ashoka University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="d0nt671"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="v.p8znu">
                                        John Leandro Reyes
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="qbt4pm3">
                                        Associate Lecturer at Mindanao State University - Iligan
                                        Institute of Technology
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="8qd2n0h">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="c:2ibdf"
                            >
                                Round Table Presenters
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2"
                                data-oid="18yjsb_"
                            >
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="7grxsyl"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="6izi0kc"
                                    >
                                        Arundhathi Padmanabhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="c2x9zaf"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="rtrb:j_"
                                    >
                                        Ardra Dinesh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="pk15vrc"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="8mfdf95"
                                    >
                                        Arup Kumar Bag
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="e4jxbsz"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="tnm.._4"
                                    >
                                        Monideepa Raichaudhuri and Raj Shekhar Barman
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=".ohz8dq"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="k_a0mf8"
                                    >
                                        Niharika Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="d4qnsz3"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="sn-9v0-"
                                    >
                                        Bihan Bandyopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":ullca3"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="8ihc17t"
                                    >
                                        Minyoung Kim
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="nuu0x74"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ez7j:vc"
                                    >
                                        Abul Bashar
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="e2iuslg"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="7_f_y0p"
                                    >
                                        Pooja Prasain
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="6bio1iz"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":._m0yk"
                                    >
                                        Trijit Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="35qwmnb"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="e.f:p-:"
                                    >
                                        Akanchha Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="4hmgicp"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="3-o9dyk"
                                    >
                                        Meenakshi S. Thambi
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="m5kftqh"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="35fj_os"
                                    >
                                        Prasann K Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="ci_j6m3"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="g:fnx-5"
                                    >
                                        Swayam Sikha Srichandan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="8z0l4nr"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="7bwap5j"
                                    >
                                        Muhammad Ashar Khan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="qg-f:_o"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="5nra:5f"
                                    >
                                        Shataaxi Chauhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="7di8pku"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="e6g6epz"
                                    >
                                        Nayan Mary Tom
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=".l:yr.o"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="vfu2cr3"
                                    >
                                        Prachi Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="enh.ryw"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="::yjh8v"
                                    >
                                        Bhakti Deshmukh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="huf9ml1"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="k9ubq6_"
                                    >
                                        Sumana Sinhababu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="kby1trs"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="d19:-:b"
                                    >
                                        Rubaiya Nasrin
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="s5jbes0"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="2cc6r.g"
                                    >
                                        Aishiki Bandhopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="94fu_76"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="_zrb9yp"
                                    >
                                        Anjali Kaushik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="rqoij7l"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="hpi8azo"
                                    >
                                        Gazala F. Ansari
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="2s3o4eo"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="gnyf1.4"
                                    >
                                        Muhammed Saeed PK
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="ba8z28p"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="2mmfi2p"
                                    >
                                        Piyush Protim Saikia and Trishna Saikia
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="kaa8gtg"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="tjbs-.."
                                    >
                                        Nandhana Suresh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="1xs24rw"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="o8dcfko"
                                    >
                                        Aadrit Banerjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="k3lfe9l"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="96qgf8v"
                                    >
                                        Gautham Anil Warrier (Gaw)
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="jph:7bk"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="--b2z1y"
                                    >
                                        Biraj Biswas
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="yghapxs"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="d-o23vm"
                                    >
                                        Swarupa Das
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="1px2bem"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="gke6boj"
                                    >
                                        Astik Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="0m3ix5b"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":csl6hq"
                                    >
                                        Theadora War
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="kndo1bx"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="awm1fps"
                                    >
                                        Manisha Madhu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="zaho8za"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="a17:qdr"
                                    >
                                        Rashmi Ranjan Panigrahi and Parthajyoti Roy
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="7qj65.e"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ju9ad1w"
                                    >
                                        Saptanil Maji
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8" data-oid="n5cxoiv">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="kckmmj1">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="2s1ga-k"
                            >
                                Chairs
                            </h2>
                            <div className="space-y-4" data-oid="p2a7hzy">
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="wix79:m"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="eoj13xc"
                                    >
                                        Prof. Pramod K Nayar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="z_wxyn2">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="dh7h3z7"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="dctg5-0"
                                    >
                                        Dr. Salah Punathil
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="jpxgh96">
                                        Regional Studies, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="zgwxs97"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="_h5ydk9"
                                    >
                                        Dr. Nandini Shankar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="v.z_4ho">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="wx8r1ua"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="wibm_fs"
                                    >
                                        Dr. Goutam Karmakar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="c6fohr1">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="hj15p-5"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="tq_grf3"
                                    >
                                        Dr. Girish D. Pawar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="1n9eh82">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="y6kj1_h"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ssclqpg"
                                    >
                                        Dr. B. Krishnaiah
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="k:74gu0">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="q98b-.i"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="j-or3k_"
                                    >
                                        Dr. Yakaiah Kathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="tgljh8c">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="rk8wflt"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="v:r4.pu"
                                    >
                                        Prof. Sathya Prakash
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="sqg.y17">
                                        Department of Communication, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="u0vh.c3"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ox9cgnx"
                                    >
                                        Dr. Saradindu Bhattacharya
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="0jxuq1x">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="vev7ry."
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":875lj:"
                                    >
                                        Prof. Ajaya Sahoo
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="jldv2kq">
                                        Centre for Indian Diaspora, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="a-0eodv"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="f.1_j2l"
                                    >
                                        Dr. Siddharth Satpathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="tf48801">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="kc6aojb"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="-kqwq1x"
                                    >
                                        Dr. Sriparna Das
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="4u6l21m">
                                        CALTS, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="8.0o-3i"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="qpxuf:."
                                    >
                                        Dr. Laboni Mukherjee
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="bh3yaj2">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="ixg5b9m"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="xfi21ky"
                                    >
                                        Dr. Pushpanjali Sampathkumar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="9lv1o0y">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="j4e46it"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="urreh:2"
                                    >
                                        Dr. Purna Chandra Naik
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="1ei0y7h">
                                        CCL, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="w2oivsb"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="6u0:w24"
                                    >
                                        Prof. Anna Kurian
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="dqr5_km">
                                        Department of English, UoH
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="edetwcb" />
        </div>
    );
}
