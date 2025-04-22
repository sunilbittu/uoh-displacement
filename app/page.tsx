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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="w1xc0i2">
            <Navigation activeSection="home" scrollToSection={scrollToSection} data-oid="hc_a3e4" />
            <Hero scrollToSection={scrollToSection} data-oid="kq0sxu_" />
            <Footer scrollToSection={scrollToSection} data-oid="3s.q7vm" />
        </div>
    );
}
