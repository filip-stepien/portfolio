import { Banner } from '@/components/layout/Banner';
import { Column } from '@/components/layout/Column';
import { Footer } from '@/components/layout/Footer';
import { Nav } from '@/components/layout/Nav';
import { TopBar } from '@/components/layout/TopBar';
import { About } from '@/components/sections/About';
import { Blog } from '@/components/sections/Blog';
import { Calendar } from '@/components/sections/Calendar';
import { Contact } from '@/components/sections/Contact';
import { ContactDetails } from '@/components/sections/ContactDetails';
import { Counter } from '@/components/sections/Counter';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Links } from '@/components/sections/Links';
import { News } from '@/components/sections/News';
import { Poll } from '@/components/sections/Poll';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';

export default function HomePage() {
    return (
        <div className='mx-auto grid max-w-250 gap-3' id='top'>
            <TopBar />
            <Banner />

            <div className='grid grid-cols-[190px_minmax(0,1fr)_220px] items-start gap-3 max-md:grid-cols-[minmax(0,1fr)]'>
                <Column side='left'>
                    <Nav />
                    <News />
                    <Links />
                    <Poll />
                </Column>

                <Column as='main' side='center'>
                    <About />
                    <Skills />
                    <Experience />
                    <Education />
                    <Projects />
                    <Blog />
                    <Contact />
                </Column>

                <Column as='aside' side='right'>
                    <Counter />
                    <ContactDetails />
                    <Calendar />
                </Column>
            </div>

            <Footer />
        </div>
    );
}
