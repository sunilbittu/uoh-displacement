'use client';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white" data-oid="7aaggni">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="12m6bep">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="3b4hibs"
                >
                    About the Conference
                </h2>

                {/* Image Gallery */}
                <div className="mb-16 overflow-hidden rounded-xl shadow-lg" data-oid="-_fi0-o">
                    <div className="grid grid-cols-3 gap-1" data-oid="fphggac">
                        <div className="col-span-1" data-oid="bjs-9v9">
                            <Image
                                src="/images/Displacement _20250307_121648_0001.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="np2gkw:"
                            />
                        </div>
                        <div className="col-span-1" data-oid="104bh89">
                            <Image
                                src="/images/Displacement _20250307_121648_0002.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="4y4f:hz"
                            />
                        </div>
                        <div className="col-span-1" data-oid="z5b_2h3">
                            <Image
                                src="/images/Displacement _20250307_121648_0003.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                                data-oid="fzujpo2"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8" data-oid=":y.xfy7">
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://uohyd.ac.in/', '_blank')}
                        data-oid="pgyved_"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="bjth-ef">
                            University of Hyderabad
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="gqr47nf">
                            A premier institution of higher education in India known for its
                            outstanding contribution to teaching and research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://sites.dartmouth.edu/laaa/', '_blank')}
                        data-oid="gnu.w6h"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="0_mb8wh">
                            Dartmouth College
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="ga10c75">
                            An Ivy League research university with a rich history of academic
                            excellence and innovative research.
                        </p>
                    </div>
                    <div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                        onClick={() => window.open('https://southernresponses.org/', '_blank')}
                        data-oid="ek24z3z"
                    >
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="hqdv2-:">
                            University College London (UCL)
                        </h3>
                        <p className="text-gray-600 mb-4" data-oid="waevzmu">
                            A world-leading multidisciplinary university with an international
                            reputation for quality research and teaching.
                        </p>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg" data-oid="ias4iyi">
                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="-amavhf">
                        About Displacement 2025
                    </h3>
                    <p className="text-gray-700 mb-4" data-oid="0gxtf60">
                        The Displacement Conference 2025 brings together scholars, researchers, and
                        practitioners from around the world to explore the complex phenomenon of
                        displacement in its various forms—geographical, social, cultural, economic,
                        and psychological.
                    </p>
                    <p className="text-gray-700" data-oid="mt3_bm:">
                        Department of English, University of Hyderabad, In Collaboration with
                        Dartmouth College, and University College London aims to foster
                        interdisciplinary dialogue and develop innovative approaches to
                        understanding and addressing displacement in contemporary society.
                    </p>
                    <p className="text-gray-700" data-oid="-78po1.">
                        This conference is funded by Institute of Eminence, University of Hyderabad.
                    </p>
                </div>
            </div>
        </section>
    );
}
