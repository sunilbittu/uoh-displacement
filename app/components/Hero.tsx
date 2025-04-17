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
            data-oid=":5.2u27"
        >
            <div className="absolute inset-0 bg-black bg-opacity-50" data-oid="n1d.:yw"></div>
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10"
                data-oid="5pq-ann"
            >
                <div className="text-center" data-oid="04:8rks">
                    <div className="flex justify-center mb-6" data-oid="7dtgt4p"></div>
                    <h1
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                        data-oid="mcc11jk"
                    >
                        Displacement Conference 2025
                    </h1>
                    <div className="mb-8" data-oid="tl8bwve">
                        <p
                            className="text-xl text-white max-w-3xl mx-auto mb-10"
                            data-oid=":hx-7oo"
                        >
                            Department of English, University of Hyderabad
                            <br data-oid="3smv_uk" />
                            in collaboration with Dartmouth College and UCL
                        </p>
                    </div>
                    <p className="text-xl text-white max-w-3xl mx-auto mb-10" data-oid="p1y0dj1">
                        An international conference exploring the multifaceted dimensions of
                        displacement.
                    </p>
                    <div className="flex justify-center" data-oid="etp62us">
                        <button
                            onClick={() => scrollToSection('registration')}
                            className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                            data-oid="ew8m:gl"
                        >
                            Register Now
                        </button>
                    </div>
                    <div
                        className="mt-12 p-4 bg-white bg-opacity-90 rounded-lg shadow-md inline-block"
                        data-oid="6-5mtjn"
                    >
                        <p className="text-gray-700 font-medium" data-oid="1d:ov-q">
                            Conference Dates: April 23-25, 2025
                        </p>
                        <p className="text-gray-700 font-medium" data-oid=".gz:7zn">
                            Location: University of Hyderabad, India
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
