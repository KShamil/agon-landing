import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface BoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color: 'orange' | 'pink' | 'green' | 'blue';
    children: ReactNode
}