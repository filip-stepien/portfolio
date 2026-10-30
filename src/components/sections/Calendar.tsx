import { Box } from '@/components/ui/Box';
import { Button } from '@/components/ui/Button';
import { SmallLink } from '@/components/ui/SmallLink';
import { calendar, person } from '@/data/cv';
import { cn } from '@/lib/utils';

const WEEKDAYS = ['Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'So', 'Nd'];
const LEVEL_CELLS = ['', 'bg-gh-1', 'bg-gh-2', 'bg-gh-3 text-white', 'bg-gh-4 text-white'];
const LEVEL_SWATCHES = ['bg-gh-0', 'bg-gh-1', 'bg-gh-2', 'bg-gh-3', 'bg-gh-4'];

const stepButton = 'px-[5px] py-0 text-2xs leading-[14px]';

function buildWeeks(year: number, month: number) {
    const leadingBlanks = (new Date(year, month, 1).getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    const cells = [...Array<null>(leadingBlanks).fill(null), ...days];

    return Array.from({ length: Math.ceil(cells.length / 7) }, (_, week) =>
        cells.slice(week * 7, week * 7 + 7)
    );
}

export function Calendar() {
    const { year, month, monthLabel, monthTotal, yearTotal } = calendar;

    return (
        <Box id='github' title='Kalendarz'>
            <table className='w-full border-collapse text-center font-ui text-2xs tabular-nums'>
                <caption className='border border-black bg-table-head p-0.5 font-body text-2xs font-bold'>
                    <div className='flex items-center justify-between gap-1'>
                        <Button aria-label='Poprzedni miesiąc' className={stepButton}>
                            «
                        </Button>
                        <span>{monthLabel}</span>
                        <Button aria-label='Następny miesiąc' className={stepButton} disabled>
                            »
                        </Button>
                    </div>
                </caption>
                <thead>
                    <tr>
                        {WEEKDAYS.map(name => (
                            <Weekday key={name} name={name} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {buildWeeks(year, month).map((days, index) => (
                        <Week days={days} key={index} />
                    ))}
                </tbody>
            </table>

            <div
                aria-hidden='true'
                className='mt-1.5 flex items-center justify-center gap-[3px] font-ui text-2xs text-muted'
            >
                mniej
                {LEVEL_SWATCHES.map(swatch => (
                    <LegendSwatch color={swatch} key={swatch} />
                ))}
                więcej
            </div>
            <div
                aria-label='Zegar'
                className='mt-1.5 border-2 border-inset border-chrome bg-black p-[3px] text-center font-pixel text-led text-terminal tabular-nums'
                role='timer'
            >
                --:--:--
            </div>
            <div className='mt-1.5 text-center font-ui text-2xs [&_b]:text-accent'>
                W tym miesiącu: <b>{monthTotal}</b> kontrybucji
                <br />
                Ostatni rok: <b>{yearTotal}</b> kontrybucji
            </div>
            <SmallLink className='mt-1 block text-center' external href={person.githubUrl}>
                » Mój profil na GitHubie
            </SmallLink>
        </Box>
    );
}

function Weekday({ name }: { name: string }) {
    return <th className='border border-divider bg-cal-head py-px font-bold'>{name}</th>;
}

function Week({ days }: { days: (number | null)[] }) {
    return (
        <tr>
            {days.map((day, column) => (
                <Day column={column} day={day} key={column} />
            ))}
        </tr>
    );
}

function Day({ day, column }: { day: number | null; column: number }) {
    const { levels, today } = calendar;

    return (
        <td
            className={cn(
                'border border-cal-line bg-gh-0 py-0.5',
                column > 4 && 'text-alert',
                day !== null && LEVEL_CELLS[levels[day - 1]],
                day !== null && day > today && 'text-ink-faint',
                day === today &&
                    'animate-blink-slow bg-accent font-bold text-white motion-reduce:animate-none'
            )}
        >
            {day}
        </td>
    );
}

function LegendSwatch({ color }: { color: string }) {
    return <i className={cn('size-2.5 border border-divider', color)} />;
}
