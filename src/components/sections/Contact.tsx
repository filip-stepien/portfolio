import { Button } from '@/components/ui/Button';
import { Field } from '@/components/ui/Field';
import { Input, Textarea } from '@/components/ui/Input';
import { Section } from './Section';

export function Contact() {
    return (
        <Section heading='Napisz do mnie' id='kontakt' title='Kontakt'>
            <hr className='mt-1 mb-3 h-1 border-0 bg-rainbow' />
            <form className='grid max-w-110 gap-2 font-ui text-xs'>
                <Field label='Imię i nazwisko / firma:'>
                    <Input autoComplete='name' maxLength={80} name='name' required />
                </Field>
                <Field label='Twój e-mail:'>
                    <Input
                        autoComplete='email'
                        maxLength={120}
                        name='email'
                        required
                        type='email'
                    />
                </Field>
                <Field label='Wiadomość:'>
                    <Textarea maxLength={2000} name='message' required />
                </Field>
                <div className='flex flex-wrap gap-1.5'>
                    <Button>Wyślij</Button>
                    <Button type='reset'>Wyczyść</Button>
                </div>
            </form>
        </Section>
    );
}
