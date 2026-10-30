import { education } from '@/data/cv';
import { Section } from './Section';

const star = 'animate-blink text-star not-italic motion-reduce:animate-none';

export function Education() {
    return (
        <Section heading='Gdzie się uczyłem' id='wyksztalcenie' title='Wykształcenie'>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5'>
                {education.map(item => (
                    <EducationItem key={item.when} {...item} />
                ))}
            </div>
        </Section>
    );
}

function EducationItem({ when, school, field, honors }: (typeof education)[number]) {
    return (
        <fieldset className='border-2 border-groove border-chrome px-3 pt-2 pb-3 text-compact'>
            <legend className='px-1 font-ui text-2xs font-bold text-accent'>{when}</legend>
            <b>
                {school.map((line, index) => (
                    <SchoolLine broken={index > 0} key={line} line={line} />
                ))}
            </b>
            <br />
            {field}
            {honors && (
                <>
                    <br />
                    ukończone{' '}
                    <span className='font-bold text-alert'>
                        <i aria-hidden='true' className={star}>
                            ★
                        </i>{' '}
                        z wyróżnieniem{' '}
                        <i aria-hidden='true' className={star}>
                            ★
                        </i>
                    </span>
                </>
            )}
        </fieldset>
    );
}

function SchoolLine({ line, broken }: { line: string; broken: boolean }) {
    return (
        <>
            {broken && <br />}
            {line}
        </>
    );
}
