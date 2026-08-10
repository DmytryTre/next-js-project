import styles from './LikeCounterButton.module.css';
import { LikeCounterButtonProps } from './LikeCounterButton.props';
import Like from '../../public/like.svg';
import cn from 'classnames';

export const LikeCounterButton = ({
  children,
  className,
  ...props
}: LikeCounterButtonProps): React.ReactElement => (
  <button className={cn(styles.button, className)} {...props}>
    {children}
    <span className={styles.like}>
      <Like />
    </span>
  </button>
);
