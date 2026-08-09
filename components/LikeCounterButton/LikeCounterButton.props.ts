import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface LikeCounterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
