import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type BoxProps = {
    title: string;
    id?: string;
    as?: 'div' | 'section';
    tint?: boolean;
    flush?: boolean;
    className?: string;
    children: ReactNode;
};

// --box-padding and --box-header-tracking are set by the surrounding column
export function Box({ title, id, as: Tag = 'div', tint, flush, className, children }: BoxProps) {
    return (
        <Tag className={cn('min-w-0 border border-black bg-white shadow-box', className)} id={id}>
            <div className="overflow-hidden border-b border-black bg-linear-to-b/srgb from-bar-from to-bar-to px-2 py-1.5 text-center font-body text-2xs leading-none font-bold tracking-[var(--box-header-tracking,1.5px)] text-clip whitespace-nowrap text-white uppercase text-shadow-hard before:text-highlight before:content-['.::_'] after:text-highlight after:content-['_::.']">
                {title}
            </div>
            <div
                className={cn(
                    'p-[var(--box-padding,14px_16px)]',
                    tint && 'bg-surface-tint',
                    flush && 'p-0'
                )}
            >
                {children}
            </div>
        </Tag>
    );
}
