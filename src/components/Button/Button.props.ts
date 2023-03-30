import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'header-btn' | 'hero-black' | 'hero-ghost' | 'card-btn' | 'footer-btn'| 'orange-btn'
    children: ReactNode;
}