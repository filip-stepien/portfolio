import { Box } from '@/components/ui/Box';
import { navigation } from '@/data/cv';

export function Nav() {
    return (
        <Box className='max-md:col-span-full' flush title='Menu'>
            <nav
                aria-label='Sekcje'
                className='grid gap-[3px] p-1.5 max-md:grid-cols-[repeat(auto-fill,minmax(140px,1fr))]'
            >
                {navigation.map(item => (
                    <NavLink key={item.href} {...item} />
                ))}
            </nav>
        </Box>
    );
}

function NavLink({ href, label, isNew }: (typeof navigation)[number]) {
    return (
        <a
            className="bevel-thin block bg-linear-to-b/srgb from-nav-from to-nav-to px-2 py-[5px] font-body text-2xs font-bold text-white no-underline text-shadow-hard before:text-highlight before:content-['»_'] hover:from-nav-hover-from hover:to-nav-hover-to focus-visible:from-nav-hover-from focus-visible:to-nav-hover-to"
            href={href}
        >
            {label}{' '}
            {isNew && (
                <span className='animate-blink font-ui text-2xs font-bold text-highlight motion-reduce:animate-none'>
                    NEW!
                </span>
            )}
        </a>
    );
}
