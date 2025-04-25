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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="lf.q4y8">
            <Navigation activeSection="home" scrollToSection={scrollToSection} data-oid="zk3hv04" />
            <Hero scrollToSection={scrollToSection} data-oid="gutsinm" />
            <Footer scrollToSection={scrollToSection} data-oid="d471g0w" />
        </div>
    );
}
