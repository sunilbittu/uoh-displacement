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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="d:vcfaw">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="rw4k0c2"
            />

            <div className="pt-16" data-oid="bbud9tv">
                <Registration data-oid="e9kdbly" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="urha6pd" />
        </div>
    );
}
