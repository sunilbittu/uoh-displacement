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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="fdqe2jd">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="y6yw45v"
            />

            <div className="pt-16" data-oid=":sr4fsi">
                <RegisteredUsers data-oid="wgv.wky" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="_5y-z_5" />
        </div>
    );
}
