'use client';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white" data-oid="3i9vabt">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="tnw0rxj">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid=":sre-lv"
                >
                    About the Conference
                </h2>

                {/* Image Gallery */}
                <div className="mb-16 overflow-hidden rounded-xl shadow-lg" data-oid="jz3jmxq">
                    <div className="grid grid-cols-3 gap-1" data-oid="tm-p99o">
                        <div className="col-span-1" data-oid="a04vp-i">
                            <Image
                                src="/images/Displacement _20250307_121648_0001.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="1s.oqkl"
                            />
                        </div>
                        <div className="col-span-1" data-oid="p:fao73">
                            <Image
                                src="/images/Displacement _20250307_121648_0002.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="2p0hdki"
                            />
                        </div>
                        <div className="col-span-1" data-oid="-z.32g.">
                            <Image
                                src="/images/Displacement _20250307_121648_0003.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="y34mt7b"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8" data-oid="zll8wtg">
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://uohyd.ac.in/', '_blank')}
                        data-oid="oup:vlg"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="swbqoz1">
                            University of Hyderabad
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="ndb4a-q">
                            A premier institution of higher education in India known for its
                            outstanding contribution to teaching and research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://sites.dartmouth.edu/laaa/', '_blank')}
                        data-oid="bmh6200"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="ng01o:e">
                            Dartmouth College
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="8em.4z_">
                            An Ivy League research university with a rich history of academic
                            excellence and innovative research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://southernresponses.org/', '_blank')}
                        data-oid="2-nog6i"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="z_aks-7">
                            University College London (UCL)
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="i6z7up6">
                            A world-leading multidisciplinary university with an international
                            reputation for quality research and teaching.
                        </p>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="i-dm327">
                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="fy5ztql">
                        About Displacement 2025
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="ediyg9f">
                        The Displacement Conference 2025 brings together scholars, researchers, and
                        practitioners from around the world to explore the complex phenomenon of
                        displacement in its various forms—geographical, social, cultural, economic,
                        and psychological.
                    </p>
                    <p className="text-gray-700" data-oid="_u8hzku">
                        Department of English, University of Hyderabad, In Collaboration with
                        Dartmouth College, and University College London aims to foster
                        interdisciplinary dialogue and develop innovative approaches to
                        understanding and addressing displacement in contemporary society.
                    </p>
                    <p className="text-gray-700" data-oid="fxn7ank">
                        This conference is funded by Institute of Eminence, University of Hyderabad.
                    </p>
                </div>
            </div>
        </section>
    );
}
