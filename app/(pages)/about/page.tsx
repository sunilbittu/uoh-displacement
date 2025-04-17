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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="qqkbjgo">
            <Navigation
                activeSection="about"
                scrollToSection={scrollToSection}
                data-oid="jo1aj55"
            />

            <div className="pt-16" data-oid="i0oi4dn">
                <About data-oid="x1j1y:o" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="r1l.kfi" />
        </div>
    );
}
