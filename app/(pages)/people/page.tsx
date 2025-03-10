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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="zw:6t8y">
            <Navigation
                activeSection="people"
                scrollToSection={scrollToSection}
                data-oid=".qx:9q."
            />

            <div className="pt-16" data-oid=".xd0h15">
                <People data-oid="0gbgooe" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="6n0cij." />
        </div>
    );
}
