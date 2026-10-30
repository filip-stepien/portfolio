import type { ReactNode } from 'react';

export function Field({ label, children }: { label: string; children: ReactNode }) {
    return (
        <label className='grid gap-0.5'>
            <span>{label}</span>
            {children}
        </label>
    );
}
