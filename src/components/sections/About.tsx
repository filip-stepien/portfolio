import Image from 'next/image';

import portrait from '@/assets/portrait.jpg';
import { FloppyIcon } from '@/components/icons/FloppyIcon';
import { Box } from '@/components/ui/Box';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { person } from '@/data/cv';

export function About() {
    return (
        <Box as='section' id='o-mnie' title='O mnie'>
            <div className='grid grid-cols-[104px_minmax(0,1fr)] items-start gap-3.5 max-sm:grid-cols-[minmax(0,1fr)] max-sm:justify-items-start'>
                <div>
                    <div className='block h-32 w-26 border-3 border-ridge border-chrome bg-surface-photo'>
                        <Image
                            alt={`Zdjęcie: ${person.name}`}
                            className='block size-full object-cover object-[50%_35%]'
                            loading='eager'
                            src={portrait}
                        />
                    </div>
                    <div className='mt-0.5 text-center font-ui text-2xs text-muted'>to ja :)</div>
                </div>
                <div>
                    <Heading>Witam serdecznie!</Heading>
                    <Paragraph>
                        Nazywam się <b>{person.name}</b> i zajmuję się szeroko pojętym
                        programowaniem: tworzę platformy, aplikacje internetowe i mobilne, zarówno
                        od strony frontendu, jak i backendu. Najbardziej lubię pracować z
                        nowoczesnymi technologiami, takimi jak <b>TypeScript</b>, <b>React</b> i{' '}
                        <b>Next.js</b>.
                    </Paragraph>
                    <Paragraph>
                        Jestem otwarty na propozycje współpracy. W razie pytań proszę o kontakt
                        mailowy albo przez formularz na dole strony.
                    </Paragraph>
                    <Paragraph>
                        Pozdrawiam i życzę miłego dnia!
                        <br />
                        {person.name}
                    </Paragraph>
                    <p className='mt-3 mb-0.5 flex flex-wrap items-center gap-1.5 font-ui text-xs font-bold'>
                        <button className='cursor-pointer text-link underline' type='button'>
                            <FloppyIcon className='inline size-4 flex-none align-baseline' />
                            <span>Pobierz CV</span>
                        </button>
                        <span className='font-normal text-muted'>{person.cvPdf.size}</span>
                    </p>
                </div>
            </div>
        </Box>
    );
}
