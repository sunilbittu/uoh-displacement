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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="k5vx62x">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="qkdgpoc"
            />

            <div className="pt-16" data-oid="j-3aa-z">
                <Registration data-oid="io43chv" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="oqm677e" />
        </div>
    );
}
