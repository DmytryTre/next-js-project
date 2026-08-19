import { Post } from '@/interfaces/blog.interface';
import { ReactNode } from 'react';

export interface PageInfoProps extends Post {
  tags: ReactNode[];
}
