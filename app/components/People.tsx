'use client';
import Image from 'next/image';

export default function People() {
    return (
        <section id="people" className="py-20 bg-white" data-oid="7hkdz97">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="_rvitwf">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="5l01jw8"
                >
                    People
                </h2>
                <div className="grid md:grid-cols-2 gap-8" data-oid="rsglo9:">
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="g4p4ia4">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="or8pqs7">
                            Conference Organizers
                        </h3>
                        <div className="space-y-6" data-oid="h6qqwb8">
                            <div data-oid="ogt2tic">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="f78:tx:">
                                    Coordinator
                                </h4>
                                <p className="text-gray-700" data-oid="m:dqrvq">
                                    Sireesha Telugu
                                </p>
                                <p className="text-gray-700" data-oid="tz39q37">
                                    University of Hyderabad
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="qxlhflb">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="i6nfjw6">
                            Conference Venue
                        </h3>
                        <div className="grid md:grid-cols-1 gap-6" data-oid="cmvu.20">
                            <div data-oid="8hwz6k2">
                                <p className="text-gray-700 mb-2" data-oid="pg80b:h">
                                    <strong data-oid="aqi8.xk">University of Hyderabad</strong>
                                    <br data-oid="376ea7b" /> Prof. C.R. Rao Road, Gachibowli
                                    <br data-oid="4pvs:5e" /> Hyderabad, Telangana 500046
                                    <br data-oid="-948j:-" /> India
                                </p>
                                <p className="text-gray-700 mb-4" data-oid="sbd_o7i">
                                    <strong data-oid="0cabkh1">Conference Hall:</strong> School of
                                    Social Sciences Auditorium
                                </p>
                            </div>
                            <div
                                className="rounded-md overflow-hidden shadow-lg mt-4"
                                data-oid="gxw4508"
                            >
                                <Image
                                    src="/images/Displacement _20250307_121648_0004.jpg"
                                    alt="University of Hyderabad Campus"
                                    width={1000}
                                    height={400}
                                    className="w-full h-64 object-cover"
                                    data-oid="3y2-l.r"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
