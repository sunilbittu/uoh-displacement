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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="n48a1tj">
            <Navigation activeSection="home" scrollToSection={scrollToSection} data-oid="_z0-_2:" />
            <Hero scrollToSection={scrollToSection} data-oid="1ecn8rq" />
            <Footer scrollToSection={scrollToSection} data-oid="3d3h0v8" />
        </div>
    );
}
