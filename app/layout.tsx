import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Displacement',
    description: 'Displacement is more than the act of leaving',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="vl-bj1p">
            <body className={inter.className} data-oid="j8bm0b_">
                {children}
            </body>
        </html>
    );
}
