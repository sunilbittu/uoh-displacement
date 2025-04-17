'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SectionId } from '../types';

interface FooterProps {
    scrollToSection: (sectionId: SectionId) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
    return (
        <footer className="bg-black text-white py-12" data-oid="df713ol">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="glcjabg">
                <div className="grid md:grid-cols-3 gap-8" data-oid="myae27s">
                    <div data-oid="oxfsol6">
                        <div className="mb-4" data-oid="c266t-:">
                            <div className="flex items-center mb-2" data-oid="g906oav">
                                <Link href="/" className="flex items-center" data-oid="e5ao-oh">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Conference Logo"
                                        width={150}
                                        height={48}
                                        className="h-12 mr-3"
                                        data-oid="esre64m"
                                    />
                                </Link>
                                <div className="flex items-center space-x-3" data-oid="qehtd-i">
                                    {/* D-Logo */}
                                    <div className="relative h-10 w-10" data-oid="-yi7512">
                                        <Image
                                            src="/images/d-logo.jpg"
                                            alt="D Logo"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            data-oid="_vd34da"
                                        />
                                    </div>

                                    {/* U-Logo */}
                                    <div className="relative h-10 w-10" data-oid="ci5gknw">
                                        <Image
                                            src="/images/u-logo.jpg"
                                            alt="U Logo"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            data-oid="b:u:5is"
                                        />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold" data-oid="9c2k_vt">
                                Displacement 2025
                            </h3>
                        </div>
                        <p className="text-indigo-200" data-oid="7vnsee7">
                            Funded by Institute of Eminence University of Hyderabad
                        </p>
                        <p className="text-yellow-200 mb-2" data-oid="sfyj5xf">
                            An international conference exploring the multifaceted dimensions of
                            displacement in contemporary society.
                        </p>
                    </div>
                    <div data-oid="i88:rw5">
                        <h3 className="text-lg font-semibold mb-4" data-oid="hw:y.:3">
                            Quick Links
                        </h3>
                        <ul className="space-y-2" data-oid="4ikvier">
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
                                <li key={section} data-oid="r35j67q">
                                    <button
                                        onClick={() => scrollToSection(section as SectionId)}
                                        className={`text-${section === 'home' ? 'yellow' : 'indigo'}-200 hover:text-white`}
                                        data-oid="wk7.noz"
                                    >
                                        {section
                                            .split('-')
                                            .map(
                                                (word) =>
                                                    word.charAt(0).toUpperCase() + word.slice(1),
                                            )
                                            .join(' ')}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div data-oid="dmkp3g-">
                        <h3 className="text-lg font-semibold mb-4" data-oid="jgl8ig5">
                            People
                        </h3>
                        <ul className="space-y-2" data-oid="5k21i8k">
                            <li className="flex items-start" data-oid="put0ft5">
                                <svg
                                    className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="p9i9nzf"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        data-oid="wjsnew0"
                                    />
                                </svg>
                                <a
                                    href="mailto:displacement2025@uohyd.ac.in"
                                    className="text-indigo-200 hover:text-white"
                                    data-oid="_mi.m3x"
                                >
                                    displacement2025@uohyd.ac.in
                                </a>
                            </li>
                            <li className="flex items-start" data-oid="h726g2p">
                                <svg
                                    className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="9c3i5a7"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        data-oid="6deu-tg"
                                    />
                                </svg>
                                <span className="text-yellow-200" data-oid="9r8a.cz">
                                    +91-9488016612
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="mt-8 pt-8 border-t border-yellow-800 flex flex-col items-center"
                    data-oid="v2:v8:r"
                >
                    <div className="text-center text-yellow-300 text-sm" data-oid="gt0j8xm">
                        <p data-oid="p0kipza">
                            © 2025 Displacement Conference. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
