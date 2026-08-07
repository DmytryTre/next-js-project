import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface LikeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
