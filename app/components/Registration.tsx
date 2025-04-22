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
        <section id="registration" className="py-20 bg-yellow-50" data-oid="wkzqhg_">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="xbgqdtj">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="ztocmz7"
                >
                    Registration
                </h2>

                <div
                    className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto mb-8"
                    data-oid="az2g2vi"
                >
                    <div className="mb-8 pb-8 border-b border-gray-200" data-oid="ej.f0ii">
                        <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="mjq7ew2">
                            Check Your Registration
                        </h3>
                        <form
                            onSubmit={handleCheckRegistration}
                            className="space-y-4"
                            data-oid="4moa_qc"
                        >
                            <div data-oid="ji6ut06">
                                <label
                                    htmlFor="checkEmail"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    data-oid="3t0wsjz"
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
                                    data-oid="gnmv_aw"
                                />
                            </div>
                            <div className="text-center" data-oid="_2a6r.j">
                                <button
                                    type="submit"
                                    disabled={isChecking}
                                    className={`px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md ${isChecking ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    data-oid="tq9_jxw"
                                >
                                    {isChecking ? 'Checking...' : 'Check Registration'}
                                </button>
                            </div>
                        </form>

                        {checkError && (
                            <div
                                className="mt-4 p-3 bg-red-50 text-red-800 rounded-md"
                                data-oid="hz3::oo"
                            >
                                <p data-oid="__qm89:">{checkError}</p>
                            </div>
                        )}

                        {registrationData && (
                            <div
                                className="mt-4 p-4 bg-green-50 text-green-800 rounded-md"
                                data-oid="tu5-:ya"
                            >
                                <h4 className="font-medium mb-2" data-oid="tfi-2ro">
                                    Registration Found
                                </h4>
                                <p className="mb-2" data-oid="h-uem8z">
                                    Name: {registrationData.name}
                                </p>
                                <p className="mb-4" data-oid="2co5vu1">
                                    Email: {registrationData.email}
                                </p>
                                <div className="mt-2" data-oid=".r6rnxl">
                                    <a
                                        href={registrationData.receiptUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                                        data-oid="j:xc1vc"
                                    >
                                        View Receipt
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    <h3 className="text-xl font-semibold text-red-800 mb-4" data-oid="n45wq_-">
                        New Registration
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="ovpc2u4">
                        <div data-oid="rmdmhz8">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="-t:zzid"
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
                                data-oid="cmox:p."
                            />
                        </div>

                        <div data-oid="zb-4zs6">
                            <label
                                htmlFor="designation"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="79kpn8-"
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
                                data-oid="2tdfnxm"
                            />
                        </div>

                        <div data-oid="x2ln4w2">
                            <label
                                htmlFor="paperTitle"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="jzm6h.q"
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
                                data-oid="99jsly1"
                            />
                        </div>

                        <div data-oid="13sit-6">
                            <label
                                htmlFor="participationMode"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="ulm.j1q"
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
                                data-oid="v5h_01u"
                            >
                                <option value="" data-oid="o.flkqm">
                                    Select mode
                                </option>
                                <option value="online" data-oid="mlin-l0">
                                    Online
                                </option>
                                <option value="inPerson" data-oid="qa4drvc">
                                    In Person
                                </option>
                            </select>
                        </div>

                        <div data-oid="rp4h:i7">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="1inm1in"
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
                                data-oid="mguxwta"
                            />
                        </div>

                        <div data-oid="tg8up1c">
                            <label
                                htmlFor="receipt"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="6nbnjje"
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
                                data-oid="w4q0fm3"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="334-fl:">
                                Accepted formats: PDF, JPG, JPEG, PNG
                            </p>
                        </div>

                        <div className="text-center" data-oid="m7n-s7k">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                data-oid="hhct:8j"
                            >
                                {isSubmitting ? 'Processing...' : 'Register Now'}
                            </button>
                        </div>
                    </form>

                    {showMessage && (
                        <div
                            className={`mt-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
                            data-oid="pk27me9"
                        >
                            <div className="flex" data-oid="x842m9p">
                                <div className="flex-shrink-0" data-oid="ge1m25h">
                                    {submitStatus.success ? (
                                        <svg
                                            className="h-5 w-5 text-green-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="v0tpq5l"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                                data-oid=".ykwkz."
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="h-5 w-5 text-red-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="36x6gx-"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                clipRule="evenodd"
                                                data-oid="i-r7de9"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <div className="ml-3" data-oid="5m6f_y3">
                                    <p className="text-sm font-medium" data-oid="sa:l38y">
                                        {submitStatus.message}
                                    </p>
                                </div>
                                <div className="ml-auto pl-3" data-oid="2gppjz7">
                                    <div className="-mx-1.5 -my-1.5" data-oid="tzgxtct">
                                        <button
                                            type="button"
                                            onClick={() => setShowMessage(false)}
                                            className={`inline-flex rounded-md p-1.5 ${submitStatus.success ? 'text-green-500 hover:bg-green-100' : 'text-red-500 hover:bg-red-100'}`}
                                            data-oid="hd4dfz-"
                                        >
                                            <span className="sr-only" data-oid="3xpwcjb">
                                                Dismiss
                                            </span>
                                            <svg
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                data-oid="i18w1mq"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                    data-oid="9uj.439"
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
