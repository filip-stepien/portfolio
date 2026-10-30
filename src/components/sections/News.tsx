import { Box } from '@/components/ui/Box';
import { Entry } from '@/components/ui/Entry';
import { news } from '@/data/cv';

export function News() {
    return (
        <Box title='Aktualności'>
            {news.map(item => (
                <NewsItem key={item.date} {...item} />
            ))}
        </Box>
    );
}

function NewsItem({ date, text }: (typeof news)[number]) {
    return (
        <Entry className='py-[7px] font-ui text-2xs/[1.45]'>
            <b className='block text-accent'>{date}</b>
            <span>{text}</span>
        </Entry>
    );
}
