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
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            <Navigation activeSection="about" scrollToSection={scrollToSection} />
            <div className="pt-16">
                <About />
            </div>
            <Footer scrollToSection={scrollToSection} />
        </div>
    );
} 