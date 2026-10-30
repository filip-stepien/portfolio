import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export function Paragraph({ className, ...props }: ComponentProps<'p'>) {
    return <p className={cn('mb-2.5 max-w-[65ch]', className)} {...props} />;
}
