import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type TableProps = {
    /** horizontal: headers in the top row, vertical: headers in the first column */
    variant: 'horizontal' | 'vertical';
    headers: string[];
    rows: ReactNode[][];
};

const headerCell = 'border border-black bg-table-head px-1.5 py-1 text-left align-top font-ui';

export function Table({ variant, headers, rows }: TableProps) {
    return (
        <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-compact'>
                {variant === 'horizontal' && (
                    <thead>
                        <tr>
                            {headers.map(header => (
                                <ColumnHeader key={header} label={header} />
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody>
                    {rows.map((cells, index) => (
                        <Row
                            cells={cells}
                            header={variant === 'vertical' ? headers[index] : undefined}
                            key={index}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ColumnHeader({ label }: { label: string }) {
    return (
        <th className={headerCell} scope='col'>
            {label}
        </th>
    );
}

function Row({ header, cells }: { header?: string; cells: ReactNode[] }) {
    return (
        <tr>
            {header && (
                <th
                    className={cn(headerCell, 'w-[110px] whitespace-nowrap max-sm:w-auto')}
                    scope='row'
                >
                    {header}
                </th>
            )}
            {cells.map((cell, index) => (
                <Cell key={index}>{cell}</Cell>
            ))}
        </tr>
    );
}

function Cell({ children }: { children: ReactNode }) {
    return (
        <td className='border border-divider p-1.5 align-top in-[tr:nth-child(even)]:bg-surface-tint'>
            {children}
        </td>
    );
}
