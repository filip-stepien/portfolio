import { Box } from '@/components/ui/Box';
import { Button } from '@/components/ui/Button';
import { poll } from '@/data/cv';

export function Poll() {
    return (
        <Box tint title='Sonda'>
            <form className='grid gap-1.5 font-ui text-xs'>
                <p className='mb-2.5 font-bold'>{poll.question}</p>
                {poll.options.map(option => (
                    <PollOption key={option.id} {...option} />
                ))}
                <Button className='mt-1.5 justify-self-start'>Głosuj!</Button>
            </form>
        </Box>
    );
}

function PollOption({ id, label }: (typeof poll.options)[number]) {
    return (
        <label className='flex items-start gap-1.5'>
            <input className='mt-0.5' name='poll' type='radio' value={id} /> {label}
        </label>
    );
}
