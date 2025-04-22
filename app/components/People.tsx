'use client';
import Image from 'next/image';

export default function People() {
    return (
        <section id="people" className="py-20 bg-white" data-oid="w3y9z8r">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ypnvl81">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="p:n55b."
                >
                    People
                </h2>
                <div className="grid md:grid-cols-2 gap-8" data-oid="b3h_4r4">
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="rv86zpa">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="2cx-oy_">
                            Conference Organizers
                        </h3>
                        <div className="space-y-6" data-oid="d-cbb-k">
                            <div data-oid="ftjzbtk">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="-h14yzv">
                                    Convenor
                                </h4>
                                <p className="text-gray-700" data-oid="6cwwgil">
                                    Dr. Sireesha Telugu
                                </p>
                            </div>
                            <div data-oid="7as9.2s">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="07z4d8n">
                                    Co-convenor
                                </h4>
                                <p className="text-gray-700" data-oid="lt7q-42">
                                    Dr. Bhaskar Lama
                                </p>
                            </div>
                            <div data-oid="n2kvkw-">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="gjxs65l">
                                    International Coordinators
                                </h4>
                                <p className="text-gray-700" data-oid="095qbx5">
                                    Dr. Eman Shaban Morsi (Dartmouth College, US)
                                </p>
                                <p className="text-gray-700" data-oid="4sco1co">
                                    Dr. Elena Fiddian-Qasmiyeh (University College London, UK)
                                </p>
                            </div>
                            <div data-oid="gcc--ak">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="bgrurey">
                                    Organising Committee
                                </h4>
                                <div className="grid grid-cols-2 gap-2" data-oid="jw4ly21">
                                    <p className="text-gray-700" data-oid="8vl6ygn">
                                        Laboni Mukherjee
                                    </p>
                                    <p className="text-gray-700" data-oid="7qjm070">
                                        Noah Simon Kolikapudi
                                    </p>
                                    <p className="text-gray-700" data-oid="c8daxl8">
                                        Assis Mon Marcelin
                                    </p>
                                    <p className="text-gray-700" data-oid="7304c_e">
                                        Sourav Jatua
                                    </p>
                                    <p className="text-gray-700" data-oid="fehule3">
                                        Prateeti Chowdary
                                    </p>
                                    <p className="text-gray-700" data-oid="3nxdbfq">
                                        Themreichon Alma Poinamei
                                    </p>
                                    <p className="text-gray-700" data-oid="_.r5mgd">
                                        Aravind Prakash
                                    </p>
                                    <p className="text-gray-700" data-oid="ohvprww">
                                        Atul Nair
                                    </p>
                                    <p className="text-gray-700" data-oid="u0-zr56">
                                        Songayam Zimik
                                    </p>
                                    <p className="text-gray-700" data-oid="ytaj2dq">
                                        Liya Abi
                                    </p>
                                    <p className="text-gray-700" data-oid="hq2-bpq">
                                        Abhinav TM
                                    </p>
                                    <p className="text-gray-700" data-oid="0sgms4m">
                                        Arya P
                                    </p>
                                    <p className="text-gray-700" data-oid="yk.ok-z">
                                        Gifty R
                                    </p>
                                    <p className="text-gray-700" data-oid="0gtc8y3">
                                        Prabhas Ahamed
                                    </p>
                                    <p className="text-gray-700" data-oid="cfg7tx9">
                                        Irfan S
                                    </p>
                                    <p className="text-gray-700" data-oid="e8foiqx">
                                        Hami Shirin
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="vh.oi46">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="cy00qg1">
                            Conference Venue
                        </h3>
                        <div className="grid md:grid-cols-1 gap-6" data-oid="89ij-u0">
                            <div data-oid="zic97gd">
                                <p className="text-gray-700 mb-2" data-oid="tflyhwf">
                                    <strong data-oid="7xugmbo">University of Hyderabad</strong>
                                    <br data-oid="erwm:7i" /> Prof. C.R. Rao Road, Gachibowli
                                    <br data-oid="nz987sc" /> Hyderabad, Telangana 500046
                                    <br data-oid="d848ekf" /> India
                                </p>
                                <p className="text-gray-700 mb-4" data-oid="g3ntxyu">
                                    <strong data-oid="z_q89_.">Conference Hall:</strong> Zakir
                                    Hussain Lecture Hall Complex
                                </p>
                            </div>
                            <div
                                className="rounded-md overflow-hidden shadow-lg mt-4"
                                data-oid="z--3d89"
                            >
                                <Image
                                    src="/images/Displacement _20250307_121648_0004.jpg"
                                    alt="University of Hyderabad Campus"
                                    width={1000}
                                    height={400}
                                    className="w-full h-64 object-cover"
                                    data-oid="ay2ubdy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
