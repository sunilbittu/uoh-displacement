'use client';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white" data-oid="83cz:a5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="rk:vov0">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="b250mtd"
                >
                    About the Conference
                </h2>

                {/* Image Gallery */}
                <div className="mb-16 overflow-hidden rounded-xl shadow-lg" data-oid="ab838z6">
                    <div className="grid grid-cols-3 gap-1" data-oid="evxq0v4">
                        <div className="col-span-1" data-oid="nuvsgwm">
                            <Image
                                src="/images/Displacement _20250307_121648_0001.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="iaqd:i9"
                            />
                        </div>
                        <div className="col-span-1" data-oid="vrbi-n2">
                            <Image
                                src="/images/Displacement _20250307_121648_0002.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="wbeu1xa"
                            />
                        </div>
                        <div className="col-span-1" data-oid="9qs2b5w">
                            <Image
                                src="/images/Displacement _20250307_121648_0003.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="lf1cbin"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8" data-oid="on9fuew">
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://uohyd.ac.in/', '_blank')}
                        data-oid=":6i3p70"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="ljjum-f">
                            University of Hyderabad
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="gf_j1t5">
                            A premier institution of higher education in India known for its
                            outstanding contribution to teaching and research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://sites.dartmouth.edu/laaa/', '_blank')}
                        data-oid="tac0fj7"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="rd51_kw">
                            Dartmouth College
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="09dxcpv">
                            An Ivy League research university with a rich history of academic
                            excellence and innovative research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://southernresponses.org/', '_blank')}
                        data-oid="5_v6hsf"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="a4-e:4x">
                            University College London (UCL)
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="06s7367">
                            A world-leading multidisciplinary university with an international
                            reputation for quality research and teaching.
                        </p>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="w0wjte:">
                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="csqu777">
                        About Displacement 2025
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="q6a0h56">
                        The Displacement Conference 2025 brings together scholars, researchers, and
                        practitioners from around the world to explore the complex phenomenon of
                        displacement in its various forms—geographical, social, cultural, economic,
                        and psychological.
                    </p>
                    <p className="text-gray-700" data-oid="fbr36jm">
                        Department of English, University of Hyderabad, In Collaboration with
                        Dartmouth College, and University College London aims to foster
                        interdisciplinary dialogue and develop innovative approaches to
                        understanding and addressing displacement in contemporary society.
                    </p>
                    <p className="text-gray-700" data-oid="gg-bwn5">
                        This conference is funded by Institute of Eminence, University of Hyderabad.
                    </p>
                </div>
            </div>
        </section>
    );
}
