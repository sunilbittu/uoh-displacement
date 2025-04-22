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
        <nav className="fixed w-full bg-white shadow-md z-50" data-oid="0ilivyf">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="if52k3t">
                <div className="flex justify-between h-16" data-oid="-j4-i6b">
                    <div className="flex items-center" data-oid="lvantxa">
                        <Link href="/" className="flex items-center space-x-3" data-oid="nh70ypr">
                            <div className="relative h-24 w-16" data-oid="1n0a_o3">
                                <Image
                                    src="/images/logo-uoh.png"
                                    alt="University of Hyderabad Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    data-oid="7v0ikaf"
                                />
                            </div>
                            <div className="text-xl font-bold text-red-700" data-oid="p62q3-0">
                                Displacement
                            </div>
                            <div className="relative h-24 w-16" data-oid="::f:ec5">
                                <Image
                                    src="/images/logo-ioe.png"
                                    alt="IOE Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    data-oid="si:2zgl"
                                />
                            </div>
                        </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4" data-oid="_nia0vp">
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
                                data-oid="q.-_dc8"
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
                            data-oid=".3h3v:w"
                        >
                            <div className="relative h-8 w-8" data-oid="gedeb6j">
                                <Image
                                    src="/images/d-logo.jpg"
                                    alt="D Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    data-oid="_wz2cjj"
                                />
                            </div>
                        </button>

                        {/* U-Logo */}
                        <button
                            onClick={() => scrollToSection('u-logo' as SectionId)}
                            className={`p-1 rounded-md ${activeSection === 'u-logo' ? 'bg-yellow-50' : 'hover:bg-yellow-100'}`}
                            data-oid="i:uxsz:"
                        >
                            <div className="relative h-8 w-8" data-oid="jtbj24k">
                                <Image
                                    src="/images/u-logo.jpg"
                                    alt="U Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    data-oid="t.czjju"
                                />
                            </div>
                        </button>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center" data-oid=":vr9gdg">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600 hover:bg-yellow-100 focus:outline-none"
                            data-oid="01yet6m"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="-nty2v7"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        data-oid="negweuu"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="qw23cjp"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg" data-oid="grdckqi">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="--4s9rm">
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
                                data-oid=":pi.67r"
                            >
                                {section
                                    .split('-')
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(' ')}
                            </button>
                        ))}

                        <div className="flex space-x-4 px-3 py-2" data-oid="q6xb5cq">
                            {/* D-Logo */}
                            <button
                                onClick={() => {
                                    scrollToSection('d-logo' as SectionId);
                                    setMobileMenuOpen(false);
                                }}
                                className={`p-1 rounded-md ${activeSection === 'd-logo' ? 'bg-yellow-50' : 'hover:bg-yellow-100'}`}
                                data-oid="g2-1g3p"
                            >
                                <div className="relative h-8 w-8" data-oid="kokvo-b">
                                    <Image
                                        src="/images/d-logo.jpg"
                                        alt="D Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        data-oid="iwll17c"
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
                                data-oid="nbbxemb"
                            >
                                <div className="relative h-8 w-8" data-oid="lg:oio7">
                                    <Image
                                        src="/images/u-logo.jpg"
                                        alt="U Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        data-oid="6t_2hrp"
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
