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
        <section id="registration" className="py-20 bg-yellow-50" data-oid="b9-ssj8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="9:oq39h">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="oncmvp3"
                >
                    Registration
                </h2>

                <div
                    className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto mb-8"
                    data-oid="utc2dim"
                >
                    <div className="mb-8 pb-8 border-b border-gray-200" data-oid="q7oi7vn">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="x5h3hts">
                            Check Your Registration
                        </h3>
                        <form
                            onSubmit={handleCheckRegistration}
                            className="space-y-4"
                            data-oid="42mp5gy"
                        >
                            <div data-oid="5cvbfkz">
                                <label
                                    htmlFor="checkEmail"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="crcnjat"
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
                                    data-oid="1a_thu4"
                                />
                            </div>
                            <div className="text-center" data-oid="_17:8ql">
                                <button
                                    type="submit"
                                    disabled={isChecking}
                                    className={`px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md ${isChecking ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    data-oid="60vth9j"
                                >
                                    {isChecking ? 'Checking...' : 'Check Registration'}
                                </button>
                            </div>
                        </form>

                        {checkError && (
                            <div
                                className="mt-4 p-3 bg-red-50 text-red-800 rounded-md"
                                data-oid="li52vr_"
                            >
                                <p data-oid="azdq0eu">{checkError}</p>
                            </div>
                        )}

                        {registrationData && (
                            <div
                                className="mt-4 p-4 bg-green-50 text-green-800 rounded-md"
                                data-oid="u.08sn3"
                            >
                                <h4 className="font-medium mb-2" data-oid="5jjzerm">
                                    Registration Found
                                </h4>
                                <p className="mb-2" data-oid="vn66mm4">
                                    Name: {registrationData.name}
                                </p>
                                <p className="mb-4" data-oid="ex8ep39">
                                    Email: {registrationData.email}
                                </p>
                                <div className="mt-2" data-oid="i8wc:jg">
                                    <a
                                        href={registrationData.receiptUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                                        data-oid="4sh_f9x"
                                    >
                                        View Receipt
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="5_c6l9h">
                        New Registration
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="er8_3-:">
                        <div data-oid="_v_.br3">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="ky-n8lo"
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
                                data-oid="nccqf34"
                            />
                        </div>

                        <div data-oid="4whxoc8">
                            <label
                                htmlFor="designation"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="28ht2id"
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
                                data-oid="5pbzexf"
                            />
                        </div>

                        <div data-oid="ts6y2.f">
                            <label
                                htmlFor="paperTitle"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="kfhca-x"
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
                                data-oid="nt3_cmy"
                            />
                        </div>

                        <div data-oid="q_r59k1">
                            <label
                                htmlFor="participationMode"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="ujpknla"
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
                                data-oid="p0z1d9-"
                            >
                                <option value="" data-oid="ethl0-b">
                                    Select mode
                                </option>
                                <option value="online" data-oid="085h202">
                                    Online
                                </option>
                                <option value="inPerson" data-oid="jsvyjet">
                                    In Person
                                </option>
                            </select>
                        </div>

                        <div data-oid="dmtbq3i">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="_1aze0c"
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
                                data-oid="6zi332."
                            />
                        </div>

                        <div data-oid="2m_cg7b">
                            <label
                                htmlFor="receipt"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="l3tdnk-"
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
                                data-oid="3riy6t5"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="y68bazn">
                                Accepted formats: PDF, JPG, JPEG, PNG
                            </p>
                        </div>

                        <div className="text-center" data-oid="m8h-z_4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                data-oid="_u4:x:."
                            >
                                {isSubmitting ? 'Processing...' : 'Register Now'}
                            </button>
                        </div>
                    </form>

                    {showMessage && (
                        <div
                            className={`mt-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
                            data-oid="i-ghkah"
                        >
                            <div className="flex" data-oid="39fkz87">
                                <div className="flex-shrink-0" data-oid="l5dczik">
                                    {submitStatus.success ? (
                                        <svg
                                            className="h-5 w-5 text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="::ynp9b"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                                data-oid="qe-qhvr"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="h-5 w-5 text-red-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="hfbhpwm"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                clipRule="evenodd"
                                                data-oid="fx10w5:"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <div className="ml-3" data-oid="klq74tf">
                                    <p className="text-sm font-medium" data-oid="xkcjzyc">
                                        {submitStatus.message}
                                    </p>
                                </div>
                                <div className="ml-auto pl-3" data-oid="g0lxm6f">
                                    <div className="-mx-1.5 -my-1.5" data-oid="wecn6lu">
                                        <button
                                            type="button"
                                            onClick={() => setShowMessage(false)}
                                            className={`inline-flex rounded-md p-1.5 ${submitStatus.success ? 'text-green-500 hover:bg-green-100' : 'text-red-500 hover:bg-red-100'}`}
                                            data-oid="c7b0zp4"
                                        >
                                            <span className="sr-only" data-oid="guyerqj">
                                                Dismiss
                                            </span>
                                            <svg
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                data-oid="v54bxz5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                    data-oid="-9k-9w3"
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
