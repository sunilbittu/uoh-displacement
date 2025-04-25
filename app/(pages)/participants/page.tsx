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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="27l3r.0">
            <Navigation
                activeSection="participants"
                scrollToSection={scrollToSection}
                data-oid="padxk75"
            />

            <div className="pt-20 pb-10" data-oid="k:orzwh">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="posa7w:">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="vom11c6">
                        Participants
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-8" data-oid="ir7jnrx">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="gmttsa_">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="d-b__:m"
                            >
                                Keynote Speakers
                            </h2>
                            <div className="space-y-6" data-oid="q3djbio">
                                <div className="flex items-start space-x-4" data-oid="di95p5y">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="8jxfyro"
                                    >
                                        <Image
                                            src="/images/speaker-rajini.png"
                                            alt="Prof. Rajini Srikant"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="semxvb9"
                                        />
                                    </div>
                                    <div data-oid="wwg5ic7">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="flnwd_x"
                                        >
                                            Prof. Rajini Srikant
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid=":wdffg9">
                                            University of Massachusetts, Boston, USA
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="4r1-3q2"
                                        >
                                            Expert in Migration Studies and Displacement
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="7g7fu_b">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="k5u:ypk"
                                    >
                                        <Image
                                            src="/images/speaker-irudaya.jpeg"
                                            alt="Prof. Irudaya Rajan"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="vlcn7cg"
                                        />
                                    </div>
                                    <div data-oid="jwk:v8h">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="j4zrndb"
                                        >
                                            Prof. Irudaya Rajan
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="vp3c3_w">
                                            The International Institute of Migration and Development
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="_r69asa"
                                        >
                                            Renowned researcher on migration patterns
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="1-ecqt_">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="6fcydfd"
                                    >
                                        <Image
                                            src="/images/speaker-divya.jpeg"
                                            alt="Divya Jose"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="uh9eio3"
                                        />
                                    </div>
                                    <div data-oid="qrcmtt7">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="876e16w"
                                        >
                                            Divya Jose
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="-ptej1v">
                                            Refugee Education, UK
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="98.64i4"
                                        >
                                            Advocate for refugee education rights
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="umlnfgn">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="74iy2dg"
                                    >
                                        <Image
                                            src="/images/speaker-vinay.jpeg"
                                            alt="Prof. Vinay Lal"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="_g96rt1"
                                        />
                                    </div>
                                    <div data-oid="wi7puth">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="j804y93"
                                        >
                                            Prof. Vinay Lal
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="wcbzpj5">
                                            University of California, LA, USA
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="x0uw1kl"
                                        >
                                            Historian specializing in colonial and postcolonial
                                            studies
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="xuaz.xb">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="b3aqknn"
                                    >
                                        <Image
                                            src="/images/speaker-knarayna.png"
                                            alt="Prof. K Narayana Chandran"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="_a5_orz"
                                        />
                                    </div>
                                    <div data-oid="g-k:yh:">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="cpkmby0"
                                        >
                                            Prof. K Narayana Chandran
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="p15xtoz">
                                            Former Professor, UoH
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="guk81ax"
                                        >
                                            Distinguished scholar in literary studies
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="o1-j:bo">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="4b:4rxs"
                            >
                                Poets
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2"
                                data-oid="5jq8rqk"
                            >
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="m9su4yc"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="2xdw1qt">
                                        Yousif M. Qasmiyeh
                                    </h3>
                                </div>
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="ksbpnt5"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="fbpv9y9">
                                        Shash Trevett
                                    </h3>
                                </div>
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="um5lclq"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="t1rypei">
                                        Anthony Vahni Capildeo
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="pa71b6n">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="i6enjca">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="-xlnth0"
                            >
                                Paper Presenters
                            </h2>
                            <div className="space-y-4" data-oid="pka15sw">
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="3hl72--"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="wqhuott">
                                        Aneil Rallin
                                    </h3>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid=".r60pqr"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="m-6k_xp">
                                        Ido Fuchs
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="m2aycz1">
                                        Visiting Researcher at the Network for Environmental
                                        Humanities at the Research Institute for Cultural Inquiry,
                                        Utrecht University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid=".uewxou"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="c216-b2">
                                        K.S. Ahima
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="9ulic3z">
                                        Research Scholar, Humanities and Social Sciences, NIT
                                        Warangal
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="958rfwf"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="s096ego">
                                        Abhilasha Sawlani
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="eh:rm1d">
                                        Research Scholar, Ashoka University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="k:8pv:l"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="zoyrctq">
                                        John Leandro Reyes
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="o_h4e55">
                                        Associate Lecturer at Mindanao State University - Iligan
                                        Institute of Technology
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="dr15z1.">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="ar_qgqc"
                            >
                                Round Table Presenters
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2"
                                data-oid="677cjtr"
                            >
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="xf7dwzv"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="y7uv7.s"
                                    >
                                        Arundhathi Padmanabhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="a_1ga0l"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="omij-jq"
                                    >
                                        Ardra Dinesh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="jwbzxca"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="h2-qgzl"
                                    >
                                        Arup Kumar Bag
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="2br:31c"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="wq0d2ej"
                                    >
                                        Monideepa Raichaudhuri and Raj Shekhar Barman
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="p1a_jtj"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="mhq-1v2"
                                    >
                                        Niharika Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":p:j-b0"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ga:lgdg"
                                    >
                                        Bihan Bandyopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="bkjgxxd"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="o_a0i8r"
                                    >
                                        Minyoung Kim
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="eyh.4e_"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="on-tw1u"
                                    >
                                        Abul Bashar
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="m25xkm7"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="qk8nokl"
                                    >
                                        Pooja Prasain
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="t04ouj-"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="2cx6ikm"
                                    >
                                        Trijit Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="6y.m4p3"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="04rz8v4"
                                    >
                                        Akanchha Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="z_5l..3"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="t1lv0vb"
                                    >
                                        Meenakshi S. Thambi
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="8xk_9ud"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="w:5gufu"
                                    >
                                        Prasann K Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="idzd9jv"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="-bjlpxl"
                                    >
                                        Swayam Sikha Srichandan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="5wy:wrw"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ywmpy20"
                                    >
                                        Muhammad Ashar Khan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="jhi_ko-"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="1_v1s4j"
                                    >
                                        Shataaxi Chauhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="7vnmp9g"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="35x4tal"
                                    >
                                        Nayan Mary Tom
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="3a5n7i8"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="5gyzmp5"
                                    >
                                        Prachi Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="s6sscf9"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="6cv88b4"
                                    >
                                        Bhakti Deshmukh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="fk_1xc-"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="cmqqrip"
                                    >
                                        Sumana Sinhababu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="0f-ijlm"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="lwpbrbj"
                                    >
                                        Rubaiya Nasrin
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":8l9s9o"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="v4:pbg-"
                                    >
                                        Aishiki Bandhopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="wdzbpgj"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="r8tj:l_"
                                    >
                                        Anjali Kaushik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="1ajnq6i"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="z:g2-z6"
                                    >
                                        Gazala F. Ansari
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="88dq0c."
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="m12rn4z"
                                    >
                                        Muhammed Saeed PK
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="vc9v:__"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="fkz2762"
                                    >
                                        Piyush Protim Saikia and Trishna Saikia
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="83xwics"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="b.tih2r"
                                    >
                                        Nandhana Suresh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="mm0b518"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":_he:ay"
                                    >
                                        Aadrit Banerjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="l1em47n"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="wnm:z0n"
                                    >
                                        Gautham Anil Warrier (Gaw)
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="umlthv5"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="17it3f2"
                                    >
                                        Biraj Biswas
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="l9ky9l6"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="35c16.8"
                                    >
                                        Swarupa Das
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="71oo4k-"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="-sxrogw"
                                    >
                                        Astik Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="-tx2jrj"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="bz-ts84"
                                    >
                                        Theadora War
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="gv4h9n:"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="-v2wob."
                                    >
                                        Manisha Madhu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":fdi1ph"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="tsklab9"
                                    >
                                        Rashmi Ranjan Panigrahi and Parthajyoti Roy
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="a.xc38b"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="c_e4.22"
                                    >
                                        Saptanil Maji
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8" data-oid="ea4w_5t">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="syy9k6n">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="av:x4_p"
                            >
                                Chairs
                            </h2>
                            <div className="space-y-4" data-oid="q8wth4y">
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="v.ozb:r"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="c3__-69"
                                    >
                                        Prof. Pramod K Nayar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="jmf-syi">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="a3d437t"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="mynpms9"
                                    >
                                        Dr. Salah Punathil
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="pt:gz20">
                                        Regional Studies, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="drtjv7e"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="3hvtv36"
                                    >
                                        Dr. Nandini Shankar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="x3wx9fd">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="rw.gtmc"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ctg27o:"
                                    >
                                        Dr. Goutam Karmakar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="3d452ov">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=".9d:xs4"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="oh-dh75"
                                    >
                                        Dr. Girish D. Pawar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="j11sxe7">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="06manlr"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="y5nqdbj"
                                    >
                                        Dr. B. Krishnaiah
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="t8uk9ou">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="s6w8aqm"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="du9nhm3"
                                    >
                                        Dr. Yakaiah Kathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="2bvdl55">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="jiuf2yp"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="0b-oud:"
                                    >
                                        Prof. Sathya Prakash
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="akfw64x">
                                        Department of Communication, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="y1k1kqn"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="c10-9:m"
                                    >
                                        Dr. Saradindu Bhattacharya
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="zi3i4qz">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="74sx61h"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="67hz:k."
                                    >
                                        Prof. Ajaya Sahoo
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="j_8t34a">
                                        Centre for Indian Diaspora, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="rkqgnyi"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="br6w4aq"
                                    >
                                        Dr. Siddharth Satpathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="x7n33r-">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="lxz0o0d"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="kwr_qs1"
                                    >
                                        Dr. Sriparna Das
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="jbo90nf">
                                        CALTS, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="tyu:_8f"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="e60cqt8"
                                    >
                                        Dr. Laboni Mukherjee
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="ha1ntpa">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="7pvh8c5"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="h3wjzk6"
                                    >
                                        Dr. Pushpanjali Sampathkumar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="78i.opo">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="jkrzozh"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="-mpdeqj"
                                    >
                                        Dr. Purna Chandra Naik
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="a16v75h">
                                        CCL, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="x3z6rjq"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="2eralxx"
                                    >
                                        Prof. Anna Kurian
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="x:52l8p">
                                        Department of English, UoH
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid="nvyg11:" />
        </div>
    );
}
