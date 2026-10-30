import type { ComponentProps } from 'react';

export function PolishFlagIcon(props: ComponentProps<'svg'>) {
    return (
        <svg aria-hidden='true' viewBox='0 0 16 10' {...props}>
            <rect fill='#fff' height='5' width='16' />
            <rect fill='#dc143c' height='5' width='16' y='5' />
        </svg>
    );
}
