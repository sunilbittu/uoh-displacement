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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="4_uej-d">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="m_prf.4"
            />

            <div className="pt-16" data-oid="a_n5-e8">
                <Registration data-oid="m8m3.zu" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="u7.6:zq" />
        </div>
    );
}
