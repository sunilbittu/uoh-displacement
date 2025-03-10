'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
type SectionId = 'home' | 'about' | 'registration' | 'people';
interface NavigationProps {
    activeSection: SectionId;
    scrollToSection: (sectionId: SectionId) => void;
}
export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <nav className="fixed w-full bg-white shadow-md z-50" data-oid="5n2zzgo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="h0zs0c9">
                <div className="flex justify-between h-16" data-oid="xrbjimq">
                    <div className="flex items-center" data-oid="x5.1rlt">
                        <Link href="/" className="flex items-center space-x-3" data-oid=".y8lty.">
                            <div className="relative h-24 w-16" data-oid="1gioohm">
                                <Image
                                    src="/images/logo-uoh.png"
                                    alt="University of Hyderabad Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    data-oid="kv2:rdq"
                                />
                            </div>
                            <div className="text-xl font-bold text-red-700" data-oid="8tydikf">
                                Displacement
                            </div>
                            <div className="relative h-24 w-16" data-oid="m0e.:ft">
                                <Image
                                    src="/images/logo-ioe.png"
                                    alt="IOE Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    data-oid="c9-2r.4"
                                />
                            </div>
                        </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4" data-oid="4ban-x.">
                        {['home', 'about', 'registration', 'people'].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section as SectionId)}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === section ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="r2rdh-q"
                            >
                                {section
                                    .split('-')
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(' ')}
                            </button>
                        ))}
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center" data-oid="6ffep4t">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600 hover:bg-yellow-100 focus:outline-none"
                            data-oid="oh67nl8"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="qhh-_yr"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        data-oid="qpq1_1_"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="6d9ixjy"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg" data-oid="4chv1ve">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="u6u08nd">
                        {['home', 'about', 'registration', 'people'].map((section) => (
                            <button
                                key={section}
                                onClick={() => {
                                    scrollToSection(section as SectionId);
                                    setMobileMenuOpen(false);
                                }}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === section ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="j.s3-0e"
                            >
                                {section
                                    .split('-')
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(' ')}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
