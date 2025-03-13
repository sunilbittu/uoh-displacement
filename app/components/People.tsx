'use client';
import Image from 'next/image';

export default function People() {
    return (
        <section id="people" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-red-800 mb-12">People</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">
                            Conference Organizers
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-medium text-indigo-700 mb-2">Coordinator</h4>
                                <p className="text-gray-700">Sireesha Telugu</p>
                                <p className="text-gray-700">University of Hyderabad</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">
                            Conference Venue
                        </h3>
                        <div className="grid md:grid-cols-1 gap-6">
                            <div>
                                <p className="text-gray-700 mb-2">
                                    <strong>University of Hyderabad</strong>
                                    <br /> Prof. C.R. Rao Road, Gachibowli
                                    <br /> Hyderabad, Telangana 500046
                                    <br /> India
                                </p>
                                <p className="text-gray-700 mb-4">
                                    <strong>Conference Hall:</strong> Zakir Hussain Lecture Hall
                                    Complex
                                </p>
                            </div>
                            <div className="rounded-md overflow-hidden shadow-lg mt-4">
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
            </div>
        </section>
    );
}
