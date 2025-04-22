'use client';
import Image from 'next/image';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white" data-oid="w-g7wc9">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="p7p44py">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="cej_dd6"
                >
                    Contact Us
                </h2>
                <div className="grid md:grid-cols-2 gap-8" data-oid="15p1:s0">
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="lk9-tya">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid=".xd2a78">
                            Conference Organizers
                        </h3>
                        <div className="space-y-6" data-oid="xb9agka">
                            <div data-oid="-2b7yl7">
                                <h4 className="font-medium text-red-700 mb-2" data-oid="c_o_m5y">
                                    Conference Chair
                                </h4>
                                <p className="text-gray-700" data-oid="le5im0.">
                                    Prof. Ananya Sharma
                                </p>
                                <p className="text-gray-700" data-oid="ogrle_t">
                                    University of Hyderabad
                                </p>
                                <a
                                    href="mailto:chair@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="fa:tzlv"
                                >
                                    chair@displacement2025.org
                                </a>
                            </div>
                            <div data-oid="z06tq9y">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="3zgf0q5">
                                    Program Committee
                                </h4>
                                <p className="text-gray-700" data-oid="d2gssx.">
                                    Prof. Michael Chen
                                </p>
                                <p className="text-gray-700" data-oid="f45qkp3">
                                    Dartmouth College
                                </p>
                                <a
                                    href="mailto:program@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="gj2-ln2"
                                >
                                    program@displacement2025.org
                                </a>
                            </div>
                            <div data-oid="un0:4w5">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="ete2rhx">
                                    Local Arrangements
                                </h4>
                                <p className="text-gray-700" data-oid="gm0omij">
                                    Dr. Priya Patel
                                </p>
                                <p className="text-gray-700" data-oid="64e2i-s">
                                    University of Hyderabad
                                </p>
                                <a
                                    href="mailto:local@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="n:afdy-"
                                >
                                    local@displacement2025.org
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="amg_961">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="q23651j">
                            Get in Touch
                        </h3>
                        <form className="space-y-4" data-oid="thssmw4">
                            <div data-oid="uycmeg1">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="7tgm8xv"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Your name"
                                    data-oid="hk1r99y"
                                />
                            </div>
                            <div data-oid="mwyo:5a">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="dxgaymw"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your email"
                                    data-oid="u2.kfqt"
                                />
                            </div>
                            <div data-oid="t7j5mhi">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="1:qhqm:"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Subject"
                                    data-oid="dc8ikrq"
                                />
                            </div>
                            <div data-oid="inhh6ur">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="1.wdteg"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your message"
                                    data-oid="3-swneb"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                data-oid=":7u6660"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="lhevceo">
                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="wef6s.-">
                        Conference Venue
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6" data-oid="2moj67u">
                        <div data-oid=":pi0zrn">
                            <p className="text-gray-700 mb-2" data-oid="ir5l:wx">
                                <strong data-oid="ct9x07a">University of Hyderabad</strong>
                                <br data-oid="s8x3vuw" /> Prof. C.R. Rao Road, Gachibowli
                                <br data-oid="tf_g1w:" /> Hyderabad, Telangana 500046
                                <br data-oid="r9g.sds" /> India
                            </p>
                            <p className="text-gray-700 mb-4" data-oid="zm2zzno">
                                <strong data-oid="y2yd94r">Conference Hall:</strong> School of
                                Social Sciences Auditorium
                            </p>
                            <div data-oid="8ak4fdu">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="za4s6x.">
                                    Accommodation
                                </h4>
                                <p className="text-gray-700" data-oid="kxpuola">
                                    Information about recommended hotels and special conference
                                    rates will be available soon. For early inquiries, please
                                    contact{' '}
                                    <a
                                        href="mailto:accommodation@displacement2025.org"
                                        className="text-indigo-600 hover:underline"
                                        data-oid="e8.oail"
                                    >
                                        accommodation@displacement2025.org
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden shadow-lg" data-oid="hdztlq3">
                            <Image
                                src="/images/Displacement _20250307_121648_0004.jpg"
                                alt="University of Hyderabad Campus"
                                width={1000}
                                height={400}
                                className="w-full h-64 object-cover"
                                data-oid="5xm7b:u"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
