import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export function Entry({ className, children }: { className?: string; children: ReactNode }) {
    return (
        <div
            className={cn(
                'border-b border-dotted border-divider py-3 first:pt-0 last:border-b-0 last:pb-0',
                className
            )}
        >
            {children}
        </div>
    );
}
