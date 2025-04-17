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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="e-5r_t_">
            <Navigation
                activeSection="people"
                scrollToSection={scrollToSection}
                data-oid="iw-vapq"
            />

            <div className="pt-16" data-oid="2s2v7yi">
                <People data-oid="pxtgfmw" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="fdhb5ge" />
        </div>
    );
}
