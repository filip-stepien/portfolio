import { Box } from '@/components/ui/Box';
import { Button } from '@/components/ui/Button';
import { person } from '@/data/cv';

export function ContactDetails() {
    return (
        <Box title='Dane kontaktowe'>
            <div className='grid justify-items-start gap-1.5 font-ui text-xs'>
                <div
                    aria-hidden='true'
                    className='grid h-16 place-items-center justify-self-center perspective-[300px]'
                >
                    <span className='wordart-chrome animate-spin-y font-word text-[54px]/none font-black motion-reduce:animate-none'>
                        @
                    </span>
                </div>
                <span>E-mail:</span>
                <code className='border border-black bg-surface-code px-1 py-0.5 font-mono text-2xs wrap-anywhere select-all'>
                    {person.email}
                </code>
                <Button>Kopiuj adres</Button>
            </div>
        </Box>
    );
}
