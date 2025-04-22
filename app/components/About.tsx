'use client';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white" data-oid="ovegy9x">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=":mzce0_">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="3w2qjai"
                >
                    About the Conference
                </h2>

                {/* Image Gallery */}
                <div className="mb-16 overflow-hidden rounded-xl shadow-lg" data-oid="8vvxo:x">
                    <div className="grid grid-cols-3 gap-1" data-oid="mqk01i_">
                        <div className="col-span-1" data-oid="p_0nv:e">
                            <Image
                                src="/images/Displacement _20250307_121648_0001.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="-wejv.z"
                            />
                        </div>
                        <div className="col-span-1" data-oid="8ap1r-x">
                            <Image
                                src="/images/Displacement _20250307_121648_0002.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="zxhy_x4"
                            />
                        </div>
                        <div className="col-span-1" data-oid="vtqrzez">
                            <Image
                                src="/images/Displacement _20250307_121648_0003.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="j4gwidx"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8" data-oid="shj62e.">
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://uohyd.ac.in/', '_blank')}
                        data-oid="tdizfin"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="ix7j6jp">
                            University of Hyderabad
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="6sj6ze6">
                            A premier institution of higher education in India known for its
                            outstanding contribution to teaching and research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://sites.dartmouth.edu/laaa/', '_blank')}
                        data-oid=":tnx7dg"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="i:f8q1r">
                            Dartmouth College
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="k534jh5">
                            An Ivy League research university with a rich history of academic
                            excellence and innovative research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://southernresponses.org/', '_blank')}
                        data-oid="nmhty3n"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="5w76fxb">
                            University College London (UCL)
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="fo2tlov">
                            A world-leading multidisciplinary university with an international
                            reputation for quality research and teaching.
                        </p>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="zmqwkzd">
                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="03cnb6e">
                        About Displacement 2025
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="mhl17p1">
                        The Displacement Conference 2025 brings together scholars, researchers, and
                        practitioners from around the world to explore the complex phenomenon of
                        displacement in its various forms—geographical, social, cultural, economic,
                        and psychological.
                    </p>
                    <p className="text-gray-700" data-oid="ujrazce">
                        Department of English, University of Hyderabad, In Collaboration with
                        Dartmouth College, and University College London aims to foster
                        interdisciplinary dialogue and develop innovative approaches to
                        understanding and addressing displacement in contemporary society.
                    </p>
                    <p className="text-gray-700" data-oid="n-e52q.">
                        This conference is funded by Institute of Eminence, University of Hyderabad.
                    </p>
                </div>
            </div>
        </section>
    );
}
