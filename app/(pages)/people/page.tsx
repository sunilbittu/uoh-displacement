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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="xn:4wg4">
            <Navigation
                activeSection="people"
                scrollToSection={scrollToSection}
                data-oid="fv_o2es"
            />

            <div className="pt-16" data-oid="lc33c4g">
                <People data-oid="5w3n-om" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="1kp03ie" />
        </div>
    );
}
