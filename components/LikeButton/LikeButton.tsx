import styles from './LikeButton.module.css';
import { LikeButtonProps } from './LikeButton.props';
import Like from '../../public/like.svg';
import cn from 'classnames';

export const LikeButton = ({
  isPress = false,
  onToggleLike,
  className,
  ...props
}: LikeButtonProps): React.ReactElement => (
  <button
    type="button"
    onClick={onToggleLike ? () => onToggleLike(!isPress) : undefined}
    aria-label="Поставить лайк"
    aria-pressed={isPress}

    className={cn(styles.button, { [styles.press]: isPress }, className)}
    {...props}
  >
    <span className={styles.like}>
      <Like aria-hidden="true" />{' '}
    </span>
  </button>
);
