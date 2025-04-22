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
        <nav className="fixed w-full bg-white shadow-md z-50" data-oid="bkctw1h">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="b6e6hu2">
                <div className="flex justify-between h-16" data-oid="s.m_8-m">
                    <div className="flex items-center" data-oid=":dpw97q">
                        <Link href="/" className="flex items-center space-x-3" data-oid="zs768_g">
                            <div className="relative h-24 w-16" data-oid="x08szyz">
                                <Image
                                    src="/images/logo-uoh.png"
                                    alt="University of Hyderabad Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    data-oid="k71br99"
                                />
                            </div>
                            <div className="text-xl font-bold text-red-700" data-oid="juzyrnt">
                                Displacement
                            </div>
                            <div className="relative h-24 w-16" data-oid="8:e23cw">
                                <Image
                                    src="/images/logo-ioe.png"
                                    alt="IOE Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                    data-oid="88caje5"
                                />
                            </div>
                        </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4" data-oid="j6isgtm">
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
                                data-oid="wl86rxi"
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
                            data-oid="lt_fkk5"
                        >
                            <div className="relative h-8 w-8" data-oid="kxi.77m">
                                <Image
                                    src="/images/d-logo.jpg"
                                    alt="D Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    data-oid="noon_j8"
                                />
                            </div>
                        </button>

                        {/* U-Logo */}
                        <button
                            onClick={() => scrollToSection('u-logo' as SectionId)}
                            className={`p-1 rounded-md ${activeSection === 'u-logo' ? 'bg-yellow-50' : 'hover:bg-yellow-100'}`}
                            data-oid="v3n94:l"
                        >
                            <div className="relative h-8 w-8" data-oid="2au-ljr">
                                <Image
                                    src="/images/u-logo.jpg"
                                    alt="U Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    data-oid="0dpo:_i"
                                />
                            </div>
                        </button>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center" data-oid="6f72u3n">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-600 hover:bg-yellow-100 focus:outline-none"
                            data-oid="s:h2dtl"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="0mr_l7d"
                            >
                                {mobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                        data-oid="jlqu_r7"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="63gbqs-"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg" data-oid=":jix7vs">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" data-oid="jgsnzk1">
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
                                data-oid="jlcy8.w"
                            >
                                {section
                                    .split('-')
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(' ')}
                            </button>
                        ))}

                        <div className="flex space-x-4 px-3 py-2" data-oid="wwctl--">
                            {/* D-Logo */}
                            <button
                                onClick={() => {
                                    scrollToSection('d-logo' as SectionId);
                                    setMobileMenuOpen(false);
                                }}
                                className={`p-1 rounded-md ${activeSection === 'd-logo' ? 'bg-yellow-50' : 'hover:bg-yellow-100'}`}
                                data-oid="odk-75y"
                            >
                                <div className="relative h-8 w-8" data-oid="5j.i88b">
                                    <Image
                                        src="/images/d-logo.jpg"
                                        alt="D Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        data-oid="3ty1.pk"
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
                                data-oid="ygrfjre"
                            >
                                <div className="relative h-8 w-8" data-oid="2wurcqj">
                                    <Image
                                        src="/images/u-logo.jpg"
                                        alt="U Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        data-oid="n1p1cl2"
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
