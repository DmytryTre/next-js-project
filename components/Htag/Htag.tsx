import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

export const Htag = ({
  Tag = 'h2',
  children,
  maxLength,
  ...props
}: HtagProps): React.ReactElement => {
  const isString = typeof children === 'string';
  const shouldTruncate =
    maxLength !== undefined && isString && children.length > maxLength;

  const content = shouldTruncate
    ? (children as string).slice(0, maxLength) + '...'
    : children;

  return (
    <Tag
      className={styles[Tag]}
      title={shouldTruncate ? (children as string) : undefined}
      {...props}
    >
      {content}
    </Tag>
  );
};
