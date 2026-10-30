import { Table } from '@/components/ui/Table';
import { experience } from '@/data/cv';
import { Section } from './Section';

const rows = experience.map(job => {
    const when = <b className='whitespace-nowrap text-accent'>{job.when}</b>;
    const where = (
        <>
            <b>{job.company}</b>
            <br />
            {job.place}
        </>
    );

    return [when, where, job.description];
});

export function Experience() {
    return (
        <Section heading='Gdzie pracowałem' id='doswiadczenie' title='Doświadczenie'>
            <Table headers={['Kiedy', 'Gdzie', 'Co robiłem']} rows={rows} variant='horizontal' />
        </Section>
    );
}
