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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="6asbwhm">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="i-oey60"
            />

            <div className="pt-16" data-oid="8cufo2j">
                <Registration data-oid="l:9ogsm" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="9j6agh1" />
        </div>
    );
}
