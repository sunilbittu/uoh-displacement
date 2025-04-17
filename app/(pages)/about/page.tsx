'use client';
import About from '@/app/components/About';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="3oafwhy">
            <Navigation
                activeSection="about"
                scrollToSection={scrollToSection}
                data-oid="jrozf7."
            />

            <div className="pt-16" data-oid="8zay5e-">
                <About data-oid="-6e.tyv" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="c:yb5d9" />
        </div>
    );
}
