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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="hl7n6q1">
            <Navigation
                activeSection="people"
                scrollToSection={scrollToSection}
                data-oid="m.7sh84"
            />

            <div className="pt-16" data-oid="7ug-g47">
                <People data-oid="o0rje7v" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="n-ua5ax" />
        </div>
    );
}
