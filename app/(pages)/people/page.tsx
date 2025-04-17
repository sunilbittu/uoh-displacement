'use client';
import People from '@/app/components/People';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

export default function PeoplePage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="k5cgzth">
            <Navigation
                activeSection="people"
                scrollToSection={scrollToSection}
                data-oid="2fc005r"
            />

            <div className="pt-16" data-oid="do2973n">
                <People data-oid="aj:7w3w" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="1:dv3db" />
        </div>
    );
}
