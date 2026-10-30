import { cn } from '@/lib/utils';

const variants = {
    source: { badge: 'bg-black text-terminal', icon: 'bg-terminal text-black' },
    w3c: { badge: 'bg-[#005a9c] text-white', icon: 'bg-white text-[#2e8b2e]' },
    speed: { badge: 'bg-white text-[#1a73e8]', icon: 'bg-[#1a73e8] text-[10px] text-white' }
};

type BadgeProps = {
    variant: keyof typeof variants;
    icon: string;
    label: string;
    href: string;
};

// classic 88x31 web button
export function Badge({ variant, icon, label, href }: BadgeProps) {
    const { badge: badgeClass, icon: iconClass } = variants[variant];

    return (
        <a
            className={cn(
                'grid h-[31px] w-[88px] grid-cols-[26px_1fr] overflow-hidden border border-black font-body text-[9px]/none font-bold no-underline hover:outline-1 hover:outline-offset-2 hover:outline-white hover:outline-dotted focus-visible:outline-white',
                badgeClass
            )}
            href={href}
            rel='noopener'
            target='_blank'
        >
            <span className={cn('grid place-items-center font-word text-sm font-bold', iconClass)}>
                {icon}
            </span>
            <span className='grid place-items-center p-px text-center leading-[1.15]'>{label}</span>
        </a>
    );
}
