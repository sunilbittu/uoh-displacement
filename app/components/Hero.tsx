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
                backgroundImage: 'url("/images/Displacement _20250307_121647_0000.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
                <div className="text-center">
                    <div className="flex justify-center mb-6"></div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        DISPLACEMENT Conference 2025
                    </h1>
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        <span className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm font-medium">
                            University of Hyderabad
                        </span>
                        <span className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm font-medium">
                            Dartmouth College
                        </span>
                        <span className="px-3 py-1 bg-yellow-100 text-red-800 rounded-full text-sm font-medium">
                            UCL
                        </span>
                    </div>
                    <p className="text-xl text-white max-w-3xl mx-auto mb-10">
                        An international conference exploring the multifaceted dimensions of
                        displacement in contemporary society.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => scrollToSection('registration')}
                            className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                        >
                            Register Now
                        </button>
                        <button
                            onClick={() => scrollToSection('call-for-papers')}
                            className="px-8 py-3 bg-transparent border-2 border-yellow-200 text-white rounded-md hover:bg-yellow-400 hover:text-black transition-colors shadow-md"
                        >
                            Submit Paper
                        </button>
                    </div>
                    <div className="mt-12 p-4 bg-white bg-opacity-90 rounded-lg shadow-md inline-block">
                        <p className="text-gray-700 font-medium">
                            Conference Dates: March 15-17, 2025
                        </p>
                        <p className="text-gray-700 font-medium">
                            Location: University of Hyderabad, India
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
} 