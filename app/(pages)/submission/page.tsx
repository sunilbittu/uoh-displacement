'use client';
import Submission from '@/app/components/Submission';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

export default function SubmissionPage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="voo-:7z">
            <Navigation
                activeSection="submission"
                scrollToSection={scrollToSection}
                data-oid="aqqldiz"
            />

            <div className="pt-16" data-oid="-pyqy4m">
                <Submission data-oid="ipv6n20" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="szfwp.w" />
        </div>
    );
}
