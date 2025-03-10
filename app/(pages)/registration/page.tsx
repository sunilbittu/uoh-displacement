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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="97pwqe.">
            <Navigation
                activeSection="registration"
                scrollToSection={scrollToSection}
                data-oid="3wt:vyi"
            />

            <div className="pt-16" data-oid="z.fh9p3">
                <Registration data-oid="-s_2ukk" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="if:qpb9" />
        </div>
    );
}
