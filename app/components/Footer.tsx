'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SectionId } from '../types';

interface FooterProps {
    scrollToSection: (sectionId: SectionId) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
    return (
        <footer className="bg-black text-white py-12" data-oid="l.h9cl.">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="lfi..fw">
                <div className="grid md:grid-cols-3 gap-8" data-oid="ggiyq::">
                    <div data-oid="vcrzmcl">
                        <Link href="/" className="flex items-center mb-4" data-oid="n5:a9b8">
                            <Image
                                src="/images/logo.png"
                                alt="Conference Logo"
                                width={150}
                                height={48}
                                className="h-12 mr-3"
                                data-oid="f7f_i7k"
                            />

                            <h3 className="text-xl font-semibold" data-oid="exl7jy9">
                                Displacement 2025
                            </h3>
                        </Link>
                        <p className="text-indigo-200" data-oid=":jtlcnd">
                            Funded by Institute of Eminence University of Hyderabad
                        </p>
                        <p className="text-yellow-200 mb-2" data-oid="eqs.piy">
                            An international conference exploring the multifaceted dimensions of
                            displacement in contemporary society.
                        </p>
                    </div>
                    <div data-oid="zx.2d.g">
                        <h3 className="text-lg font-semibold mb-4" data-oid="k-gh8ws">
                            Quick Links
                        </h3>
                        <ul className="space-y-2" data-oid="3hm0q19">
                            {['home', 'about', 'registration', 'people'].map((section) => (
                                <li key={section} data-oid="x-l3d2l">
                                    <button
                                        onClick={() => scrollToSection(section as SectionId)}
                                        className={`text-${section === 'home' ? 'yellow' : 'indigo'}-200 hover:text-white`}
                                        data-oid="mmit:a9"
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
                    <div data-oid="1ulqw2b">
                        <h3 className="text-lg font-semibold mb-4" data-oid="-pts-pu">
                            People
                        </h3>
                        <ul className="space-y-2" data-oid="m-yl22o">
                            <li className="flex items-start" data-oid="g6fyf_h">
                                <svg
                                    className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid=":uauods"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        data-oid="_w8qu2j"
                                    />
                                </svg>
                                <a
                                    href="mailto:displacement2025@uohyd.ac.in"
                                    className="text-indigo-200 hover:text-white"
                                    data-oid="73oyalg"
                                >
                                    displacement2025@uohyd.ac.in
                                </a>
                            </li>
                            <li className="flex items-start" data-oid="0kwwfx8">
                                <svg
                                    className="h-5 w-5 text-indigo-300 mr-2 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="6f1coi_"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        data-oid="p.7dkef"
                                    />
                                </svg>
                                <span className="text-yellow-200" data-oid="ir7i1x_">
                                    +91-9488016612
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className="mt-12 pt-8 border-t border-yellow-800 text-center text-yellow-300 text-sm"
                    data-oid="axnc9p5"
                >
                    <p data-oid="u:7vid1">© 2025 Displacement Conference. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
