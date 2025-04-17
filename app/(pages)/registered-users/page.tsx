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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid=":ivme-j">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="a4kz3s6"
            />

            <div className="pt-16" data-oid="r.mjj05">
                <RegisteredUsers data-oid="uh0b::o" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="de1_q_n" />
        </div>
    );
}
