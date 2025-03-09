'use client';
import Image from 'next/image';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
                    Contact Us
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">
                            Conference Organizers
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-medium text-red-700 mb-2">
                                    Conference Chair
                                </h4>
                                <p className="text-gray-700">Prof. Ananya Sharma</p>
                                <p className="text-gray-700">University of Hyderabad</p>
                                <a
                                    href="mailto:chair@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                >
                                    chair@displacement2025.org
                                </a>
                            </div>
                            <div>
                                <h4 className="font-medium text-indigo-700 mb-2">
                                    Program Committee
                                </h4>
                                <p className="text-gray-700">Prof. Michael Chen</p>
                                <p className="text-gray-700">Dartmouth College</p>
                                <a
                                    href="mailto:program@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                >
                                    program@displacement2025.org
                                </a>
                            </div>
                            <div>
                                <h4 className="font-medium text-indigo-700 mb-2">
                                    Local Arrangements
                                </h4>
                                <p className="text-gray-700">Dr. Priya Patel</p>
                                <p className="text-gray-700">University of Hyderabad</p>
                                <a
                                    href="mailto:local@displacement2025.org"
                                    className="text-indigo-600 hover:underline"
                                >
                                    local@displacement2025.org
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">
                            Get in Touch
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your email"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">
                        Conference Venue
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-gray-700 mb-2">
                                <strong>University of Hyderabad</strong>
                                <br /> Prof. C.R. Rao Road, Gachibowli
                                <br /> Hyderabad, Telangana 500046
                                <br /> India
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>Conference Hall:</strong> School of Social Sciences
                                Auditorium
                            </p>
                            <div>
                                <h4 className="font-medium text-indigo-700 mb-2">
                                    Accommodation
                                </h4>
                                <p className="text-gray-700">
                                    Information about recommended hotels and special
                                    conference rates will be available soon. For early
                                    inquiries, please contact{' '}
                                    <a
                                        href="mailto:accommodation@displacement2025.org"
                                        className="text-indigo-600 hover:underline"
                                    >
                                        accommodation@displacement2025.org
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden shadow-lg">
                            <Image
                                src="/images/Displacement _20250307_121648_0004.jpg"
                                alt="University of Hyderabad Campus"
                                width={1000}
                                height={400}
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 