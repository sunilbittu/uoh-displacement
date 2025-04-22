'use client';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white" data-oid="y.60e94">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="i2ka8o.">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="_m8rjmf"
                >
                    About the Conference
                </h2>

                {/* Image Gallery */}
                <div className="mb-16 overflow-hidden rounded-xl shadow-lg" data-oid="v22:mbf">
                    <div className="grid grid-cols-3 gap-1" data-oid="aup5ih0">
                        <div className="col-span-1" data-oid="dw3_:g1">
                            <Image
                                src="/images/Displacement _20250307_121648_0001.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="qx4vtwr"
                            />
                        </div>
                        <div className="col-span-1" data-oid="ebvplzx">
                            <Image
                                src="/images/Displacement _20250307_121648_0002.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="5k2:jyt"
                            />
                        </div>
                        <div className="col-span-1" data-oid="1-uf4t0">
                            <Image
                                src="/images/Displacement _20250307_121648_0003.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="g3_gcmq"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8" data-oid="cgwi-09">
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://uohyd.ac.in/', '_blank')}
                        data-oid="kub:8pv"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid=":460th2">
                            University of Hyderabad
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="o:ngwik">
                            A premier institution of higher education in India known for its
                            outstanding contribution to teaching and research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://sites.dartmouth.edu/laaa/', '_blank')}
                        data-oid="j5kif-4"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="pbkslcv">
                            Dartmouth College
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="2ri1v32">
                            An Ivy League research university with a rich history of academic
                            excellence and innovative research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://southernresponses.org/', '_blank')}
                        data-oid="e0u3rp4"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="yyayhnw">
                            University College London (UCL)
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="mytx23x">
                            A world-leading multidisciplinary university with an international
                            reputation for quality research and teaching.
                        </p>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="yrz:8xn">
                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="vsxa.f.">
                        About Displacement 2025
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="i_balob">
                        The Displacement Conference 2025 brings together scholars, researchers, and
                        practitioners from around the world to explore the complex phenomenon of
                        displacement in its various forms—geographical, social, cultural, economic,
                        and psychological.
                    </p>
                    <p className="text-gray-700" data-oid="6bq346w">
                        Department of English, University of Hyderabad, In Collaboration with
                        Dartmouth College, and University College London aims to foster
                        interdisciplinary dialogue and develop innovative approaches to
                        understanding and addressing displacement in contemporary society.
                    </p>
                    <p className="text-gray-700" data-oid="ejjvys1">
                        This conference is funded by Institute of Eminence, University of Hyderabad.
                    </p>
                </div>
            </div>
        </section>
    );
}
