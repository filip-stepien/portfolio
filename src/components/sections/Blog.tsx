import { Entry } from '@/components/ui/Entry';
import { Paragraph } from '@/components/ui/Paragraph';
import { SmallLink } from '@/components/ui/SmallLink';
import { posts } from '@/data/cv';
import { Section } from './Section';

export function Blog() {
    return (
        <Section heading='Ostatnie wpisy' id='blog' title='Blog'>
            <div>
                {posts.map(post => (
                    <Post key={post.title} {...post} />
                ))}
            </div>
        </Section>
    );
}

function Post({ date, title, excerpt }: (typeof posts)[number]) {
    return (
        <Entry>
            <p className='mb-[3px] font-ui text-2xs text-muted'>
                <b className='text-accent'>{date}</b>
            </p>
            <h3 className='mb-[3px] font-body text-sm font-bold'>
                <a href='#'>{title}</a>
            </h3>
            <Paragraph className='mb-[3px]'>{excerpt}</Paragraph>
            <SmallLink href='#'>Czytaj dalej »</SmallLink>
        </Entry>
    );
}
