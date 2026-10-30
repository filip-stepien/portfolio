import { VT323 } from 'next/font/google';
import React from 'react';
import './styles.css';

const vt323 = VT323({
    subsets: ['latin', 'latin-ext'],
    variable: '--font-vt323',
    weight: '400'
});

export const metadata = {
    description: 'Oficjalna witryna internetowa: Filip Stępień, Fullstack Developer.',
    title: 'Filip Stępień | Fullstack Developer'
};

export default async function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props;

    return (
        <html className={vt323.variable} lang='pl'>
            <body>{children}</body>
        </html>
    );
}
