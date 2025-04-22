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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="j3bmbz1">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="njvldhs"
            />

            <div className="pt-16" data-oid="ha:a_j7">
                <RegisteredUsers data-oid="c:bbc_y" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="qbwau8u" />
        </div>
    );
}
