import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

const sidebar = '[--box-padding:12px] max-md:grid-cols-[repeat(auto-fit,minmax(210px,1fr))]';

const sideClasses = {
    left: sidebar,
    center: 'max-md:-order-1',
    right: cn(sidebar, '[--box-header-tracking:0.5px]')
};

type ColumnProps = {
    side: keyof typeof sideClasses;
    as?: 'div' | 'main' | 'aside';
    children: ReactNode;
};

export function Column({ side, as: Tag = 'div', children }: ColumnProps) {
    return <Tag className={cn('grid min-w-0 gap-3', sideClasses[side])}>{children}</Tag>;
}
