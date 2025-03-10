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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="fv.23io">
            <Navigation
                activeSection="submission"
                scrollToSection={scrollToSection}
                data-oid="s6zu0_0"
            />

            <div className="pt-16" data-oid="rew.5zh">
                <Submission data-oid="idywmf4" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="0m8i_72" />
        </div>
    );
}
