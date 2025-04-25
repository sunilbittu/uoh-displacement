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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="e.m.6il">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="ewu4pum"
            />

            <div className="pt-16" data-oid="kr_y_7n">
                <RegisteredUsers data-oid="nl1b9d2" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="s00xr5i" />
        </div>
    );
}
