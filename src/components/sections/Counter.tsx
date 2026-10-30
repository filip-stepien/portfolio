import { Box } from '@/components/ui/Box';
import { pageStatus } from '@/data/cv';

const COUNTER_DIGITS = 6;

export function Counter() {
    const { visitorNumber } = pageStatus;
    const digits = String(visitorNumber).padStart(COUNTER_DIGITS, '0').split('');

    return (
        <Box tint title='Licznik'>
            <div aria-label='Licznik odwiedzin' className='flex justify-center gap-0.5' role='img'>
                {digits.map((digit, index) => (
                    <Digit key={index} value={digit} />
                ))}
            </div>
            <div className='mt-1 text-center font-ui text-2xs'>
                Jesteś <b>{visitorNumber}</b> gościem!
            </div>
        </Box>
    );
}

function Digit({ value }: { value: string }) {
    return (
        <span className='border border-ink-soft bg-black px-1 py-0.5 font-pixel text-led text-terminal tabular-nums'>
            {value}
        </span>
    );
}
