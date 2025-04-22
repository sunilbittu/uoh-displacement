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
        <nav className="fixed w-full bg-white shadow-md z-50" data-oid="qa_hbx4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="guc9kq5">
                <div className="flex justify-between h-16" data-oid="9d_rda2">
                    <div className="flex items-center" data-oid="8j_3bcp">
                        <Link href="/" className="flex items-center space-x-3" data-oid="pzomxky">
                            <div className="relative h-24 w-16" data-oid="96le9tj">
                                <Image
                                    src="/images/logo-uoh.png"
                                    alt="University of Hyderabad Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    data-oid="5:9.c59"
                                />
                            </div>
                            <div className="text-xl font-bold text-red-700" data-oid="h-qzmuv">
                                Displacement
                            </div>
                            <div className="relative h-24 w-16" data-oid="wbpxpfd">
                                <Image
                                    src="/images/logo-ioe.png"
                                    alt="IOE Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    data-oid="skbjgnp"
                                />
                            </div>
                        </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4" data-oid="ko_npew">
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
                                data-oid="r855hos"
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
                            data-oid="0_rznle"
                        >
                            <div className="relative h-8 w-8" data-oid="-06:zjo">
                                <Image
                                    src="/images/d-logo.jpg"
                                    alt="D Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    data-oid="p7qoxoy"
                                />
                            </div>
                        </button>

                        {/* U-Logo */}
                        <button
                            onClick={() => scrollToSection('u-logo' as SectionId)}
                            className={`p-1 rounded-md ${activeSection === 'u-logo' ? 'bg-yellow-50' : 'hover:bg-yellow-100'}`}
                            data-oid="9z6.wex"
                        >
                            <div className="relative h-8 w-8" data-oid="jztrwo8">
                                <Image
                                    src="/images/u-logo.jpg"
                                    alt="U Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    data-oid="cd6tvp5"
                                />
                            </div>
                        </button>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center" data-oid="0.r:j-h">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600 hover:bg-yellow-100 focus:outline-none"
                            data-oid="gycg60z"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="rynl.8i"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        data-oid="g3st73r"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="ri:0_u-"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg" data-oid="s.-1ikc">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="ot0615-">
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
                                data-oid="fr9.ve9"
                            >
                                {section
                                    .split('-')
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(' ')}
                            </button>
                        ))}

                        <div className="flex space-x-4 px-3 py-2" data-oid=".3zvj32">
                            {/* D-Logo */}
                            <button
                                onClick={() => {
                                    scrollToSection('d-logo' as SectionId);
                                    setMobileMenuOpen(false);
                                }}
                                className={`p-1 rounded-md ${activeSection === 'd-logo' ? 'bg-yellow-50' : 'hover:bg-yellow-100'}`}
                                data-oid="vy:kth0"
                            >
                                <div className="relative h-8 w-8" data-oid="acc.w4r">
                                    <Image
                                        src="/images/d-logo.jpg"
                                        alt="D Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        data-oid=":2m2kzx"
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
                                data-oid="s.w-f0s"
                            >
                                <div className="relative h-8 w-8" data-oid="x.i3bja">
                                    <Image
                                        src="/images/u-logo.jpg"
                                        alt="U Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        data-oid="km15vjp"
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
