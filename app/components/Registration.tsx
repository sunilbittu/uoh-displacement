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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({
                ...prev,
                receipt: e.target.files[0],
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    return (
        <section id="registration" className="py-20 bg-yellow-50" data-oid="i7rfbcx">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="jop9.yo">
                <h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    data-oid="0nw1d.z"
                >
                    Registration
                </h2>

                <div
                    className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto mb-8"
                    data-oid="qsen7lp"
                >
                    <form onSubmit={handleSubmit} className="space-y-6" data-oid="pyg20h2">
                        <div data-oid="sn9b1.7">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="kwzed6i"
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
                                data-oid="9a1ip.f"
                            />
                        </div>

                        <div data-oid="fvkmo7-">
                            <label
                                htmlFor="designation"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="dxjwpjg"
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
                                data-oid="h4n5ue:"
                            />
                        </div>

                        <div data-oid="45fa3i4">
                            <label
                                htmlFor="paperTitle"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="_.bjepa"
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
                                data-oid="ihmp33p"
                            />
                        </div>

                        <div data-oid=".vhp:ba">
                            <label
                                htmlFor="participationMode"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="0mhi581"
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
                                data-oid="j8tjrcs"
                            >
                                <option value="" data-oid="bt5pq1-">
                                    Select mode
                                </option>
                                <option value="online" data-oid="7:3i7p8">
                                    Online
                                </option>
                                <option value="inPerson" data-oid="l29mhiz">
                                    In Person
                                </option>
                            </select>
                        </div>

                        <div data-oid="5.508gj">
                            <label
                                htmlFor="receipt"
                                className="block text-sm font-medium text-gray-700 mb-1"
                                data-oid="cxgip4r"
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
                                data-oid="nuwfh0i"
                            />

                            <p className="text-xs text-gray-500 mt-1" data-oid="g_8tmop">
                                Accepted formats: PDF, JPG, JPEG, PNG
                            </p>
                        </div>

                        <div className="text-center" data-oid=".n51cf5">
                            <button
                                type="submit"
                                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-md"
                                data-oid="5g9:b0s"
                            >
                                Register Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
