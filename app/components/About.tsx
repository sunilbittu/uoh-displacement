'use client';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white" data-oid="6tfg2vh">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ft39dc:">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="fw1qbzd"
                >
                    About the Conference
                </h2>

                {/* Image Gallery */}
                <div className="mb-16 overflow-hidden rounded-xl shadow-lg" data-oid="daztdi.">
                    <div className="grid grid-cols-3 gap-1" data-oid="6iff8i5">
                        <div className="col-span-1" data-oid=":krnx13">
                            <Image
                                src="/images/Displacement _20250307_121648_0001.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="vnpsun8"
                            />
                        </div>
                        <div className="col-span-1" data-oid="hnm.29j">
                            <Image
                                src="/images/Displacement _20250307_121648_0002.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="30h5qbt"
                            />
                        </div>
                        <div className="col-span-1" data-oid="58zrtnc">
                            <Image
                                src="/images/Displacement _20250307_121648_0003.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="u:1x9iw"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8" data-oid="9p6ckdu">
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://uohyd.ac.in/', '_blank')}
                        data-oid="-d587vv"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="17eiqmb">
                            University of Hyderabad
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="z05djbo">
                            A premier institution of higher education in India known for its
                            outstanding contribution to teaching and research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://sites.dartmouth.edu/laaa/', '_blank')}
                        data-oid="c5bdhfi"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="tvfgb6-">
                            Dartmouth College
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="k3afng9">
                            An Ivy League research university with a rich history of academic
                            excellence and innovative research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://southernresponses.org/', '_blank')}
                        data-oid="37i4b8l"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="0d.y4z7">
                            University College London (UCL)
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="c31rcfm">
                            A world-leading multidisciplinary university with an international
                            reputation for quality research and teaching.
                        </p>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="jzu4yvp">
                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid=":qps0gq">
                        About Displacement 2025
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="g0xl6gs">
                        The Displacement Conference 2025 brings together scholars, researchers, and
                        practitioners from around the world to explore the complex phenomenon of
                        displacement in its various forms—geographical, social, cultural, economic,
                        and psychological.
                    </p>
                    <p className="text-gray-700" data-oid="tge_rv_">
                        Department of English, University of Hyderabad, In Collaboration with
                        Dartmouth College, and University College London aims to foster
                        interdisciplinary dialogue and develop innovative approaches to
                        understanding and addressing displacement in contemporary society.
                    </p>
                    <p className="text-gray-700" data-oid="ifbf:mh">
                        This conference is funded by Institute of Eminence, University of Hyderabad.
                    </p>
                </div>
            </div>
        </section>
    );
}
