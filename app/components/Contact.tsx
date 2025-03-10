'use client';
import Image from 'next/image';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white" data-oid="b70swof">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="glhk_:j">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="nq1rnt8"
                >
                    Contact Us
                </h2>
                <div className="grid md:grid-cols-2 gap-8" data-oid="q3_.:rk">
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="6brc_rq">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="e2jz.nh">
                            Conference Organizers
                        </h3>
                        <div className="space-y-6" data-oid="j1ux-tg">
                            <div data-oid="wn._kwb">
                                <h4 className="font-medium text-red-700 mb-2" data-oid="kub6jg0">
                                    Conference Chair
                                </h4>
                                <p className="text-gray-700" data-oid="6x_7-59">
                                    Prof. Ananya Sharma
                                </p>
                                <p className="text-gray-700" data-oid="rsc-9oo">
                                    University of Hyderabad
                                </p>
                                <a
                                    href="mailto:chair@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="tkfcbgb"
                                >
                                    chair@displacement2025.org
                                </a>
                            </div>
                            <div data-oid="f6o2_e_">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="sy1r__u">
                                    Program Committee
                                </h4>
                                <p className="text-gray-700" data-oid="or:5skt">
                                    Prof. Michael Chen
                                </p>
                                <p className="text-gray-700" data-oid="_e-l6:1">
                                    Dartmouth College
                                </p>
                                <a
                                    href="mailto:program@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="3-7mss5"
                                >
                                    program@displacement2025.org
                                </a>
                            </div>
                            <div data-oid="g6ao6qq">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="q3km1xj">
                                    Local Arrangements
                                </h4>
                                <p className="text-gray-700" data-oid="lxlhswg">
                                    Dr. Priya Patel
                                </p>
                                <p className="text-gray-700" data-oid="zsf3g:p">
                                    University of Hyderabad
                                </p>
                                <a
                                    href="mailto:local@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                    data-oid="ilncs1a"
                                >
                                    local@displacement2025.org
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="jsu49aw">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="vcaqwbw">
                            Get in Touch
                        </h3>
                        <form className="space-y-4" data-oid="rm5ye_p">
                            <div data-oid="grm8.dd">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="fdau.i."
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Your name"
                                    data-oid="2lu:ne:"
                                />
                            </div>
                            <div data-oid="1g85q5s">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="m0b:5-w"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your email"
                                    data-oid="a:8m6bg"
                                />
                            </div>
                            <div data-oid="9wu30_h">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="x25.723"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Subject"
                                    data-oid="y6m2ybt"
                                />
                            </div>
                            <div data-oid="3ldf431">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="w09g-5v"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your message"
                                    data-oid="ujxoner"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                data-oid="c.vd:w4"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="vn-stgd">
                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="wohqc.2">
                        Conference Venue
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6" data-oid="tzcl459">
                        <div data-oid="hmcd6yk">
                            <p className="text-gray-700 mb-2" data-oid="-_ba5j9">
                                <strong data-oid="026su6s">University of Hyderabad</strong>
                                <br data-oid="-vep2yj" /> Prof. C.R. Rao Road, Gachibowli
                                <br data-oid="y:am_3z" /> Hyderabad, Telangana 500046
                                <br data-oid="2w1wpvm" /> India
                            </p>
                            <p className="text-gray-700 mb-4" data-oid="oopx2-x">
                                <strong data-oid="-4vf3ye">Conference Hall:</strong> School of
                                Social Sciences Auditorium
                            </p>
                            <div data-oid="7:jc51c">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="4010_fp">
                                    Accommodation
                                </h4>
                                <p className="text-gray-700" data-oid="qj:bm09">
                                    Information about recommended hotels and special conference
                                    rates will be available soon. For early inquiries, please
                                    contact{' '}
                                    <a
                                        href="mailto:accommodation@displacement2025.org"
                                        className="text-indigo-600 hover:underline"
                                        data-oid="5slq4bi"
                                    >
                                        accommodation@displacement2025.org
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden shadow-lg" data-oid="fikpd1o">
                            <Image
                                src="/images/Displacement _20250307_121648_0004.jpg"
                                alt="University of Hyderabad Campus"
                                width={1000}
                                height={400}
                                className="w-full h-64 object-cover"
                                data-oid="qi_2lcz"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
