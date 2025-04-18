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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="uumcb1i">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="fbevm5z"
            />

            <div className="pt-16" data-oid="sqa8exu">
                <RegisteredUsers data-oid="vy3spjh" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="j32tod:" />
        </div>
    );
}
