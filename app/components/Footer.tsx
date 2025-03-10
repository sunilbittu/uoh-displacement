'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SectionId } from '../types';

interface FooterProps {
    scrollToSection: (sectionId: SectionId) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
    return (
        <footer className="bg-black text-white py-12" data-oid="gzg2jua">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="fy33vab">
                <div className="grid md:grid-cols-3 gap-8" data-oid="ren1aq.">
                    <div data-oid="qe6vk-_">
                        <Link href="/" className="flex items-center mb-4" data-oid="mcu.au3">
                            <Image
                                src="/images/logo.png"
                                alt="Conference Logo"
                                width={150}
                                height={48}
                                className="h-12 mr-3"
                                data-oid="mrw46l5"
                            />

                            <h3 className="text-xl font-semibold" data-oid=":m5-3t-">
                                Displacement 2025
                            </h3>
                        </Link>
                        <p className="text-indigo-200" data-oid="uq1kfz1">
                            Funded by Institute of Eminence University of Hyderabad
                        </p>
                        <p className="text-yellow-200 mb-2" data-oid=".bfg8z_">
                            An international conference exploring the multifaceted dimensions of
                            displacement in contemporary society.
                        </p>
                    </div>
                    <div data-oid="yw75nnj">
                        <h3 className="text-lg font-semibold mb-4" data-oid="xfq3j6m">
                            Quick Links
                        </h3>
                        <ul className="space-y-2" data-oid="azsxxo2">
                            {['home', 'about', 'registration', 'people'].map((section) => (
                                <li key={section} data-oid="ha1ejn:">
                                    <button
                                        onClick={() => scrollToSection(section as SectionId)}
                                        className={`text-${section === 'home' ? 'yellow' : 'indigo'}-200 hover:text-white`}
                                        data-oid="egti55d"
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
                    <div data-oid=".j7k5dn">
                        <h3 className="text-lg font-semibold mb-4" data-oid=":9h2eo:">
                            People
                        </h3>
                        <ul className="space-y-2" data-oid="am8iycd">
                            <li className="flex items-start" data-oid="ig89yeb">
                                <svg
                                    className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="cra19ag"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        data-oid="y:kr:.5"
                                    />
                                </svg>
                                <a
                                    href="mailto:displacement2025@uohyd.ac.in"
                                    className="text-indigo-200 hover:text-white"
                                    data-oid="7guaq:g"
                                >
                                    displacement2025@uohyd.ac.in
                                </a>
                            </li>
                            <li className="flex items-start" data-oid="r868trn">
                                <svg
                                    className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="8ppyyh."
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        data-oid="p_x-c38"
                                    />
                                </svg>
                                <span className="text-yellow-200" data-oid="gde0:_g">
                                    +91-9488016612
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="mt-12 pt-8 border-t border-yellow-800 text-center text-yellow-300 text-sm"
                    data-oid="2rz9w2m"
                >
                    <p data-oid="c0j9ezi">© 2025 Displacement Conference. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
