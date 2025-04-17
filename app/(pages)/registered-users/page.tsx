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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="sk.mcge">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="p-hv-b0"
            />

            <div className="pt-16" data-oid="algp0.n">
                <RegisteredUsers data-oid="dt95dtv" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="cp070k5" />
        </div>
    );
}
