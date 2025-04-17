'use client';
import Image from 'next/image';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white" data-oid="zw-o1pu">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="c29a854">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="o:urg:6"
                >
                    Contact Us
                </h2>
                <div className="grid md:grid-cols-2 gap-8" data-oid="crjloz5">
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="r3dou4i">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="6iifner">
                            Conference Organizers
                        </h3>
                        <div className="space-y-6" data-oid="d2nvkoy">
                            <div data-oid="wlslsw7">
                                <h4 className="font-medium text-red-700 mb-2" data-oid="_2vxzx9">
                                    Conference Chair
                                </h4>
                                <p className="text-gray-700" data-oid="ta8era3">
                                    Prof. Ananya Sharma
                                </p>
                                <p className="text-gray-700" data-oid="t:t_0xu">
                                    University of Hyderabad
                                </p>
                                <a
                                    href="mailto:chair@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="_uctwu0"
                                >
                                    chair@displacement2025.org
                                </a>
                            </div>
                            <div data-oid="dty_jjd">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="l3:dyls">
                                    Program Committee
                                </h4>
                                <p className="text-gray-700" data-oid="q4w2v:3">
                                    Prof. Michael Chen
                                </p>
                                <p className="text-gray-700" data-oid="0n_2sc1">
                                    Dartmouth College
                                </p>
                                <a
                                    href="mailto:program@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="v:lp8.k"
                                >
                                    program@displacement2025.org
                                </a>
                            </div>
                            <div data-oid="v.h551x">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="yloj2l:">
                                    Local Arrangements
                                </h4>
                                <p className="text-gray-700" data-oid=":k32.tg">
                                    Dr. Priya Patel
                                </p>
                                <p className="text-gray-700" data-oid=":0u5phu">
                                    University of Hyderabad
                                </p>
                                <a
                                    href="mailto:local@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="97n3vpj"
                                >
                                    local@displacement2025.org
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="1dd:ej7">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="hxzyxtt">
                            Get in Touch
                        </h3>
                        <form className="space-y-4" data-oid="fpn1y4_">
                            <div data-oid="okp:19c">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="abj6ry4"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Your name"
                                    data-oid=".f9qcms"
                                />
                            </div>
                            <div data-oid="x7ghvs8">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="qks22q6"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your email"
                                    data-oid="fehbk47"
                                />
                            </div>
                            <div data-oid="s-r-fpm">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="qhub_uy"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Subject"
                                    data-oid="cclp4tm"
                                />
                            </div>
                            <div data-oid="cjwbyca">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="wpn5o.2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your message"
                                    data-oid="_.5c3q7"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                data-oid="hg44lde"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="je2s9dp">
                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="942txl6">
                        Conference Venue
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6" data-oid="daa513u">
                        <div data-oid="zraf8g2">
                            <p className="text-gray-700 mb-2" data-oid="8twsqgw">
                                <strong data-oid="sgr7sz2">University of Hyderabad</strong>
                                <br data-oid="m.1d78q" /> Prof. C.R. Rao Road, Gachibowli
                                <br data-oid="bl_4cxn" /> Hyderabad, Telangana 500046
                                <br data-oid="9ff:nx:" /> India
                            </p>
                            <p className="text-gray-700 mb-4" data-oid="0925.:k">
                                <strong data-oid=".bluaov">Conference Hall:</strong> School of
                                Social Sciences Auditorium
                            </p>
                            <div data-oid="-1_bl6.">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="zn42nen">
                                    Accommodation
                                </h4>
                                <p className="text-gray-700" data-oid="vyquc25">
                                    Information about recommended hotels and special conference
                                    rates will be available soon. For early inquiries, please
                                    contact{' '}
                                    <a
                                        href="mailto:accommodation@displacement2025.org"
                                        className="text-indigo-600 hover:underline"
                                        data-oid="-xa1jh4"
                                    >
                                        accommodation@displacement2025.org
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden shadow-lg" data-oid="gl2a0so">
                            <Image
                                src="/images/Displacement _20250307_121648_0004.jpg"
                                alt="University of Hyderabad Campus"
                                width={1000}
                                height={400}
                                className="w-full h-64 object-cover"
                                data-oid="c_8nymo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
