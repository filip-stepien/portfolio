import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type SmallLinkProps = ComponentProps<'a'> & {
    external?: boolean;
};

export function SmallLink({ external, className, ...props }: SmallLinkProps) {
    return (
        <a
            className={cn('font-ui text-2xs font-bold', className)}
            {...(external && { rel: 'noopener', target: '_blank' })}
            {...props}
        />
    );
}
