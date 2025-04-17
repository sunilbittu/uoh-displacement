'use client';
import Image from 'next/image';
import { SectionId } from '../types';

interface HeroProps {
    scrollToSection: (sectionId: SectionId) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center relative"
            style={{
                backgroundImage: 'url("/images/hero.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            data-oid="tv6ccky"
        >
            <div className="absolute inset-0 bg-black bg-opacity-50" data-oid="_y20oyg"></div>
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10"
                data-oid="lgrs:6x"
            >
                <div className="text-center" data-oid="31pdy9g">
                    <div className="flex justify-center mb-6" data-oid="_-n3.py"></div>
                    <h1
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                        data-oid=":oe2-h3"
                    >
                        Displacement Conference 2025
                    </h1>
                    <div className="mb-8" data-oid="x9jsp4e">
                        <p
                            className="text-xl text-white max-w-3xl mx-auto mb-10"
                            data-oid="9-s5yzy"
                        >
                            Department of English, University of Hyderabad
                            <br data-oid="z6.8.k6" />
                            in collaboration with Dartmouth College and UCL
                        </p>
                    </div>
                    <p className="text-xl text-white max-w-3xl mx-auto mb-10" data-oid="cpt0z6f">
                        An international conference exploring the multifaceted dimensions of
                        displacement.
                    </p>
                    <div className="flex justify-center" data-oid="agflfba">
                        <button
                            onClick={() => scrollToSection('registration')}
                            className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                            data-oid="l5:tvj8"
                        >
                            Register Now
                        </button>
                    </div>
                    <div
                        className="mt-12 p-4 bg-white bg-opacity-90 rounded-lg shadow-md inline-block"
                        data-oid="p6hk-fl"
                    >
                        <p className="text-gray-700 font-medium" data-oid="t.-38xd">
                            Conference Dates: April 23-25, 2025
                        </p>
                        <p className="text-gray-700 font-medium" data-oid="vprwgva">
                            Location: University of Hyderabad, India
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
