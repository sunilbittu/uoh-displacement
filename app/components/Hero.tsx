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
            data-oid="c33badz"
        >
            <div className="absolute inset-0 bg-black bg-opacity-50" data-oid="rfbt1eu"></div>
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10"
                data-oid="s8cf_3b"
            >
                <div className="text-center" data-oid="rnp1dtp">
                    <div className="flex justify-center mb-6" data-oid="5t862t8"></div>
                    <h1
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                        data-oid="-2iv2hc"
                    >
                        Displacement Conference 2025
                    </h1>
                    <div className="mb-8" data-oid="ubm9u-l">
                        <p
                            className="text-xl text-white max-w-3xl mx-auto mb-10"
                            data-oid="noe1pyb"
                        >
                            Department of English, University of Hyderabad
                            <br data-oid="v_0t5sm" />
                            in collaboration with Dartmouth College and UCL
                        </p>
                    </div>
                    <p className="text-xl text-white max-w-3xl mx-auto mb-10" data-oid="rqiy_4:">
                        An international conference exploring the multifaceted dimensions of
                        displacement in contemporary society.
                    </p>
                    <div className="flex justify-center" data-oid="9bl9lcu">
                        <button
                            onClick={() => scrollToSection('registration')}
                            className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                            data-oid="_s03w4d"
                        >
                            Register Now
                        </button>
                    </div>
                    <div
                        className="mt-12 p-4 bg-white bg-opacity-90 rounded-lg shadow-md inline-block"
                        data-oid="n6c_9f8"
                    >
                        <p className="text-gray-700 font-medium" data-oid="zn2:qiz">
                            Conference Dates: April 23-25, 2025
                        </p>
                        <p className="text-gray-700 font-medium" data-oid="k7_44cj">
                            Location: University of Hyderabad, India
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
