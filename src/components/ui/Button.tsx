import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export function Button({ type = 'button', className, ...props }: ComponentProps<'button'>) {
    return (
        <button
            className={cn(
                'bevel-raised cursor-pointer bg-chrome px-3 py-[3px] font-ui text-xs text-black active:bevel-pressed',
                'disabled:cursor-default disabled:text-chrome-shadow disabled:text-shadow-etched',
                className
            )}
            type={type}
            {...props}
        />
    );
}
