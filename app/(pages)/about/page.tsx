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
        <div className="min-h-screen bg-white text-gray-800 font-sans" data-oid="n_lc3kf">
            <Navigation
                activeSection="about"
                scrollToSection={scrollToSection}
                data-oid="np.ic-w"
            />

            <div className="pt-16" data-oid="1s51e0z">
                <About data-oid="vclwo67" />
            </div>
            <Footer scrollToSection={scrollToSection} data-oid="jwxd-65" />
        </div>
    );
}
