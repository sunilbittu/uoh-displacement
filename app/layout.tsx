import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Displacement',
    description: 'Displacement is more than the act of leaving - An international conference exploring the multifaceted aspects of displacement through academic discourse and research presentations.',
    keywords: 'displacement, conference, academic research, migration studies, social impact, University of Hyderabad',
    authors: [{ name: 'University of Hyderabad' }],
    openGraph: {
        title: 'Displacement - International Conference',
        description: 'Join us for an international conference exploring the multifaceted aspects of displacement through academic discourse and research presentations.',
        type: 'website',
        locale: 'en_US',
        siteName: 'Displacement Conference'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Displacement - International Conference',
        description: 'Join us for an international conference exploring the multifaceted aspects of displacement through academic discourse and research presentations.'
    },
    robots: {
        index: true,
        follow: true
    },
    themeColor: '#EF4444'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="4.ydzhi">
            <body className={inter.className} data-oid="3xg:men">
                {children}
            </body>
        </html>
    );
}
