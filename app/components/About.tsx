'use client';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white" data-oid="qvgbihb">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="68byi33">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="b:2rb45"
                >
                    About the Conference
                </h2>

                {/* Image Gallery */}
                <div className="mb-16 overflow-hidden rounded-xl shadow-lg" data-oid="eg_0urp">
                    <div className="grid grid-cols-3 gap-1" data-oid="0z7johw">
                        <div className="col-span-1" data-oid="8jhjsto">
                            <Image
                                src="/images/Displacement _20250307_121648_0001.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="71s9k8-"
                            />
                        </div>
                        <div className="col-span-1" data-oid="85mr:td">
                            <Image
                                src="/images/Displacement _20250307_121648_0002.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid=":4jyr4n"
                            />
                        </div>
                        <div className="col-span-1" data-oid="2hr46sp">
                            <Image
                                src="/images/Displacement _20250307_121648_0003.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="ud.gse1"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8" data-oid="fbp.9ly">
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://uohyd.ac.in/', '_blank')}
                        data-oid="rtcu2e-"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="ndbh0od">
                            University of Hyderabad
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="6ax6fzw">
                            A premier institution of higher education in India known for its
                            outstanding contribution to teaching and research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://sites.dartmouth.edu/laaa/', '_blank')}
                        data-oid="ugwz-3p"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="23j2m20">
                            Dartmouth College
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="-adw-t1">
                            An Ivy League research university with a rich history of academic
                            excellence and innovative research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://southernresponses.org/', '_blank')}
                        data-oid="s9lh5xz"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="uvx.s1e">
                            University College London (UCL)
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="sej.pf7">
                            A world-leading multidisciplinary university with an international
                            reputation for quality research and teaching.
                        </p>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid=":0xa5.0">
                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="y6ym-qc">
                        About Displacement 2025
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="i4.-ads">
                        The Displacement Conference 2025 brings together scholars, researchers, and
                        practitioners from around the world to explore the complex phenomenon of
                        displacement in its various forms—geographical, social, cultural, economic,
                        and psychological.
                    </p>
                    <p className="text-gray-700" data-oid="v8:d5u1">
                        Department of English, University of Hyderabad, In Collaboration with
                        Dartmouth College, and University College London aims to foster
                        interdisciplinary dialogue and develop innovative approaches to
                        understanding and addressing displacement in contemporary society.
                    </p>
                    <p className="text-gray-700" data-oid="hrvz3lu">
                        This conference is funded by Institute of Eminence, University of Hyderabad.
                    </p>
                </div>
            </div>
        </section>
    );
}
