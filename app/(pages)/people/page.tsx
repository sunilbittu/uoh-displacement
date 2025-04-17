'use client';
import People from '@/app/components/People';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

export default function PeoplePage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="ws8x9gg">
            <Navigation
                activeSection="people"
                scrollToSection={scrollToSection}
                data-oid="snb18hu"
            />

            <div className="pt-16" data-oid="y03rh3p">
                <People data-oid="fxl:7:j" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="a3zrkdp" />
        </div>
    );
}
