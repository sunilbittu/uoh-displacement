'use client';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
                    About the Conference
                </h2>

                {/* Image Gallery */}
                <div className="mb-16 overflow-hidden rounded-xl shadow-lg">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="col-span-1">
                            <Image
                                src="/images/Displacement _20250307_121648_0001.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                            />
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/Displacement _20250307_121648_0002.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                            />
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/images/Displacement _20250307_121648_0003.jpg"
                                alt="Conference Image"
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">
                            University of Hyderabad
                        </h3>
                        <p className="text-gray-600 mb-4">
                            A premier institution of higher education in India known for its
                            outstanding contribution to teaching and research.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">
                            Dartmouth College
                        </h3>
                        <p className="text-gray-600 mb-4">
                            An Ivy League research university with a rich history of
                            academic excellence and innovative research.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">
                            University College London (UCL)
                        </h3>
                        <p className="text-gray-600 mb-4">
                            A world-leading multidisciplinary university with an
                            international reputation for quality research and teaching.
                        </p>
                    </div>
                </div>
                <div className="mt-12 bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">
                        About DISPLACEMENT 2025
                    </h3>
                    <p className="text-gray-700 mb-4">
                        The DISPLACEMENT Conference 2025 brings together scholars,
                        researchers, and practitioners from around the world to explore the
                        complex phenomenon of displacement in its various
                        forms—geographical, social, cultural, economic, and
                        psychological.
                    </p>
                    <p className="text-gray-700">
                        This collaborative effort between the University of Hyderabad,
                        Dartmouth College, and University College London aims to foster
                        interdisciplinary dialogue and develop innovative approaches to
                        understanding and addressing displacement in contemporary
                        society.
                    </p>
                </div>
            </div>
        </section>
    );
} 