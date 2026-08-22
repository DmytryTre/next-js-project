import { TagsProps } from './Tags.props';
import styles from './Tags.module.css';
import cn from 'classnames';

export const Tags = ({ tagsData, ...props }: TagsProps): React.ReactElement => (
  <ul className={cn(styles.container, { ...props })}>
    {tagsData.map((item, index) => {
      return (
        <li key={index} className={styles.tag}>
          {item}
        </li>
      );
    })}
  </ul>
);
