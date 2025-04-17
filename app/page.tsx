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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="z1whm:f">
            <Navigation activeSection="home" scrollToSection={scrollToSection} data-oid="kj9k6ev" />
            <Hero scrollToSection={scrollToSection} data-oid="1c1a7m7" />
            <Footer scrollToSection={scrollToSection} data-oid="2cajv.z" />
        </div>
    );
}
