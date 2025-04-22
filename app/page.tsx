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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="pd-hn:.">
            <Navigation activeSection="home" scrollToSection={scrollToSection} data-oid="8vr_txf" />
            <Hero scrollToSection={scrollToSection} data-oid="3rmu2.9" />
            <Footer scrollToSection={scrollToSection} data-oid="0374akn" />
        </div>
    );
}
