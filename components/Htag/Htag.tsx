import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

export const Htag = ({ Tag = 'h2', children }: HtagProps): React.ReactElement => (
  <Tag className={styles[Tag]}>{children}</Tag>
);
