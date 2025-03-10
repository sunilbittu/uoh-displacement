'use client';
import { useState } from 'react';

export default function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        paperTitle: '',
        participationMode: '',
        receipt: null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({
                ...prev,
                receipt: e.target.files[0],
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate file upload
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setSubmitStatus({
                success: true,
                message: 'Registration successful! Your receipt has been uploaded.',
            });
            setShowMessage(true);
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="registration" className="py-20 bg-yellow-50" data-oid="63cn0fj">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="w.y15-c">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="6reutby"
                >
                    Registration
                </h2>

                <div
                    className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto mb-8"
                    data-oid="09lgkn1"
                >
                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="u-qjn2w">
                        <div data-oid="hafeyql">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="bd6qxe0"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                                data-oid="ter8gfj"
                            />
                        </div>

                        <div data-oid="1u9g48c">
                            <label
                                htmlFor="designation"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="iqk-mnf"
                            >
                                Designation/Affiliation
                            </label>
                            <input
                                type="text"
                                id="designation"
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                                data-oid="07ecemf"
                            />
                        </div>

                        <div data-oid="23kee7p">
                            <label
                                htmlFor="paperTitle"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="sid982h"
                            >
                                Title of the Paper
                            </label>
                            <input
                                type="text"
                                id="paperTitle"
                                name="paperTitle"
                                value={formData.paperTitle}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                                data-oid="y9r7h.8"
                            />
                        </div>

                        <div data-oid="42n6cf:">
                            <label
                                htmlFor="participationMode"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="f7hscgu"
                            >
                                Mode of Participation
                            </label>
                            <select
                                id="participationMode"
                                name="participationMode"
                                value={formData.participationMode}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                                data-oid="p2:rnar"
                            >
                                <option value="" data-oid="4xq3m.e">
                                    Select mode
                                </option>
                                <option value="online" data-oid="u.:xqo-">
                                    Online
                                </option>
                                <option value="inPerson" data-oid="q9lzuga">
                                    In Person
                                </option>
                            </select>
                        </div>

                        <div data-oid="j8nmw5h">
                            <label
                                htmlFor="receipt"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="gqikssh"
                            >
                                Upload Receipt
                            </label>
                            <input
                                type="file"
                                id="receipt"
                                name="receipt"
                                onChange={handleFileChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                accept=".pdf,.jpg,.jpeg,.png"
                                required
                                data-oid="mshxsh7"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="47.6_zl">
                                Accepted formats: PDF, JPG, JPEG, PNG
                            </p>
                        </div>

                        <div className="text-center" data-oid="hvkn9:e">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                data-oid="u1.1xf7"
                            >
                                {isSubmitting ? 'Processing...' : 'Register Now'}
                            </button>
                        </div>
                    </form>

                    {showMessage && (
                        <div
                            className={`mt-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
                            data-oid="kgt27m1"
                        >
                            <div className="flex" data-oid="srbm7ma">
                                <div className="flex-shrink-0" data-oid="c.c1lt.">
                                    {submitStatus.success ? (
                                        <svg
                                            className="h-5 w-5 text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="z-3zm0m"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                                data-oid="azk5gs6"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="h-5 w-5 text-red-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="yx2to8p"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                clipRule="evenodd"
                                                data-oid="pjb8csn"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <div className="ml-3" data-oid="o9qqfwf">
                                    <p className="text-sm font-medium" data-oid="c:7wt:q">
                                        {submitStatus.message}
                                    </p>
                                </div>
                                <div className="ml-auto pl-3" data-oid="tnfyu.p">
                                    <div className="-mx-1.5 -my-1.5" data-oid="yuqw.2_">
                                        <button
                                            type="button"
                                            onClick={() => setShowMessage(false)}
                                            className={`inline-flex rounded-md p-1.5 ${submitStatus.success ? 'text-green-500 hover:bg-green-100' : 'text-red-500 hover:bg-red-100'}`}
                                            data-oid="1p1felq"
                                        >
                                            <span className="sr-only" data-oid="r40lvkt">
                                                Dismiss
                                            </span>
                                            <svg
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                data-oid="a-v5hme"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                    data-oid="nkrlqyg"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
