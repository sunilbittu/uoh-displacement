'use client';
import { useRouter } from 'next/navigation';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function HomePage() {
    const router = useRouter();
    const scrollToSection = (sectionId: string) => {
        router.push(`/${sectionId === 'home' ? '' : sectionId}`);
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="143xb.m">
            <Navigation activeSection="home" scrollToSection={scrollToSection} data-oid="zrde3gr" />
            <Hero scrollToSection={scrollToSection} data-oid="pjjqa0c" />
            <Footer scrollToSection={scrollToSection} data-oid="6w:gci5" />
        </div>
    );
}
