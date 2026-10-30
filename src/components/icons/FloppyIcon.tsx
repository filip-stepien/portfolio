import type { ComponentProps } from 'react';

export function FloppyIcon(props: ComponentProps<'svg'>) {
    return (
        <svg aria-hidden='true' viewBox='0 0 16 16' {...props}>
            <path d='M.5.5h12l3 3v12H.5z' fill='#1c1c80' stroke='#000' />
            <path d='M3.5 1h8v5h-8z' fill='#c0c0c0' />
            <path d='M8.5 1.8h1.6v3.4H8.5z' fill='#1c1c80' />
            <path d='M2.5 9h11v6.5h-11z' fill='#fff' />
            <path d='M4 11.2h8M4 13.2h8' stroke='#808080' />
        </svg>
    );
}
