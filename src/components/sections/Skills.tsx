import { Table } from '@/components/ui/Table';
import { skills } from '@/data/cv';
import { Section } from './Section';

export function Skills() {
    return (
        <Section heading='Co umiem' id='umiejetnosci' title='Umiejętności'>
            <Table
                headers={skills.map(skill => skill.label)}
                rows={skills.map(skill => [skill.value])}
                variant='vertical'
            />
        </Section>
    );
}
