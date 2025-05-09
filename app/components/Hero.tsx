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
            data-oid="iyoyhhv"
        >
            <div className="absolute inset-0 bg-black bg-opacity-50" data-oid="6_uxn7p"></div>
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10"
                data-oid="vx5433q"
            >
                <div className="text-center" data-oid="b8kr_ri">
                    <div className="flex justify-center mb-6" data-oid="12e-yy-"></div>
                    <h1
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                        data-oid="an0n15k"
                    >
                        Displacement Conference 2025
                    </h1>
                    <div className="mb-8" data-oid=".883x6i">
                        <p
                            className="text-xl text-white max-w-3xl mx-auto mb-10"
                            data-oid="xz:p53a"
                        >
                            Department of English, University of Hyderabad
                            <br data-oid="jw6kakh" />
                            in collaboration with Dartmouth College and UCL
                        </p>
                    </div>
                    <p className="text-xl text-white max-w-3xl mx-auto mb-10" data-oid="ri-vck.">
                        An international conference exploring the multifaceted dimensions of
                        displacement.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row justify-center gap-4"
                        data-oid="d1d4605"
                    >
                        <button
                            onClick={() => scrollToSection('registration')}
                            className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                            data-oid="_dppi5b"
                        >
                            Register Now
                        </button>
                        <a
                            href="https://uoh-bucket-images.s3.us-east-1.amazonaws.com/docs/Displacement+Schedule.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white text-red-600 rounded-md hover:bg-gray-100 transition-colors shadow-md flex items-center justify-center"
                            data-oid="owemmmz"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="czwdkh8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    data-oid="n.o50da"
                                />
                            </svg>
                            View Schedule
                        </a>
                    </div>
                    <div
                        className="mt-12 p-4 bg-white bg-opacity-90 rounded-lg shadow-md inline-block"
                        data-oid="9taikzc"
                    >
                        <p className="text-gray-700 font-medium" data-oid="l:-ct9l">
                            Conference Dates: April 23-25, 2025
                        </p>
                        <p className="text-gray-700 font-medium" data-oid="wc12646">
                            Location: University of Hyderabad, India
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
