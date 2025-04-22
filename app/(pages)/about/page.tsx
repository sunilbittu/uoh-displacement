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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="e.ibrg9">
            <Navigation
                activeSection="about"
                scrollToSection={scrollToSection}
                data-oid="64j3sjp"
            />

            <div className="pt-16" data-oid="mayfnw3">
                <About data-oid="yupjyaj" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="s80saoq" />
        </div>
    );
}
