import { HTMLAttributes, ReactNode } from 'react';

export interface TagsProps extends HTMLAttributes<HTMLParagraphElement> {
  tagsData: ReactNode[];
}
