'use client';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white" data-oid="eo7_2xq">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="siga6wn">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="t38:1py"
                >
                    About the Conference
                </h2>

                {/* Image Gallery */}
                <div className="mb-16 overflow-hidden rounded-xl shadow-lg" data-oid="kxyaq0x">
                    <div className="grid grid-cols-3 gap-1" data-oid="volvq8g">
                        <div className="col-span-1" data-oid="yk0nqpt">
                            <Image
                                src="/images/Displacement _20250307_121648_0001.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="o1g7ken"
                            />
                        </div>
                        <div className="col-span-1" data-oid=".wjkna_">
                            <Image
                                src="/images/Displacement _20250307_121648_0002.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="yz02i0j"
                            />
                        </div>
                        <div className="col-span-1" data-oid="gwlg6ug">
                            <Image
                                src="/images/Displacement _20250307_121648_0003.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="-0ubf9h"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8" data-oid="7m_q846">
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://uohyd.ac.in/', '_blank')}
                        data-oid="yb5.mkz"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid=".dr5w-w">
                            University of Hyderabad
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="sn3uy7t">
                            A premier institution of higher education in India known for its
                            outstanding contribution to teaching and research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://sites.dartmouth.edu/laaa/', '_blank')}
                        data-oid="x08jyiy"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="kbsi0u9">
                            Dartmouth College
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="lio5uo:">
                            An Ivy League research university with a rich history of academic
                            excellence and innovative research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://southernresponses.org/', '_blank')}
                        data-oid="25z6xu6"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="vado6r0">
                            University College London (UCL)
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="vjqd:e_">
                            A world-leading multidisciplinary university with an international
                            reputation for quality research and teaching.
                        </p>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="m25.psg">
                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="l00ba82">
                        About Displacement 2025
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="mh.b9qz">
                        The Displacement Conference 2025 brings together scholars, researchers, and
                        practitioners from around the world to explore the complex phenomenon of
                        displacement in its various forms—geographical, social, cultural, economic,
                        and psychological.
                    </p>
                    <p className="text-gray-700" data-oid="zmt:84t">
                        Department of English, University of Hyderabad, In Collaboration with
                        Dartmouth College, and University College London aims to foster
                        interdisciplinary dialogue and develop innovative approaches to
                        understanding and addressing displacement in contemporary society.
                    </p>
                    <p className="text-gray-700" data-oid="5l_acx-">
                        This conference is funded by Institute of Eminence, University of Hyderabad.
                    </p>
                </div>
            </div>
        </section>
    );
}
