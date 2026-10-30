import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// custom sizes have to be registered here, otherwise text-2xs etc. are merged as a text color
const twMerge = extendTailwindMerge({
    extend: {
        theme: {
            text: ['2xs', 'compact', 'led']
        }
    }
});

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
