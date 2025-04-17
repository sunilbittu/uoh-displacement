'use client';
import { useState } from 'react';

export default function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        paperTitle: '',
        participationMode: '',
        email: '',
        receipt: null as File | null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

    // States for checking existing registration
    const [checkEmail, setCheckEmail] = useState('');
    const [isChecking, setIsChecking] = useState(false);
    const [registrationData, setRegistrationData] = useState<null | {
        name: string;
        email: string;
        receiptUrl: string;
    }>(null);
    const [checkError, setCheckError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setFormData((prev) => ({
                ...prev,
                receipt: files[0],
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Create FormData object for file upload
            const submitFormData = new FormData();
            submitFormData.append('name', formData.name);
            submitFormData.append('designation', formData.designation);
            submitFormData.append('paperTitle', formData.paperTitle);
            submitFormData.append('participationMode', formData.participationMode);
            submitFormData.append('email', formData.email);

            if (formData.receipt) {
                submitFormData.append('receipt', formData.receipt);
            }

            // Send data to API
            const response = await fetch('/api/register', {
                method: 'POST',
                body: submitFormData,
            });

            const result = await response.json();

            setSubmitStatus({
                success: result.success,
                message: result.message,
            });

            // Reset form if successful
            if (result.success) {
                setFormData({
                    name: '',
                    designation: '',
                    paperTitle: '',
                    participationMode: '',
                    email: '',
                    receipt: null,
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                success: false,
                message: 'An error occurred. Please try again.',
            });
        } finally {
            setShowMessage(true);
            setIsSubmitting(false);
        }
    };

    const handleCheckRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!checkEmail) {
            setCheckError('Please enter your email address');
            return;
        }

        setIsChecking(true);
        setCheckError('');
        setRegistrationData(null);

        try {
            const response = await fetch(
                `/api/check-registration?email=${encodeURIComponent(checkEmail)}`,
            );
            const data = await response.json();

            if (response.ok && data.success) {
                setRegistrationData(data.registration);
            } else {
                setCheckError(data.message || 'No registration found with this email');
            }
        } catch (error) {
            console.error('Error checking registration:', error);
            setCheckError('An error occurred while checking your registration');
        } finally {
            setIsChecking(false);
        }
    };

    return (
        <section id="registration" className="py-20 bg-yellow-50" data-oid="q57y_kv">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="w.pe9ki">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="iyae8zz"
                >
                    Registration
                </h2>

                <div
                    className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto mb-8"
                    data-oid="yatxtx:"
                >
                    <div className="mb-8 pb-8 border-b border-gray-200" data-oid="f4myvgm">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="t15cfp2">
                            Check Your Registration
                        </h3>
                        <form
                            onSubmit={handleCheckRegistration}
                            className="space-y-4"
                            data-oid="fbqx95."
                        >
                            <div data-oid="jsjjq8h">
                                <label
                                    htmlFor="checkEmail"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="t7-lgej"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="checkEmail"
                                    value={checkEmail}
                                    onChange={(e) => setCheckEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                    data-oid="z23dmzz"
                                />
                            </div>
                            <div className="text-center" data-oid="elj.d3e">
                                <button
                                    type="submit"
                                    disabled={isChecking}
                                    className={`px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md ${isChecking ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    data-oid="v7o4k.p"
                                >
                                    {isChecking ? 'Checking...' : 'Check Registration'}
                                </button>
                            </div>
                        </form>

                        {checkError && (
                            <div
                                className="mt-4 p-3 bg-red-50 text-red-800 rounded-md"
                                data-oid="ltj3a5d"
                            >
                                <p data-oid="h544nwv">{checkError}</p>
                            </div>
                        )}

                        {registrationData && (
                            <div
                                className="mt-4 p-4 bg-green-50 text-green-800 rounded-md"
                                data-oid="k6hm9u8"
                            >
                                <h4 className="font-medium mb-2" data-oid="8hm_53x">
                                    Registration Found
                                </h4>
                                <p className="mb-2" data-oid="6f8h47r">
                                    Name: {registrationData.name}
                                </p>
                                <p className="mb-4" data-oid="b4.1npb">
                                    Email: {registrationData.email}
                                </p>
                                <div className="mt-2" data-oid="dt.8en6">
                                    <a
                                        href={registrationData.receiptUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                                        data-oid="_6e-rmt"
                                    >
                                        View Receipt
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="6byrlck">
                        New Registration
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="a7-cwxa">
                        <div data-oid="uf40z9n">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="6ueydt-"
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
                                data-oid="4lae8jc"
                            />
                        </div>

                        <div data-oid="0ubo55_">
                            <label
                                htmlFor="designation"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="8:.b-kh"
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
                                data-oid="zo1ebtg"
                            />
                        </div>

                        <div data-oid="r8db9mv">
                            <label
                                htmlFor="paperTitle"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="3io3p0v"
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
                                data-oid="g9ri4ve"
                            />
                        </div>

                        <div data-oid="2zm51oz">
                            <label
                                htmlFor="participationMode"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="4o_1nhg"
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
                                data-oid="c5rx70v"
                            >
                                <option value="" data-oid="0prz3dl">
                                    Select mode
                                </option>
                                <option value="online" data-oid="sv1r_:a">
                                    Online
                                </option>
                                <option value="inPerson" data-oid="7ncml8x">
                                    In Person
                                </option>
                            </select>
                        </div>

                        <div data-oid="xk6iy6w">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="t::fb.l"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                                data-oid="856wu2x"
                            />
                        </div>

                        <div data-oid="me5q:nm">
                            <label
                                htmlFor="receipt"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="h21xujs"
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
                                data-oid="o8fk:wu"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="k0:om:w">
                                Accepted formats: PDF, JPG, JPEG, PNG
                            </p>
                        </div>

                        <div className="text-center" data-oid="cda5bcn">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                data-oid="v_t0n:o"
                            >
                                {isSubmitting ? 'Processing...' : 'Register Now'}
                            </button>
                        </div>
                    </form>

                    {showMessage && (
                        <div
                            className={`mt-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
                            data-oid="rfyzgfu"
                        >
                            <div className="flex" data-oid="9:a2xz:">
                                <div className="flex-shrink-0" data-oid="x:056jh">
                                    {submitStatus.success ? (
                                        <svg
                                            className="h-5 w-5 text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="3f3xmih"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                                data-oid="diixp0e"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="h-5 w-5 text-red-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="-llzaz7"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                clipRule="evenodd"
                                                data-oid="m0lfkfv"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <div className="ml-3" data-oid="bzh_b.q">
                                    <p className="text-sm font-medium" data-oid="g13k.ex">
                                        {submitStatus.message}
                                    </p>
                                </div>
                                <div className="ml-auto pl-3" data-oid="qz7:3ay">
                                    <div className="-mx-1.5 -my-1.5" data-oid="rsuvwye">
                                        <button
                                            type="button"
                                            onClick={() => setShowMessage(false)}
                                            className={`inline-flex rounded-md p-1.5 ${submitStatus.success ? 'text-green-500 hover:bg-green-100' : 'text-red-500 hover:bg-red-100'}`}
                                            data-oid="epqpecm"
                                        >
                                            <span className="sr-only" data-oid="7q9381m">
                                                Dismiss
                                            </span>
                                            <svg
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                data-oid="o1o3t8r"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                    data-oid="lgnooet"
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
