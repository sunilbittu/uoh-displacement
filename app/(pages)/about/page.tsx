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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="d_xf4tp">
            <Navigation
                activeSection="about"
                scrollToSection={scrollToSection}
                data-oid="khugdms"
            />

            <div className="pt-16" data-oid="4xm2vkw">
                <About data-oid="sy.xwxz" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="gsj4823" />
        </div>
    );
}
