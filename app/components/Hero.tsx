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
            data-oid="2bk3kcm"
        >
            <div className="absolute inset-0 bg-black bg-opacity-50" data-oid="mi1egcc"></div>
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10"
                data-oid="sh67mw7"
            >
                <div className="text-center" data-oid="l5.:3_r">
                    <div className="flex justify-center mb-6" data-oid="kpkxswh"></div>
                    <h1
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                        data-oid="j0gzk7g"
                    >
                        Displacement Conference 2025
                    </h1>
                    <div className="mb-8" data-oid="cpjn0jy">
                        <p
                            className="text-xl text-white max-w-3xl mx-auto mb-10"
                            data-oid="tq4swfr"
                        >
                            Department of English, University of Hyderabad
                            <br data-oid="b-m51_." />
                            in collaboration with Dartmouth College and UCL
                        </p>
                    </div>
                    <p className="text-xl text-white max-w-3xl mx-auto mb-10" data-oid="xnr.hft">
                        An international conference exploring the multifaceted dimensions of
                        displacement.
                    </p>
                    <div className="flex justify-center" data-oid="o-3wux:">
                        <button
                            onClick={() => scrollToSection('registration')}
                            className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                            data-oid="0k5n1cx"
                        >
                            Register Now
                        </button>
                    </div>
                    <div
                        className="mt-12 p-4 bg-white bg-opacity-90 rounded-lg shadow-md inline-block"
                        data-oid="r:jwg26"
                    >
                        <p className="text-gray-700 font-medium" data-oid="lsb2c18">
                            Conference Dates: April 23-25, 2025
                        </p>
                        <p className="text-gray-700 font-medium" data-oid="9oim2xt">
                            Location: University of Hyderabad, India
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
