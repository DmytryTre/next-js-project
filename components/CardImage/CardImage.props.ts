import { ImageProps } from 'next/image';

export interface CardImageProps extends Partial<ImageProps> {
  source: string;
  size?: 's' | 'm';
}
