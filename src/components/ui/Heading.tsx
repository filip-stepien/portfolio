import type { ReactNode } from 'react';

export function Heading({ children }: { children: ReactNode }) {
    return (
        <h2 className='mb-2 font-serif text-lg font-bold text-balance text-heading'>{children}</h2>
    );
}
