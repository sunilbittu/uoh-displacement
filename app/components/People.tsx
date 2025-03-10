'use client';
import Image from 'next/image';

export default function People() {
    return (
        <section id="people" className="py-20 bg-white" data-oid="y7h3ano">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="2junu4v">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="cqmm1e5"
                >
                    People
                </h2>
                <div className="grid md:grid-cols-2 gap-8" data-oid="09xdszs">
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="b_y_oov">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid=":e5ghnc">
                            Conference Organizers
                        </h3>
                        <div className="space-y-6" data-oid="qrraqnd">
                            <div data-oid="b8nwkg.">
                                <h4 className="font-medium text-indigo-700 mb-2" data-oid="-qqvu-0">
                                    Coordinator
                                </h4>
                                <p className="text-gray-700" data-oid="lf32w0e">
                                    Sireesha Telugu
                                </p>
                                <p className="text-gray-700" data-oid="59gsm.1">
                                    University of Hyderabad
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md" data-oid="5etvcrj">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="z0xpv90">
                            Conference Venue
                        </h3>
                        <div className="grid md:grid-cols-1 gap-6" data-oid="8y25j4d">
                            <div data-oid="g2y2xsb">
                                <p className="text-gray-700 mb-2" data-oid="mb9abtz">
                                    <strong data-oid="hvownd4">University of Hyderabad</strong>
                                    <br data-oid="rx7bt_x" /> Prof. C.R. Rao Road, Gachibowli
                                    <br data-oid="sh0wq.1" /> Hyderabad, Telangana 500046
                                    <br data-oid="c.yym6r" /> India
                                </p>
                                <p className="text-gray-700 mb-4" data-oid="4pcdtc_">
                                    <strong data-oid=":8j08od">Conference Hall:</strong> School of
                                    Social Sciences Auditorium
                                </p>
                            </div>
                            <div
                                className="rounded-md overflow-hidden shadow-lg mt-4"
                                data-oid="h26cz9z"
                            >
                                <Image
                                    src="/images/Displacement _20250307_121648_0004.jpg"
                                    alt="University of Hyderabad Campus"
                                    width={1000}
                                    height={400}
                                    className="w-full h-64 object-cover"
                                    data-oid="mu3nig-"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
