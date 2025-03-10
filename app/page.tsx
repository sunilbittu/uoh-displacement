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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="4i5p47n">
            <Navigation activeSection="home" scrollToSection={scrollToSection} data-oid="ipb-wik" />
            <Hero scrollToSection={scrollToSection} data-oid="r0c8lw-" />
            <Footer scrollToSection={scrollToSection} data-oid="xc.dzdm" />
        </div>
    );
}
