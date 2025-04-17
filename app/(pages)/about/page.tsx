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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="hxl42pm">
            <Navigation
                activeSection="about"
                scrollToSection={scrollToSection}
                data-oid="okzqs-k"
            />

            <div className="pt-16" data-oid="z0g284g">
                <About data-oid="8wukm9u" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="lnihp8b" />
        </div>
    );
}
