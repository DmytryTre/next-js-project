import { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  appearance: 'ghost' | 'primary';
  icon?: ElementType;
  arrow?: 'right' | 'none';
}
