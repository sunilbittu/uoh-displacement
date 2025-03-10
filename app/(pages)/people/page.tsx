'use client';
import People from '@/app/components/People';
import { SectionId } from '@/app/types';

export default function PeoplePage() {
    const scrollToSection = (sectionId: SectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="pt-16">
            <People />
        </main>
    );
} 