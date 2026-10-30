import { person } from '@/data/cv';
import { LangSwitch } from './LangSwitch';
import { Marquee } from './Marquee';

export function Banner() {
    return (
        <header className='grid min-w-0 grid-cols-[minmax(0,1fr)] border-2 border-outset border-chrome shadow-box'>
            <div className='relative bg-banner px-7 py-[30px] max-sm:px-3 max-sm:pt-9 max-sm:pb-6 max-sm:text-center'>
                <LangSwitch />
                <h1 className='wordart font-word text-[clamp(32px,7vw,56px)] leading-[1.15] font-black tracking-[-1px]'>
                    {person.name}
                </h1>
                <p className='wordart-subtitle mt-3 font-serif text-[clamp(18px,5vw,25px)]/[1.3] font-bold tracking-[0.5px] italic'>
                    {person.tagline}
                </p>
            </div>
            <Marquee />
        </header>
    );
}
