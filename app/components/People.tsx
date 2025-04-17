'use client';
import Image from 'next/image';

export default function People() {
    return (
        <section id="people" className="py-20 bg-white" data-oid="0lj_uxv">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="gqg:o.9">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="1qzolcx"
                >
                    People
                </h2>
                <div className="grid md:grid-cols-2 gap-8" data-oid="93z2jta">
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="2fz7bsj">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="tap8g:p">
                            Conference Organizers
                        </h3>
                        <div className="space-y-6" data-oid="azd9h9z">
                            <div data-oid="jqal52l">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="-4rhtl-">
                                    Convenor
                                </h4>
                                <p className="text-gray-700" data-oid="9y1:kg5">
                                    Dr. Sireesha Telugu
                                </p>
                            </div>
                            <div data-oid="6bo3bo9">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="qq_t2b9">
                                    Co-convenor
                                </h4>
                                <p className="text-gray-700" data-oid="1kmtfni">
                                    Dr. Bhaskar Lama
                                </p>
                            </div>
                            <div data-oid="fnafc9n">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="szs90h0">
                                    International Coordinators
                                </h4>
                                <p className="text-gray-700" data-oid="jdg1ave">
                                    Dr. Eman Shaban Morsi (Dartmouth College, US)
                                </p>
                                <p className="text-gray-700" data-oid="ie_bk_n">
                                    Dr. Elena Fiddian-Qasmiyeh (University College London, UK)
                                </p>
                            </div>
                            <div data-oid="nd5yaih">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="az2qdle">
                                    Organising Committee
                                </h4>
                                <div className="grid grid-cols-2 gap-2" data-oid=".:wil:m">
                                    <p className="text-gray-700" data-oid="8w3_m9p">
                                        Laboni Mukherjee
                                    </p>
                                    <p className="text-gray-700" data-oid=":q2vz3u">
                                        Noah Simon Kolikapudi
                                    </p>
                                    <p className="text-gray-700" data-oid="4xdgi7i">
                                        Assis Mon Marcelin
                                    </p>
                                    <p className="text-gray-700" data-oid="uv.pxha">
                                        Sourav Jatua
                                    </p>
                                    <p className="text-gray-700" data-oid="11odac2">
                                        Prateeti Chowdary
                                    </p>
                                    <p className="text-gray-700" data-oid="j6wqtd_">
                                        Themreichon Alma Poinamei
                                    </p>
                                    <p className="text-gray-700" data-oid="_nt8yhi">
                                        Aravind Prakash
                                    </p>
                                    <p className="text-gray-700" data-oid="f:j:_hs">
                                        Atul Nair
                                    </p>
                                    <p className="text-gray-700" data-oid="6f1p0zn">
                                        Songayam Zimik
                                    </p>
                                    <p className="text-gray-700" data-oid="ryg_1kr">
                                        Liya Abi
                                    </p>
                                    <p className="text-gray-700" data-oid="8s:aobe">
                                        Abhinav TM
                                    </p>
                                    <p className="text-gray-700" data-oid="vw8d.5f">
                                        Arya P
                                    </p>
                                    <p className="text-gray-700" data-oid=".x7g8kr">
                                        Gifty R
                                    </p>
                                    <p className="text-gray-700" data-oid="tcrf.-d">
                                        Prabhas Ahamed
                                    </p>
                                    <p className="text-gray-700" data-oid="7ajw4l3">
                                        Irfan S
                                    </p>
                                    <p className="text-gray-700" data-oid="cr0xl2p">
                                        Hami Shirin
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="yq-71tq">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="ruu.hiy">
                            Conference Venue
                        </h3>
                        <div className="grid md:grid-cols-1 gap-6" data-oid="hhkjqhy">
                            <div data-oid="nlqr7tn">
                                <p className="text-gray-700 mb-2" data-oid="0b3as8b">
                                    <strong data-oid="x5fnxgl">University of Hyderabad</strong>
                                    <br data-oid="mv80m:4" /> Prof. C.R. Rao Road, Gachibowli
                                    <br data-oid="69r:681" /> Hyderabad, Telangana 500046
                                    <br data-oid="9h1egrr" /> India
                                </p>
                                <p className="text-gray-700 mb-4" data-oid="m0ynnpq">
                                    <strong data-oid="miz2c__">Conference Hall:</strong> Zakir
                                    Hussain Lecture Hall Complex
                                </p>
                            </div>
                            <div
                                className="rounded-md overflow-hidden shadow-lg mt-4"
                                data-oid="k-hxsg9"
                            >
                                <Image
                                    src="/images/Displacement _20250307_121648_0004.jpg"
                                    alt="University of Hyderabad Campus"
                                    width={1000}
                                    height={400}
                                    className="w-full h-64 object-cover"
                                    data-oid="volova0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
