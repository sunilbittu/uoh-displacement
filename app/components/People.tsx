'use client';
import Image from 'next/image';

export default function People() {
    return (
        <section id="people" className="py-20 bg-white" data-oid="jj0r.q-">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="hyr2-vs">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="c8muny."
                >
                    People
                </h2>
                <div className="grid md:grid-cols-2 gap-8" data-oid="gwe:sci">
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="t2zhiaw">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="y9jb0g-">
                            Conference Organizers
                        </h3>
                        <div className="space-y-6" data-oid="c_lev7d">
                            <div data-oid="mkhur8b">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid=":7mar4d">
                                    Convenor
                                </h4>
                                <p className="text-gray-700" data-oid="3f:-7rm">
                                    Dr. Sireesha Telugu
                                </p>
                            </div>
                            <div data-oid="wgfiv2l">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="tag5_si">
                                    Co-convenor
                                </h4>
                                <p className="text-gray-700" data-oid="qslhsbm">
                                    Dr. Bhaskar Lama
                                </p>
                            </div>
                            <div data-oid="gjfv0ua">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="y8rerer">
                                    International Coordinators
                                </h4>
                                <p className="text-gray-700" data-oid="3-2q_:g">
                                    Dr. Eman Shaban Morsi (Dartmouth College, US)
                                </p>
                                <p className="text-gray-700" data-oid="jxx8txl">
                                    Dr. Elena Fiddian-Qasmiyeh (University College London, UK)
                                </p>
                            </div>
                            <div data-oid="q7dugoi">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="erspwhl">
                                    Organising Committee
                                </h4>
                                <div className="grid grid-cols-2 gap-2" data-oid="umvfxdd">
                                    <p className="text-gray-700" data-oid="wx4j7_7">
                                        Laboni Mukherjee
                                    </p>
                                    <p className="text-gray-700" data-oid="t1sg-42">
                                        Noah Simon Kolikapudi
                                    </p>
                                    <p className="text-gray-700" data-oid="3_6j0d.">
                                        Assis Mon Marcelin
                                    </p>
                                    <p className="text-gray-700" data-oid="3s8bhki">
                                        Sourav Jatua
                                    </p>
                                    <p className="text-gray-700" data-oid="o1fiqw6">
                                        Prateeti Chowdary
                                    </p>
                                    <p className="text-gray-700" data-oid="61-l8sk">
                                        Themreichon Alma Poinamei
                                    </p>
                                    <p className="text-gray-700" data-oid="8cb_mpt">
                                        Aravind Prakash
                                    </p>
                                    <p className="text-gray-700" data-oid="os74oa4">
                                        Atul Nair
                                    </p>
                                    <p className="text-gray-700" data-oid="-m1aum8">
                                        Songayam Zimik
                                    </p>
                                    <p className="text-gray-700" data-oid="l_90ls-">
                                        Liya Abi
                                    </p>
                                    <p className="text-gray-700" data-oid="yrbyma7">
                                        Abhinav TM
                                    </p>
                                    <p className="text-gray-700" data-oid="eqlo-gs">
                                        Arya P
                                    </p>
                                    <p className="text-gray-700" data-oid="6-lkxj3">
                                        Gifty R
                                    </p>
                                    <p className="text-gray-700" data-oid="cox.wey">
                                        Prabhas Ahamed
                                    </p>
                                    <p className="text-gray-700" data-oid="niwtyp_">
                                        Irfan S
                                    </p>
                                    <p className="text-gray-700" data-oid="uafn0ys">
                                        Hami Shirin
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="__.6j44">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="ca2-b1d">
                            Conference Venue
                        </h3>
                        <div className="grid md:grid-cols-1 gap-6" data-oid="u.3dj3-">
                            <div data-oid="0:z2raa">
                                <p className="text-gray-700 mb-2" data-oid="zqjrrzo">
                                    <strong data-oid="lj2-fww">University of Hyderabad</strong>
                                    <br data-oid=".l89lz2" /> Prof. C.R. Rao Road, Gachibowli
                                    <br data-oid="4b5ltm6" /> Hyderabad, Telangana 500046
                                    <br data-oid="-on3:vi" /> India
                                </p>
                                <p className="text-gray-700 mb-4" data-oid="o.a8s.q">
                                    <strong data-oid="fqk3ekr">Conference Hall:</strong> Zakir
                                    Hussain Lecture Hall Complex
                                </p>
                            </div>
                            <div
                                className="rounded-md overflow-hidden shadow-lg mt-4"
                                data-oid="e4vr4zr"
                            >
                                <Image
                                    src="/images/Displacement _20250307_121648_0004.jpg"
                                    alt="University of Hyderabad Campus"
                                    width={1000}
                                    height={400}
                                    className="w-full h-64 object-cover"
                                    data-oid="yk1o.9-"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
