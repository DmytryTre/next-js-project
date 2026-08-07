import styles from './LikeButton.module.css';
import { LikeButtonProps } from './LikeButton.props';
import Like from './like.svg';
import cn from 'classnames';

export const LikeButton = ({
  children,
  className,
  ...props
}: LikeButtonProps): React.ReactElement => (
  <button className={cn(styles.button, className)} {...props}>
    {children}
    <span className={styles.like}>
      <Like />
    </span>
  </button>
);
