'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionId } from '../types';
interface NavigationProps {
    activeSection: SectionId;
    scrollToSection: (sectionId: SectionId) => void;
}
export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <nav className="fixed w-full bg-white shadow-md z-50" data-oid="wthnu9x">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="ix7.nzl">
                <div className="flex justify-between h-16" data-oid="sc900c8">
                    <div className="flex items-center" data-oid="hi15z3_">
                        <Link href="/" className="flex items-center space-x-3" data-oid="sapy9.0">
                            <div className="relative h-24 w-16" data-oid="v:hatzw">
                                <Image
                                    src="/images/logo-uoh.png"
                                    alt="University of Hyderabad Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    data-oid="knicl56"
                                />
                            </div>
                            <div className="text-xl font-bold text-red-700" data-oid="sox6du1">
                                Displacement
                            </div>
                            <div className="relative h-24 w-16" data-oid="yt6w4i1">
                                <Image
                                    src="/images/logo-ioe.png"
                                    alt="IOE Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    data-oid="2i0:3d3"
                                />
                            </div>
                        </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4" data-oid="xwhld.6">
                        {[
                            'home',
                            'about',
                            'registration',
                            'people',
                            'participants',
                            'media',
                            'updates',
                            'call-for-papers',
                        ].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section as SectionId)}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === section ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="87j43we"
                            >
                                {section
                                    .split('-')
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(' ')}
                            </button>
                        ))}

                        {/* D-Logo */}
                        <button
                            onClick={() => scrollToSection('d-logo' as SectionId)}
                            className={`p-1 rounded-md ${activeSection === 'd-logo' ? 'bg-yellow-50' : 'hover:bg-yellow-100'}`}
                            data-oid="dnr7iz_"
                        >
                            <div className="relative h-8 w-8" data-oid="_uhc..4">
                                <Image
                                    src="/images/d-logo.jpg"
                                    alt="D Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    data-oid="tb-qcii"
                                />
                            </div>
                        </button>

                        {/* U-Logo */}
                        <button
                            onClick={() => scrollToSection('u-logo' as SectionId)}
                            className={`p-1 rounded-md ${activeSection === 'u-logo' ? 'bg-yellow-50' : 'hover:bg-yellow-100'}`}
                            data-oid="7z_zy3-"
                        >
                            <div className="relative h-8 w-8" data-oid="f8ifwwb">
                                <Image
                                    src="/images/u-logo.jpg"
                                    alt="U Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    data-oid="74js_3t"
                                />
                            </div>
                        </button>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center" data-oid="sqfd1qr">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600 hover:bg-yellow-100 focus:outline-none"
                            data-oid="cic8ho."
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="21w1_40"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        data-oid="2dikun3"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="crqpe16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg" data-oid="88_88i.">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="d1-jp5q">
                        {[
                            'home',
                            'about',
                            'registration',
                            'people',
                            'participants',
                            'media',
                            'updates',
                            'call-for-papers',
                        ].map((section) => (
                            <button
                                key={section}
                                onClick={() => {
                                    scrollToSection(section as SectionId);
                                    setMobileMenuOpen(false);
                                }}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeSection === section ? 'text-red-600 bg-yellow-50' : 'text-gray-800 hover:bg-yellow-100'}`}
                                data-oid="7l8950i"
                            >
                                {section
                                    .split('-')
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(' ')}
                            </button>
                        ))}

                        <div className="flex space-x-4 px-3 py-2" data-oid="k:v473:">
                            {/* D-Logo */}
                            <button
                                onClick={() => {
                                    scrollToSection('d-logo' as SectionId);
                                    setMobileMenuOpen(false);
                                }}
                                className={`p-1 rounded-md ${activeSection === 'd-logo' ? 'bg-yellow-50' : 'hover:bg-yellow-100'}`}
                                data-oid=".v.9zeu"
                            >
                                <div className="relative h-8 w-8" data-oid="x42bfsy">
                                    <Image
                                        src="/images/d-logo.jpg"
                                        alt="D Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        data-oid="3fbzzy0"
                                    />
                                </div>
                            </button>

                            {/* U-Logo */}
                            <button
                                onClick={() => {
                                    scrollToSection('u-logo' as SectionId);
                                    setMobileMenuOpen(false);
                                }}
                                className={`p-1 rounded-md ${activeSection === 'u-logo' ? 'bg-yellow-50' : 'hover:bg-yellow-100'}`}
                                data-oid="m2dazgd"
                            >
                                <div className="relative h-8 w-8" data-oid="oc3-7ph">
                                    <Image
                                        src="/images/u-logo.jpg"
                                        alt="U Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        data-oid="f17p4hj"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
