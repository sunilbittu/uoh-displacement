'use client';

export default function People() {
    return (
        <section id="people" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
                    People
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">
                            Organizing Committee
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900">Dr. XYZ</h4>
                                <p className="text-gray-600">University of Hyderabad</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900">Dr. ABC</h4>
                                <p className="text-gray-600">Dartmouth College</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900">Dr. DEF</h4>
                                <p className="text-gray-600">University College London</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-red-800 mb-4">
                            Contact Information
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900">Email</h4>
                                <p className="text-gray-600">displacement2025@uohyd.ac.in</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900">Phone</h4>
                                <p className="text-gray-600">+91-9488016612</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900">Address</h4>
                                <p className="text-gray-600">
                                    Department of English<br />
                                    University of Hyderabad<br />
                                    Prof. C.R. Rao Road<br />
                                    Gachibowli<br />
                                    Hyderabad - 500046<br />
                                    Telangana, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 