'use client';

export default function Registration() {
    return (
        <section id="registration" className="py-20 bg-yellow-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
                    Registration
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">
                            Early Bird Registration (Until February 1, 2025)
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex justify-between items-center">
                                <span>Faculty/Professionals</span>
                                <span className="font-semibold">₹8,000</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>Students</span>
                                <span className="font-semibold">₹4,000</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>International Delegates</span>
                                <span className="font-semibold">$300</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">
                            Regular Registration
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex justify-between items-center">
                                <span>Faculty/Professionals</span>
                                <span className="font-semibold">₹10,000</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>Students</span>
                                <span className="font-semibold">₹5,000</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>International Delegates</span>
                                <span className="font-semibold">$400</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">
                        Registration Includes
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                        <li className="flex items-center text-gray-700">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Conference Kit
                        </li>
                        <li className="flex items-center text-gray-700">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Access to All Sessions
                        </li>
                        <li className="flex items-center text-gray-700">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Lunch & Refreshments
                        </li>
                        <li className="flex items-center text-gray-700">
                            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Conference Dinner
                        </li>
                    </ul>
                </div>

                <div className="text-center">
                    <button className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md">
                        Register Now
                    </button>
                </div>
            </div>
        </section>
    );
} 