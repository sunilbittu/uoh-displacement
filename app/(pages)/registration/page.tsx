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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="4sna_-a">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="ran2787"
            />

            <div className="pt-16" data-oid="z_75t4y">
                <Registration data-oid="udi-aqh" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="im8vo3g" />
        </div>
    );
}
