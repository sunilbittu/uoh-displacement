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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="jk7ckw2">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="bk090ak"
            />

            <div className="pt-16" data-oid="4ct_2nv">
                <Registration data-oid="v8h2xf8" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="miz--i9" />
        </div>
    );
}
