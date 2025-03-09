'use client';
import CallForPapers from '@/app/components/CallForPapers';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

export default function CallForPapersPage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            <Navigation activeSection="call-for-papers" scrollToSection={scrollToSection} />
            <div className="pt-16">
                <CallForPapers scrollToSection={scrollToSection} />
            </div>
            <Footer scrollToSection={scrollToSection} />
        </div>
    );
} 