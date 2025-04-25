'use client';
import Registration from '@/app/components/Registration';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

export default function RegistrationPage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="1yz7tyx">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="3tn059x"
            />

            <div className="pt-16" data-oid="5m7bq88">
                <Registration data-oid="uqnfssb" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="45sqf0r" />
        </div>
    );
}
