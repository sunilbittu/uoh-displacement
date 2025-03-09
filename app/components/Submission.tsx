'use client';
import Image from 'next/image';

export default function Submission() {
    return (
        <section id="submission" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
                    Submission Guidelines
                </h2>
                <div className="flex justify-center mb-10">
                    <div className="grid grid-cols-2 gap-4 max-w-2xl">
                        <Image
                            src="/images/Displacement _20250307_121722_0000.png"
                            alt="Submission Process"
                            className="rounded-lg shadow-md"
                            width={600}
                            height={400}
                        />
                        <Image
                            src="/images/Displacement _20250307_121722_0001.png"
                            alt="Submission Process"
                            className="rounded-lg shadow-md"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">
                            Abstract Submission
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>Abstracts should be 300-500 words in length.</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>Include 5-6 keywords related to your research.</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>
                                    Clearly state the research question, methodology, and
                                    preliminary findings.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>
                                    Submit in PDF format through the conference submission
                                    portal.
                                </span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-sm">
                                Submit Abstract
                            </button>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">
                            Full Paper Requirements
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>
                                    Papers should be 6,000-8,000 words, including
                                    references.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>
                                    Use Times New Roman, 12-point font, double-spaced.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="h-5 w-5 text-indigo-500 mr-2 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>Follow APA 7th edition citation style.</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-800 font-medium"
                            >
                                Download Paper Template →
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">
                        Review Process
                    </h3>
                    <p className="text-gray-700 mb-4">
                        All submissions will undergo a double-blind peer review process.
                        Each abstract will be reviewed by at least two members of the
                        scientific committee. Evaluation criteria include:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                        <li>Relevance to the conference theme</li>
                        <li>Originality and innovation</li>
                        <li>Theoretical foundation</li>
                        <li>Methodological rigor</li>
                        <li>Clarity of presentation</li>
                        <li>Potential contribution to the field</li>
                    </ul>
                    <p className="text-gray-700">
                        Authors of accepted abstracts will be invited to submit full papers,
                        which will also undergo peer review before final acceptance.
                    </p>
                </div>
            </div>
        </section>
    );
} 