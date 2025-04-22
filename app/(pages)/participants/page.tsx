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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="r4e.80h">
            <Navigation
                activeSection="participants"
                scrollToSection={scrollToSection}
                data-oid="hj2y5rq"
            />

            <div className="pt-20 pb-10" data-oid="_qfe5c0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="tzcz5qd">
                    <h1 className="text-3xl font-bold text-red-800 mb-8" data-oid="3ecenw:">
                        Participants
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-8" data-oid="j7e4zzv">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid=":r9arh3">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="d2s2bkl"
                            >
                                Keynote Speakers
                            </h2>
                            <div className="space-y-6" data-oid="zicijfv">
                                <div className="flex items-start space-x-4" data-oid="s6xcn6_">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="pt-k15y"
                                    >
                                        <Image
                                            src="/images/speaker-rajini.png"
                                            alt="Prof. Rajini Srikant"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="bs3hdwn"
                                        />
                                    </div>
                                    <div data-oid="plnv42w">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="pao-_3_"
                                        >
                                            Prof. Rajini Srikant
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="u9skl8e">
                                            University of Massachusetts, Boston, USA
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="1z16tf1"
                                        >
                                            Expert in Migration Studies and Displacement
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="4uh5474">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="4k7n4ss"
                                    >
                                        <Image
                                            src="/images/speaker-irudaya.jpeg"
                                            alt="Prof. Irudaya Rajan"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid=":arm9tl"
                                        />
                                    </div>
                                    <div data-oid="g4fnqpl">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="kkwep-q"
                                        >
                                            Prof. Irudaya Rajan
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="-peh-uq">
                                            The International Institute of Migration and Development
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="7c6ncbp"
                                        >
                                            Renowned researcher on migration patterns
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="h5ifacm">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="q2:n6oj"
                                    >
                                        <Image
                                            src="/images/speaker-divya.jpeg"
                                            alt="Divya Jose"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="b4im-o7"
                                        />
                                    </div>
                                    <div data-oid="-nhw4ew">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="occ-1:k"
                                        >
                                            Divya Jose
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="lfkhbnl">
                                            Refugee Education, UK
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="vjjsv9e"
                                        >
                                            Advocate for refugee education rights
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="reec8va">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="21sm3nd"
                                    >
                                        <Image
                                            src="/images/speaker-vinay.jpeg"
                                            alt="Prof. Vinay Lal"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="jd5xs94"
                                        />
                                    </div>
                                    <div data-oid="2mhnehq">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="ru8u.ys"
                                        >
                                            Prof. Vinay Lal
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="3dyzv-s">
                                            University of California, LA, USA
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="gqzv__u"
                                        >
                                            Historian specializing in colonial and postcolonial
                                            studies
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="6nhe1tj">
                                    <div
                                        className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200"
                                        data-oid="i.60irg"
                                    >
                                        <Image
                                            src="/images/speaker-knarayna.png"
                                            alt="Prof. K Narayana Chandran"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                            data-oid="jdhcap5"
                                        />
                                    </div>
                                    <div data-oid="qd419hs">
                                        <h3
                                            className="font-medium text-indigo-700"
                                            data-oid="j9h_6ve"
                                        >
                                            Prof. K Narayana Chandran
                                        </h3>
                                        <p className="text-gray-600 text-sm" data-oid="lgn041z">
                                            Former Professor, UoH
                                        </p>
                                        <p
                                            className="text-gray-500 text-sm mt-1 italic"
                                            data-oid="los9n-q"
                                        >
                                            Distinguished scholar in literary studies
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="1vj9q_4">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid=":gy.qhk"
                            >
                                Poets
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2"
                                data-oid="9_t6mjc"
                            >
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="_przz_k"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="xo53_89">
                                        Yousif M. Qasmiyeh
                                    </h3>
                                </div>
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="bc7pbop"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="9kx7to:">
                                        Shash Trevett
                                    </h3>
                                </div>
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="5fr9s-u"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="6hc.4ho">
                                        Anthony Vahni Capildeo
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" data-oid="3oc6yv5">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="q97fbmz">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="pqom6:6"
                            >
                                Paper Presenters
                            </h2>
                            <div className="space-y-4" data-oid="tf8i-jq">
                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="2cyra6y"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="xl0xmck">
                                        Aneil Rallin
                                    </h3>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="vspkw42"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="dh8gi2:">
                                        Ido Fuchs
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="0c3:jef">
                                        Visiting Researcher at the Network for Environmental
                                        Humanities at the Research Institute for Cultural Inquiry,
                                        Utrecht University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="j6nfsn2"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="-wh6xd9">
                                        K.S. Ahima
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="hkgleoq">
                                        Research Scholar, Humanities and Social Sciences, NIT
                                        Warangal
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="tokl.f5"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="bg5pfl8">
                                        Abhilasha Sawlani
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="s941q:t">
                                        Research Scholar, Ashoka University
                                    </p>
                                </div>

                                <div
                                    className="border-l-4 border-indigo-500 pl-4"
                                    data-oid="fp:g6.a"
                                >
                                    <h3 className="font-medium text-indigo-700" data-oid="9a_df3i">
                                        John Leandro Reyes
                                    </h3>
                                    <p className="text-gray-600 text-sm" data-oid="f4wh3mf">
                                        Associate Lecturer at Mindanao State University - Iligan
                                        Institute of Technology
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="19eh5bj">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="vb4ad2x"
                            >
                                Round Table Presenters
                            </h2>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2"
                                data-oid="g34x1xu"
                            >
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="5zbn.al"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="3fa_y2w"
                                    >
                                        Arundhathi Padmanabhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="y25en3_"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="1vy8b52"
                                    >
                                        Ardra Dinesh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="y46y8io"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="1.wts7n"
                                    >
                                        Arup Kumar Bag
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="37giapk"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="26ec625"
                                    >
                                        Monideepa Raichaudhuri and Raj Shekhar Barman
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="7-xoz0v"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="idlv2.5"
                                    >
                                        Niharika Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="bp-hvsn"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":5dfsld"
                                    >
                                        Bihan Bandyopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="2h_t541"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="wccdae0"
                                    >
                                        Minyoung Kim
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="r8flqta"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="n.ee2g2"
                                    >
                                        Abul Bashar
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="15fs_28"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="1zdoo6i"
                                    >
                                        Pooja Prasain
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="g2g-ntf"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="0o:g6m9"
                                    >
                                        Trijit Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="8.r..ue"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="1dvywht"
                                    >
                                        Akanchha Singh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="oisu4:m"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=".:1f5:_"
                                    >
                                        Meenakshi S. Thambi
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="8:cjpzs"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="hpvp-_a"
                                    >
                                        Prasann K Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="_9j48mv"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="kbbot4u"
                                    >
                                        Swayam Sikha Srichandan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="xp2qd_4"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="km4i5y3"
                                    >
                                        Muhammad Ashar Khan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="6ua_ict"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="0uu4yei"
                                    >
                                        Shataaxi Chauhan
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="gnpbiu2"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="m6we6zr"
                                    >
                                        Nayan Mary Tom
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="xjxj3ix"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="0j1x-_e"
                                    >
                                        Prachi Naik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="w33p_hc"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="oyukedf"
                                    >
                                        Bhakti Deshmukh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="r395n28"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="dq86qox"
                                    >
                                        Sumana Sinhababu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="9_p-tkk"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="61e8bl-"
                                    >
                                        Rubaiya Nasrin
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="lfe1:_0"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":ud._3d"
                                    >
                                        Aishiki Bandhopadhyay
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="t_1r8.w"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="a9ul_jn"
                                    >
                                        Anjali Kaushik
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="03itazr"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="e68mvn0"
                                    >
                                        Gazala F. Ansari
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="1l5m._h"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="7fvpe3z"
                                    >
                                        Muhammed Saeed PK
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="qig..4i"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="--30lg1"
                                    >
                                        Piyush Protim Saikia and Trishna Saikia
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="hj8-xge"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="y5nr1c2"
                                    >
                                        Nandhana Suresh
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="2mwsfjo"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="nc04q1t"
                                    >
                                        Aadrit Banerjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="hhvlq28"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="gdur9a1"
                                    >
                                        Gautham Anil Warrier (Gaw)
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="wz3xaii"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="_.jih4y"
                                    >
                                        Biraj Biswas
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="clqzpy7"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="trumpmn"
                                    >
                                        Swarupa Das
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="fwgtzg2"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="ahd_0fm"
                                    >
                                        Astik Mukherjee
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="-6w4p3f"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="kh9r6.y"
                                    >
                                        Theadora War
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="klysvfs"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="bkt0yb_"
                                    >
                                        Manisha Madhu
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="zqqd.92"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="dbol02l"
                                    >
                                        Rashmi Ranjan Panigrahi and Parthajyoti Roy
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="6k:0wd7"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="_w14egt"
                                    >
                                        Saptanil Maji
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8" data-oid="nzc-n2b">
                        <div className="bg-white p-6 rounded-lg shadow-md" data-oid="dj5cow:">
                            <h2
                                className="text-xl font-semibold text-red-800 mb-4"
                                data-oid="i_3q:jl"
                            >
                                Chairs
                            </h2>
                            <div className="space-y-4" data-oid="17vg76j">
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="8kknnha"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="59w6wha"
                                    >
                                        Prof. Pramod K Nayar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="8.cve3m">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="i3zpx86"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="pntp6kq"
                                    >
                                        Dr. Salah Punathil
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="h-v8.pc">
                                        Regional Studies, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="7ewprgz"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="hj7b4jy"
                                    >
                                        Dr. Nandini Shankar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="ca3aa:e">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="hryrybp"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="h1yjv7b"
                                    >
                                        Dr. Goutam Karmakar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="bbx2t43">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="l3ie6gf"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="s-o:erv"
                                    >
                                        Dr. Girish D. Pawar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="f02m9h2">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="b9vx:ro"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="z233ur0"
                                    >
                                        Dr. B. Krishnaiah
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="ld0v_o8">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="py476ay"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="t7bh1wc"
                                    >
                                        Dr. Yakaiah Kathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="3zuod69">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="k_o2ttm"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":5g4a.0"
                                    >
                                        Prof. Sathya Prakash
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="0myndkx">
                                        Department of Communication, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="e:vi1-2"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="4b8w0g6"
                                    >
                                        Dr. Saradindu Bhattacharya
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="l3a5p:f">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="_gipks9"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid=":t88zj7"
                                    >
                                        Prof. Ajaya Sahoo
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="vo2t0pi">
                                        Centre for Indian Diaspora, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="s116_hp"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="gz6vv6w"
                                    >
                                        Dr. Siddharth Satpathy
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="7wt3n0:">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="-:qwpe:"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="eapr_:0"
                                    >
                                        Dr. Sriparna Das
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="opg-9yk">
                                        CALTS, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="zgjbr36"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="q3jzhl-"
                                    >
                                        Dr. Laboni Mukherjee
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="fwctdr7">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="bmix-j6"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="alpzjj_"
                                    >
                                        Dr. Pushpanjali Sampathkumar
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="9sea73w">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid="t0bo5sk"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="1ufe7.p"
                                    >
                                        Dr. Purna Chandra Naik
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="ea_f0vt">
                                        CCL, UoH
                                    </p>
                                </div>
                                <div
                                    className="border-l-2 border-indigo-500 pl-3"
                                    data-oid=":rebkzp"
                                >
                                    <p
                                        className="text-indigo-700 font-medium text-sm"
                                        data-oid="lbyhmxq"
                                    >
                                        Prof. Anna Kurian
                                    </p>
                                    <p className="text-gray-600 text-xs" data-oid="ytk4uf4">
                                        Department of English, UoH
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} data-oid=":erksw9" />
        </div>
    );
}
