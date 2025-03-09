'use client';
import Image from 'next/image';
import { SectionId } from '../types';

interface CallForPapersProps {
    scrollToSection: (sectionId: SectionId) => void;
}

export default function CallForPapers({ scrollToSection }: CallForPapersProps) {
    return (
        <section id="call-for-papers" className="py-20 bg-yellow-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
                    Call for Papers
                </h2>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="mb-8 flex justify-center">
                        <Image
                            src="/images/Global insecurity and refugee crisis linked to climate change.jpeg"
                            alt="Displacement Theme"
                            width={1000}
                            height={400}
                            className="rounded-lg shadow-md max-h-80 object-cover"
                        />
                    </div>
                    <p className="text-gray-700 mb-6">
                        We invite submissions that explore the theme of displacement from
                        various disciplinary perspectives, including but not limited to:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <h3 className="text-lg font-semibold text-red-800 mb-3">
                                Thematic Areas
                            </h3>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Forced migration and refugee studies</li>
                                <li>Climate change and environmental displacement</li>
                                <li>Digital displacement and virtual communities</li>
                                <li>Economic displacement and labor mobility</li>
                                <li>Cultural displacement and identity formation</li>
                                <li>Displacement in literature and arts</li>
                                <li>Historical perspectives on displacement</li>
                                <li>Urban displacement and spatial justice</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-red-800 mb-3">
                                Key Dates
                            </h3>
                            <ul className="text-gray-700 space-y-3">
                                <li className="flex items-start">
                                    <span className="font-medium text-red-600 mr-2">
                                        August 15, 2024:
                                    </span>
                                    <span>Abstract submission deadline</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-medium text-indigo-600 mr-2">
                                        October 1, 2024:
                                    </span>
                                    <span>Notification of acceptance</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-medium text-indigo-600 mr-2">
                                        December 15, 2024:
                                    </span>
                                    <span>Full paper submission deadline</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-medium text-indigo-600 mr-2">
                                        February 1, 2025:
                                    </span>
                                    <span>Early registration deadline</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-medium text-indigo-600 mr-2">
                                        March 15-17, 2025:
                                    </span>
                                    <span>Conference dates</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-md mb-6">
                        <h3 className="text-lg font-semibold text-red-800 mb-2">
                            Special Sessions
                        </h3>
                        <p className="text-gray-700">
                            The conference will feature special sessions on "Digital
                            Displacement in the Age of AI" and "Climate Refugees: Policy
                            Challenges and Responses." Submissions specifically addressing
                            these themes are encouraged.
                        </p>
                    </div>
                    <button
                        onClick={() => scrollToSection('submission')}
                        className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-sm"
                    >
                        View Submission Guidelines
                    </button>
                </div>
            </div>
        </section>
    );
} 