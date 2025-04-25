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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="c7hplaz">
            <Navigation
                activeSection="about"
                scrollToSection={scrollToSection}
                data-oid="apm0wl7"
            />

            <div className="pt-16" data-oid="k547l6i">
                <About data-oid="g480in0" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="1xngy3p" />
        </div>
    );
}
