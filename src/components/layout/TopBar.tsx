import { pageStatus } from '@/data/cv';

export function TopBar() {
    return (
        <div className='flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 font-ui text-2xs text-haze'>
            <span className='[&_a]:text-highlight'>
                <a href='#'>Dodaj do ulubionych</a> | <a href='#'>Ustaw jako stronę startową</a>
            </span>
            <span>{pageStatus.today}</span>
        </div>
    );
}
