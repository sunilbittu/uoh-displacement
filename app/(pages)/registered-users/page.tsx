'use client';
import RegisteredUsers from '@/app/components/RegisteredUsers';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

export default function RegisteredUsersPage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            <Navigation activeSection="registration" scrollToSection={scrollToSection} />

            <div className="pt-16">
                <RegisteredUsers />
            </div>
            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
