import Link from 'next/link';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,
  icon: Icon,
  href,
  ...props
}: ButtonProps): React.ReactElement => {
  const buttonClass = cn(styles.button, className, {
    [styles[appearance]]: appearance,
    [styles.iconOnly]: !children && Icon,
  });

  const renderContent = () => (
    <>
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
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClass} {...(props as any)}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {renderContent()}
    </button>
  );
};
