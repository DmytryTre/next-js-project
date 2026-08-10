import { ButtonHTMLAttributes, ReactNode } from 'react';

type isPress = boolean;
export interface LikeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPress?: isPress;
  onToggleLike?: (isPress: isPress) => void;
}
