'use client';

import { useState } from 'react';
import { LikeButton, P } from '@/components';
import { LikeBlogProps } from './LikeBlog.props';
import styles from './LikeBlog.module.css';

export const LikeBlog = ({ id }: LikeBlogProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleToggleLike = (nextState: boolean) => {
    setIsLiked(nextState);
  };

  return (
    <div className={styles.container}>
      <P>Понравилось? Жми</P>
      <LikeButton isPress={isLiked} onToggleLike={handleToggleLike} />
    </div>
  );
};
