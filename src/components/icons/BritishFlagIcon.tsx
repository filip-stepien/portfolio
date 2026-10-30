import type { ComponentProps } from 'react';

export function BritishFlagIcon(props: ComponentProps<'svg'>) {
    return (
        <svg aria-hidden='true' viewBox='0 0 60 30' {...props}>
            <clipPath id='uk-t'>
                <path d='M30 15h30v15zv15H0zH0V0zV0h30z' />
            </clipPath>
            <path d='M0 0v30h60V0z' fill='#012169' />
            <path d='M0 0l60 30m0-30L0 30' stroke='#fff' strokeWidth='6' />
            <path clipPath='url(#uk-t)' d='M0 0l60 30m0-30L0 30' stroke='#c8102e' strokeWidth='4' />
            <path d='M30 0v30M0 15h60' stroke='#fff' strokeWidth='10' />
            <path d='M30 0v30M0 15h60' stroke='#c8102e' strokeWidth='6' />
        </svg>
    );
}
