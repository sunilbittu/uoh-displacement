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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="ybb-uvf">
            <Navigation
                activeSection="people"
                scrollToSection={scrollToSection}
                data-oid="qxddppd"
            />

            <div className="pt-16" data-oid="g923pws">
                <People data-oid="mhu2:h3" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="4ja5822" />
        </div>
    );
}
