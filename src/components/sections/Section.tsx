import type { ReactNode } from 'react';

import { Box } from '@/components/ui/Box';
import { Heading } from '@/components/ui/Heading';
import { ToTop } from '@/components/ui/ToTop';

type SectionProps = {
    id: string;
    title: string;
    heading: string;
    children: ReactNode;
};

export function Section({ id, title, heading, children }: SectionProps) {
    return (
        <Box as='section' id={id} title={title}>
            <Heading>{heading}</Heading>
            {children}
            <ToTop />
        </Box>
    );
}
