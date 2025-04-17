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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="l97qdij">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="lxyauqt"
            />

            <div className="pt-16" data-oid="th_e73h">
                <Registration data-oid="5h3whvz" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="c9tnsze" />
        </div>
    );
}
