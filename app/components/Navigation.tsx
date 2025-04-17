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
        <nav className="fixed w-full bg-white shadow-md z-50" data-oid="r3g-jtt">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="3.b2z:b">
                <div className="flex justify-between h-16" data-oid="wqk-rsr">
                    <div className="flex items-center" data-oid="0h:ovpp">
                        <Link href="/" className="flex items-center space-x-3" data-oid="hzfga9b">
                            <div className="relative h-24 w-16" data-oid="7-qsdoc">
                                <Image
                                    src="/images/logo-uoh.png"
                                    alt="University of Hyderabad Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    data-oid="f3jtjvd"
                                />
                            </div>
                            <div className="text-xl font-bold text-red-700" data-oid="s.68js1">
                                Displacement
                            </div>
                            <div className="relative h-24 w-16" data-oid="xc50oyk">
                                <Image
                                    src="/images/logo-ioe.png"
                                    alt="IOE Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    data-oid="ntp1w6w"
                                />
                            </div>
                        </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4" data-oid="s:p::fx">
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
                                data-oid="y2fgrgr"
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
                            data-oid="3r8xj4w"
                        >
                            <div className="relative h-8 w-8" data-oid="d0-a-75">
                                <Image
                                    src="/images/d-logo.jpg"
                                    alt="D Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    data-oid="kn36njj"
                                />
                            </div>
                        </button>

                        {/* U-Logo */}
                        <button
                            onClick={() => scrollToSection('u-logo' as SectionId)}
                            className={`p-1 rounded-md ${activeSection === 'u-logo' ? 'bg-yellow-50' : 'hover:bg-yellow-100'}`}
                            data-oid="9ctjwwv"
                        >
                            <div className="relative h-8 w-8" data-oid="y.a.ywm">
                                <Image
                                    src="/images/u-logo.jpg"
                                    alt="U Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    data-oid="j_lszg8"
                                />
                            </div>
                        </button>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center" data-oid="ntpx4.5">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600 hover:bg-yellow-100 focus:outline-none"
                            data-oid="j1l_4t9"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="6xffmbm"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        data-oid="6c9etsu"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="miw2mq2"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg" data-oid="reka-9t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="uzgsf_5">
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
                                data-oid="lmktp--"
                            >
                                {section
                                    .split('-')
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(' ')}
                            </button>
                        ))}

                        <div className="flex space-x-4 px-3 py-2" data-oid="hezbqp-">
                            {/* D-Logo */}
                            <button
                                onClick={() => {
                                    scrollToSection('d-logo' as SectionId);
                                    setMobileMenuOpen(false);
                                }}
                                className={`p-1 rounded-md ${activeSection === 'd-logo' ? 'bg-yellow-50' : 'hover:bg-yellow-100'}`}
                                data-oid="cr41_76"
                            >
                                <div className="relative h-8 w-8" data-oid="k0nyad0">
                                    <Image
                                        src="/images/d-logo.jpg"
                                        alt="D Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        data-oid="2refw5o"
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
                                data-oid="dzefnxp"
                            >
                                <div className="relative h-8 w-8" data-oid="7:.:kze">
                                    <Image
                                        src="/images/u-logo.jpg"
                                        alt="U Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        data-oid="7jvlzkb"
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
