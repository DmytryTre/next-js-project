import { LikeButton, P } from '@/components';
import { LikeBlogProps } from './LikeBlog.props';
import styles from './LikeBlog.module.css';

export const LikeBlog = ({ id }: LikeBlogProps) => {
  return (
    <div className={styles.container}>
      <P>Понравилось? Жми</P>
      <LikeButton />
    </div>
  );
};
