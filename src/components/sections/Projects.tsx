import { Entry } from '@/components/ui/Entry';
import { Paragraph } from '@/components/ui/Paragraph';
import { projects } from '@/data/cv';
import { Section } from './Section';

export function Projects() {
    return (
        <Section heading='Moje projekty' id='projekty' title='Projekty'>
            <div>
                {projects.map(project => (
                    <Project key={project.title} {...project} />
                ))}
            </div>
        </Section>
    );
}

function Project({ title, description, tech }: (typeof projects)[number]) {
    return (
        <Entry>
            <h3 className="mb-[3px] font-body text-sm font-bold text-heading before:text-accent before:content-['»_']">
                {title}
            </h3>
            <Paragraph className='mb-[3px]'>{description}</Paragraph>
            <Paragraph className='mb-0 font-ui text-2xs text-muted'>
                <b className='text-black'>Technologie:</b> {tech}
            </Paragraph>
        </Entry>
    );
}
