'use client';
import Image from 'next/image';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white" data-oid="47h5huu">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="nd9-z9y">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="7bzv7sc"
                >
                    Contact Us
                </h2>
                <div className="grid md:grid-cols-2 gap-8" data-oid="kx5mory">
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="70ke2fh">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="j2yjxl7">
                            Conference Organizers
                        </h3>
                        <div className="space-y-6" data-oid="2cy_y6t">
                            <div data-oid="6tmheq7">
                                <h4 className="font-medium text-red-700 mb-2" data-oid="624o6_g">
                                    Conference Chair
                                </h4>
                                <p className="text-gray-700" data-oid="8bdvvtv">
                                    Prof. Ananya Sharma
                                </p>
                                <p className="text-gray-700" data-oid="mmy_d2u">
                                    University of Hyderabad
                                </p>
                                <a
                                    href="mailto:chair@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="ht_940r"
                                >
                                    chair@displacement2025.org
                                </a>
                            </div>
                            <div data-oid="jqb_-fy">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="fsmiso1">
                                    Program Committee
                                </h4>
                                <p className="text-gray-700" data-oid="zr8k87d">
                                    Prof. Michael Chen
                                </p>
                                <p className="text-gray-700" data-oid="vu1o1db">
                                    Dartmouth College
                                </p>
                                <a
                                    href="mailto:program@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="sitz0x6"
                                >
                                    program@displacement2025.org
                                </a>
                            </div>
                            <div data-oid="mmp33mg">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="jhxc__3">
                                    Local Arrangements
                                </h4>
                                <p className="text-gray-700" data-oid="d7cms:i">
                                    Dr. Priya Patel
                                </p>
                                <p className="text-gray-700" data-oid="yc49k6l">
                                    University of Hyderabad
                                </p>
                                <a
                                    href="mailto:local@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="udp.85e"
                                >
                                    local@displacement2025.org
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="lxlxk2h">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="rju4krh">
                            Get in Touch
                        </h3>
                        <form className="space-y-4" data-oid=":cdoun5">
                            <div data-oid="f6k7q48">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="_4bjokr"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Your name"
                                    data-oid="knqz69m"
                                />
                            </div>
                            <div data-oid=":6073:s">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="-7do5iw"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your email"
                                    data-oid="vxi.ygq"
                                />
                            </div>
                            <div data-oid="1_k6gzh">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="5z:2e7f"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Subject"
                                    data-oid="1hh1zhh"
                                />
                            </div>
                            <div data-oid="eachqo4">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="kmg9cmr"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your message"
                                    data-oid="1o7wkd4"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                data-oid="u-7wn.s"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid=".6zhk4-">
                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="eybde7l">
                        Conference Venue
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6" data-oid="0g2t80y">
                        <div data-oid="8t4klx2">
                            <p className="text-gray-700 mb-2" data-oid="9apjah:">
                                <strong data-oid="gnf1_c:">University of Hyderabad</strong>
                                <br data-oid="th6kj4s" /> Prof. C.R. Rao Road, Gachibowli
                                <br data-oid="_cszt.r" /> Hyderabad, Telangana 500046
                                <br data-oid="fw3raj5" /> India
                            </p>
                            <p className="text-gray-700 mb-4" data-oid="ang7io6">
                                <strong data-oid="ioqnck2">Conference Hall:</strong> School of
                                Social Sciences Auditorium
                            </p>
                            <div data-oid="nfdh_pv">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="a_9yxfa">
                                    Accommodation
                                </h4>
                                <p className="text-gray-700" data-oid="nj9_see">
                                    Information about recommended hotels and special conference
                                    rates will be available soon. For early inquiries, please
                                    contact{' '}
                                    <a
                                        href="mailto:accommodation@displacement2025.org"
                                        className="text-indigo-600 hover:underline"
                                        data-oid=".2tla33"
                                    >
                                        accommodation@displacement2025.org
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden shadow-lg" data-oid="yo9ngrf">
                            <Image
                                src="/images/Displacement _20250307_121648_0004.jpg"
                                alt="University of Hyderabad Campus"
                                width={1000}
                                height={400}
                                className="w-full h-64 object-cover"
                                data-oid="w0:w-4:"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
