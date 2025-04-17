'use client';
import React from 'react';
import Image from 'next/image';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

export default function ParticipantsPage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            <Navigation activeSection="participants" scrollToSection={scrollToSection} />

            <div className="pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-red-800 mb-8">Participants</h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-red-800 mb-4">
                                Keynote Speakers
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200">
                                        <Image
                                            src="/images/speaker-rajini.png"
                                            alt="Prof. Rajini Srikant"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-indigo-700">
                                            Prof. Rajini Srikant
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            University of Massachusetts, Boston, USA
                                        </p>
                                        <p className="text-gray-500 text-sm mt-1 italic">
                                            Expert in Migration Studies and Displacement
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200">
                                        <Image
                                            src="/images/speaker-irudaya.jpeg"
                                            alt="Prof. Irudaya Rajan"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-indigo-700">
                                            Prof. Irudaya Rajan
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            The International Institute of Migration and Development
                                        </p>
                                        <p className="text-gray-500 text-sm mt-1 italic">
                                            Renowned researcher on migration patterns
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200">
                                        <Image
                                            src="/images/speaker-divya.jpeg"
                                            alt="Divya Jose"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-indigo-700">Divya Jose</h3>
                                        <p className="text-gray-600 text-sm">
                                            Refugee Education, UK
                                        </p>
                                        <p className="text-gray-500 text-sm mt-1 italic">
                                            Advocate for refugee education rights
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200">
                                        <Image
                                            src="/images/speaker-vinay.jpeg"
                                            alt="Prof. Vinay Lal"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-indigo-700">
                                            Prof. Vinay Lal
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            University of California, LA, USA
                                        </p>
                                        <p className="text-gray-500 text-sm mt-1 italic">
                                            Historian specializing in colonial and postcolonial
                                            studies
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-200">
                                        <Image
                                            src="/images/speaker-knarayna.png"
                                            alt="Prof. K Narayana Chandran"
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-indigo-700">
                                            Prof. K Narayana Chandran
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            Former Professor, UoH
                                        </p>
                                        <p className="text-gray-500 text-sm mt-1 italic">
                                            Distinguished scholar in literary studies
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-red-800 mb-4">Poets</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2">
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-medium text-indigo-700">
                                        Yousif M. Qasmiyeh
                                    </h3>
                                </div>
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-medium text-indigo-700">Shash Trevett</h3>
                                </div>
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-medium text-indigo-700">
                                        Anthony Vahni Capildeo
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-red-800 mb-4">
                                Paper Presenters
                            </h2>
                            <div className="space-y-4">
                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-medium text-indigo-700">Aneil Rallin</h3>
                                </div>

                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-medium text-indigo-700">Ido Fuchs</h3>
                                    <p className="text-gray-600 text-sm">
                                        Visiting Researcher at the Network for Environmental
                                        Humanities at the Research Institute for Cultural Inquiry,
                                        Utrecht University
                                    </p>
                                </div>

                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-medium text-indigo-700">K.S. Ahima</h3>
                                    <p className="text-gray-600 text-sm">
                                        Research Scholar, Humanities and Social Sciences, NIT
                                        Warangal
                                    </p>
                                </div>

                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-medium text-indigo-700">
                                        Abhilasha Sawlani
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Research Scholar, Ashoka University
                                    </p>
                                </div>

                                <div className="border-l-4 border-indigo-500 pl-4">
                                    <h3 className="font-medium text-indigo-700">
                                        John Leandro Reyes
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Associate Lecturer at Mindanao State University - Iligan
                                        Institute of Technology
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-red-800 mb-4">
                                Round Table Presenters
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Arundhathi Padmanabhan
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Ardra Dinesh
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Arup Kumar Bag
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Monideepa Raichaudhuri and Raj Shekhar Barman
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Niharika Singh
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Bihan Bandyopadhyay
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Minyoung Kim
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Abul Bashar
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Pooja Prasain
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Trijit Mukherjee
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Akanchha Singh
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Meenakshi S. Thambi
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Prasann K Naik
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Swayam Sikha Srichandan
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Muhammad Ashar Khan
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Shataaxi Chauhan
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Nayan Mary Tom
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Prachi Naik
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Bhakti Deshmukh
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Sumana Sinhababu
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Rubaiya Nasrin
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Aishiki Bandhopadhyay
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Anjali Kaushik
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Gazala F. Ansari
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Muhammed Saeed PK
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Piyush Protim Saikia and Trishna Saikia
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Nandhana Suresh
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Aadrit Banerjee
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Gautham Anil Warrier (Gaw)
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Biraj Biswas
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Swarupa Das
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Astik Mukherjee
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Theadora War
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Manisha Madhu
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Rashmi Ranjan Panigrahi and Parthajyoti Roy
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Saptanil Maji
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-red-800 mb-4">Chairs</h2>
                            <div className="space-y-4">
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Prof. Pramod K Nayar
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Dr. Salah Punathil
                                    </p>
                                    <p className="text-gray-600 text-xs">Regional Studies, UoH</p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Dr. Nandini Shankar
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Dr. Goutam Karmakar
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Dr. Girish D. Pawar
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Dr. B. Krishnaiah
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Dr. Yakaiah Kathy
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Prof. Sathya Prakash
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                        Department of Communication, UoH
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Dr. Saradindu Bhattacharya
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Prof. Ajaya Sahoo
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                        Centre for Indian Diaspora, UoH
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Dr. Siddharth Satpathy
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Dr. Sriparna Das
                                    </p>
                                    <p className="text-gray-600 text-xs">CALTS, UoH</p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Dr. Laboni Mukherjee
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Dr. Pushpanjali Sampathkumar
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                        Department of English, UoH
                                    </p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Dr. Purna Chandra Naik
                                    </p>
                                    <p className="text-gray-600 text-xs">CCL, UoH</p>
                                </div>
                                <div className="border-l-2 border-indigo-500 pl-3">
                                    <p className="text-indigo-700 font-medium text-sm">
                                        Prof. Anna Kurian
                                    </p>
                                    <p className="text-gray-600 text-xs">
                                        Department of English, UoH
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
