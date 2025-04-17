'use client';
import Image from 'next/image';

export default function People() {
    return (
        <section id="people" className="py-20 bg-white" data-oid="9npfm1s">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="uyq_pte">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="1ba8ldc"
                >
                    People
                </h2>
                <div className="grid md:grid-cols-2 gap-8" data-oid="329drch">
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="c8yy7zw">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="nhu4k05">
                            Conference Organizers
                        </h3>
                        <div className="space-y-6" data-oid=":tf-l47">
                            <div data-oid="gtrn7of">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="5:_lnn.">
                                    Convenor
                                </h4>
                                <p className="text-gray-700" data-oid="vq01fwf">
                                    Dr. Sireesha Telugu
                                </p>
                            </div>
                            <div data-oid="-szna-3">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="p3xgl.9">
                                    Co-convenor
                                </h4>
                                <p className="text-gray-700" data-oid="s..i9-h">
                                    Dr. Bhaskar Lama
                                </p>
                            </div>
                            <div data-oid="wc2dy5d">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="0unr9pp">
                                    International Coordinators
                                </h4>
                                <p className="text-gray-700" data-oid=":lc1p1y">
                                    Dr. Eman Shaban Morsi (Dartmouth College, US)
                                </p>
                                <p className="text-gray-700" data-oid="g:0otym">
                                    Dr. Elena Fiddian-Qasmiyeh (University College London, UK)
                                </p>
                            </div>
                            <div data-oid="yx7gk8n">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="a:bq6qp">
                                    Organising Committee
                                </h4>
                                <div className="grid grid-cols-2 gap-2" data-oid="zw.w9hc">
                                    <p className="text-gray-700" data-oid="rsaqzaz">
                                        Laboni Mukherjee
                                    </p>
                                    <p className="text-gray-700" data-oid=".kejoom">
                                        Noah Simon Kolikapudi
                                    </p>
                                    <p className="text-gray-700" data-oid="pdcu8jm">
                                        Assis Mon Marcelin
                                    </p>
                                    <p className="text-gray-700" data-oid="ypb19gj">
                                        Sourav Jatua
                                    </p>
                                    <p className="text-gray-700" data-oid="3-bbzh_">
                                        Prateeti Chowdary
                                    </p>
                                    <p className="text-gray-700" data-oid=".k9y43j">
                                        Themreichon Alma Poinamei
                                    </p>
                                    <p className="text-gray-700" data-oid="b2.ky58">
                                        Aravind Prakash
                                    </p>
                                    <p className="text-gray-700" data-oid="41.v8ya">
                                        Atul Nair
                                    </p>
                                    <p className="text-gray-700" data-oid="3pn236t">
                                        Songayam Zimik
                                    </p>
                                    <p className="text-gray-700" data-oid="cmnaqox">
                                        Liya Abi
                                    </p>
                                    <p className="text-gray-700" data-oid=":li5dh_">
                                        Abhinav TM
                                    </p>
                                    <p className="text-gray-700" data-oid=".az6tv1">
                                        Arya P
                                    </p>
                                    <p className="text-gray-700" data-oid="p-so0wy">
                                        Gifty R
                                    </p>
                                    <p className="text-gray-700" data-oid="8:3o1m.">
                                        Prabhas Ahamed
                                    </p>
                                    <p className="text-gray-700" data-oid="ha8rb9c">
                                        Irfan S
                                    </p>
                                    <p className="text-gray-700" data-oid="hy8toug">
                                        Hami Shirin
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="-:d8b38">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="gpdas_y">
                            Conference Venue
                        </h3>
                        <div className="grid md:grid-cols-1 gap-6" data-oid="vg-puq-">
                            <div data-oid="axvu:2w">
                                <p className="text-gray-700 mb-2" data-oid="poz1pia">
                                    <strong data-oid="x-ptt44">University of Hyderabad</strong>
                                    <br data-oid="i4inip5" /> Prof. C.R. Rao Road, Gachibowli
                                    <br data-oid="nn8f8r9" /> Hyderabad, Telangana 500046
                                    <br data-oid="1f65hk_" /> India
                                </p>
                                <p className="text-gray-700 mb-4" data-oid="y5.aoy4">
                                    <strong data-oid=":n.-a5h">Conference Hall:</strong> Zakir
                                    Hussain Lecture Hall Complex
                                </p>
                            </div>
                            <div
                                className="rounded-md overflow-hidden shadow-lg mt-4"
                                data-oid="oy-vkxj"
                            >
                                <Image
                                    src="/images/Displacement _20250307_121648_0004.jpg"
                                    alt="University of Hyderabad Campus"
                                    width={1000}
                                    height={400}
                                    className="w-full h-64 object-cover"
                                    data-oid="zl3yamr"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
