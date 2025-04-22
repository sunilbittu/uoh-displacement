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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="xs0cdyt">
            <Navigation
                activeSection="about"
                scrollToSection={scrollToSection}
                data-oid="0i3mu8s"
            />

            <div className="pt-16" data-oid="ostakgt">
                <About data-oid="7jnfh66" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="l30ap::" />
        </div>
    );
}
