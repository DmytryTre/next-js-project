import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,
  icon: Icon, // Забираем иконку и переименовываем с большой буквы
  ...props
}: ButtonProps): React.ReactElement => (
  <button
    className={cn(styles.button, className, {
      [styles[appearance]]: appearance,
      [styles.iconOnly]: !children && Icon,
    })}
    {...props}
  >
    {Icon && (
      <span className={styles.iconWrapper}>
        <Icon />
      </span>
    )}

    {children && <span className={styles.text}>{children}</span>}

    {arrow !== 'none' && (
      <span className={cn(styles.arrow, { [styles[arrow]]: arrow })}>
        <ArrowIcon />
      </span>
    )}
  </button>
);
