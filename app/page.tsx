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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="nf:d4k2">
            <Navigation activeSection="home" scrollToSection={scrollToSection} data-oid="690ncr_" />
            <Hero scrollToSection={scrollToSection} data-oid="0evt:bk" />
            <Footer scrollToSection={scrollToSection} data-oid="k3qfc5x" />
        </div>
    );
}
