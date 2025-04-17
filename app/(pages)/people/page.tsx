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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="yv_jzqo">
            <Navigation
                activeSection="people"
                scrollToSection={scrollToSection}
                data-oid="d7qvvct"
            />

            <div className="pt-16" data-oid="habdg:.">
                <People data-oid="90yz:6z" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="_iwysjs" />
        </div>
    );
}
