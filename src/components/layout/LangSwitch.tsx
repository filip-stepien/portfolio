import type { ComponentProps } from 'react';

import { BritishFlagIcon } from '@/components/icons/BritishFlagIcon';
import { PolishFlagIcon } from '@/components/icons/PolishFlagIcon';

function FlagButton(props: ComponentProps<'button'>) {
    return (
        <button
            className='cursor-pointer border border-transparent bg-transparent p-px leading-0 aria-pressed:border-highlight [&_svg]:block [&_svg]:h-[13px] [&_svg]:w-5 [&_svg]:ring-1 [&_svg]:ring-black'
            title={props['aria-label']}
            type='button'
            {...props}
        />
    );
}

export function LangSwitch() {
    return (
        <span className='absolute top-1.5 right-2 inline-flex gap-1'>
            <FlagButton aria-label='Polski' aria-pressed='true'>
                <PolishFlagIcon />
            </FlagButton>
            <FlagButton aria-label='English' aria-pressed='false'>
                <BritishFlagIcon />
            </FlagButton>
        </span>
    );
}
