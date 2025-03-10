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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="6strgz:">
            <Navigation
                activeSection="about"
                scrollToSection={scrollToSection}
                data-oid="efyc7nu"
            />

            <div className="pt-16" data-oid="ig5d8dd">
                <About data-oid="rg:zwds" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="yt9mdki" />
        </div>
    );
}
