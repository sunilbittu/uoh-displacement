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
            data-oid="7iv6xf8"
        >
            <div className="absolute inset-0 bg-black bg-opacity-50" data-oid="g9zgsma"></div>
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10"
                data-oid="qktrpnm"
            >
                <div className="text-center" data-oid="zyzcq_.">
                    <div className="flex justify-center mb-6" data-oid="z598vyy"></div>
                    <h1
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                        data-oid="-3k-ouz"
                    >
                        Displacement Conference 2025
                    </h1>
                    <div className="mb-8" data-oid="lul31-_">
                        <p
                            className="text-xl text-white max-w-3xl mx-auto mb-10"
                            data-oid="jw27all"
                        >
                            Department of English, University of Hyderabad
                            <br data-oid="98jc_.j" />
                            in collaboration with Dartmouth College and UCL
                        </p>
                    </div>
                    <p className="text-xl text-white max-w-3xl mx-auto mb-10" data-oid="1tef7to">
                        An international conference exploring the multifaceted dimensions of
                        displacement in contemporary society.
                    </p>
                    <div className="flex justify-center" data-oid="e80wqlo">
                        <button
                            onClick={() => scrollToSection('registration')}
                            className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                            data-oid="hjc:i:a"
                        >
                            Register Now
                        </button>
                    </div>
                    <div
                        className="mt-12 p-4 bg-white bg-opacity-90 rounded-lg shadow-md inline-block"
                        data-oid="f2qekct"
                    >
                        <p className="text-gray-700 font-medium" data-oid=".vxbudw">
                            Conference Dates: April 23-25, 2025
                        </p>
                        <p className="text-gray-700 font-medium" data-oid="h3htkls">
                            Location: University of Hyderabad, India
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
