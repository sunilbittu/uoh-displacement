'use client';
import Image from 'next/image';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white" data-oid="9jv0f8p">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="7.n79wb">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="t9.6.:y"
                >
                    Contact Us
                </h2>
                <div className="grid md:grid-cols-2 gap-8" data-oid="rdvkzww">
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="3sksb6.">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="isunwdz">
                            Conference Organizers
                        </h3>
                        <div className="space-y-6" data-oid=".3ut51u">
                            <div data-oid="np1sokj">
                                <h4 className="font-medium text-red-700 mb-2" data-oid="3yi_uxo">
                                    Conference Chair
                                </h4>
                                <p className="text-gray-700" data-oid="ao:fel.">
                                    Prof. Ananya Sharma
                                </p>
                                <p className="text-gray-700" data-oid="c6q:oyv">
                                    University of Hyderabad
                                </p>
                                <a
                                    href="mailto:chair@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="xua5iy6"
                                >
                                    chair@displacement2025.org
                                </a>
                            </div>
                            <div data-oid="rzljrev">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="kac8bjw">
                                    Program Committee
                                </h4>
                                <p className="text-gray-700" data-oid="2zjf7_o">
                                    Prof. Michael Chen
                                </p>
                                <p className="text-gray-700" data-oid="bkg4cl3">
                                    Dartmouth College
                                </p>
                                <a
                                    href="mailto:program@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="nr1ogx2"
                                >
                                    program@displacement2025.org
                                </a>
                            </div>
                            <div data-oid="gna36ak">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="ui7:z0t">
                                    Local Arrangements
                                </h4>
                                <p className="text-gray-700" data-oid="fani-os">
                                    Dr. Priya Patel
                                </p>
                                <p className="text-gray-700" data-oid="rdas6sh">
                                    University of Hyderabad
                                </p>
                                <a
                                    href="mailto:local@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="3a906ak"
                                >
                                    local@displacement2025.org
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="z87l7ke">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="yz5jm06">
                            Get in Touch
                        </h3>
                        <form className="space-y-4" data-oid="da.uq5e">
                            <div data-oid="wmbd7ih">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="qv4h1ni"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Your name"
                                    data-oid="jgneo2j"
                                />
                            </div>
                            <div data-oid="37:o.27">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="q46-ugm"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your email"
                                    data-oid="h3f7twd"
                                />
                            </div>
                            <div data-oid=".cq4_lm">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="5rkcmkh"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Subject"
                                    data-oid="0r7mhlx"
                                />
                            </div>
                            <div data-oid="qvfcclt">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="w9vl067"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your message"
                                    data-oid="969jwoz"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                data-oid="zqpes-v"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="g0-cwm3">
                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="0gclhk:">
                        Conference Venue
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6" data-oid="cjnr0pn">
                        <div data-oid="nx574ew">
                            <p className="text-gray-700 mb-2" data-oid="c.txad-">
                                <strong data-oid="y06-287">University of Hyderabad</strong>
                                <br data-oid="qkp6yyw" /> Prof. C.R. Rao Road, Gachibowli
                                <br data-oid=".g74m0t" /> Hyderabad, Telangana 500046
                                <br data-oid="xkr56ml" /> India
                            </p>
                            <p className="text-gray-700 mb-4" data-oid=":l55zi:">
                                <strong data-oid="59jr4gh">Conference Hall:</strong> School of
                                Social Sciences Auditorium
                            </p>
                            <div data-oid="x9fv2:s">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="4zhvc8_">
                                    Accommodation
                                </h4>
                                <p className="text-gray-700" data-oid="fyqs927">
                                    Information about recommended hotels and special conference
                                    rates will be available soon. For early inquiries, please
                                    contact{' '}
                                    <a
                                        href="mailto:accommodation@displacement2025.org"
                                        className="text-indigo-600 hover:underline"
                                        data-oid="tqocosv"
                                    >
                                        accommodation@displacement2025.org
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden shadow-lg" data-oid="73:6o.r">
                            <Image
                                src="/images/Displacement _20250307_121648_0004.jpg"
                                alt="University of Hyderabad Campus"
                                width={1000}
                                height={400}
                                className="w-full h-64 object-cover"
                                data-oid="fxhe3v8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
