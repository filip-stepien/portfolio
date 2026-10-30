import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

const field = 'bevel-sunken bg-white p-[3px] font-body text-xs text-black';

export function Input({ className, ...props }: ComponentProps<'input'>) {
    return <input className={cn(field, className)} {...props} />;
}

export function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
    return <textarea className={cn(field, 'min-h-24 resize-y', className)} {...props} />;
}
