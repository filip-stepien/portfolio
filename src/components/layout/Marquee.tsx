import { marquee } from '@/data/cv';

export function Marquee() {
    return (
        <div
            aria-label='Komunikat'
            className='overflow-hidden border-t-2 border-groove border-chrome bg-black font-pixel text-lg/[1.4] whitespace-nowrap text-highlight'
            role='marquee'
        >
            <span className='inline-block animate-marquee pl-[100%] motion-reduce:animate-none motion-reduce:pl-2'>
                {marquee}
            </span>
        </div>
    );
}
