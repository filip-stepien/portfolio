import { Badge } from '@/components/ui/Badge';
import { badges, navigation, pageStatus, person } from '@/data/cv';

const footerNavigation = navigation.filter(item => !item.sidebarOnly);

export function Footer() {
    return (
        <footer className='grid justify-items-center gap-2.5 text-center font-ui text-2xs text-white'>
            <nav aria-label='Sekcje' className='text-haze [&_a]:text-highlight'>
                {footerNavigation.map((item, index) => (
                    <FooterLink
                        href={item.href}
                        key={item.href}
                        label={item.label}
                        separated={index > 0}
                    />
                ))}
            </nav>
            <div className='flex flex-wrap justify-center gap-1.5'>
                {badges.map(badge => (
                    <Badge key={badge.href} {...badge} />
                ))}
            </div>
            <div className='text-haze'>
                &copy; 2026 {person.name}. Wszelkie prawa zastrzeżone. Strona zmodyfikowana:{' '}
                {pageStatus.lastModified}
            </div>
        </footer>
    );
}

type FooterLinkProps = {
    href: string;
    label: string;
    separated: boolean;
};

function FooterLink({ href, label, separated }: FooterLinkProps) {
    return (
        <>
            {separated && ' | '}
            <a href={href}>{label}</a>
        </>
    );
}
