import { Box } from '@/components/ui/Box';
import { SmallLink } from '@/components/ui/SmallLink';
import { links } from '@/data/cv';

export function Links() {
    return (
        <Box id='linki' title='Linki'>
            <div className='grid justify-items-start gap-1.5'>
                {links.map(link => (
                    <LinkItem key={link.href} {...link} />
                ))}
            </div>
        </Box>
    );
}

function LinkItem({ href, label, external }: (typeof links)[number]) {
    return (
        <SmallLink external={external} href={href}>
            » {label}
        </SmallLink>
    );
}
