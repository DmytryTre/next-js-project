import { TagsProps } from './Tags.props';
import styles from './Tags.module.css';
import cn from 'classnames';
import { P } from '@/components';

export const Tags = ({ tagsData, ...props }: TagsProps): React.ReactElement => (
  <div className={cn(styles.container, { ...props })}>
    {tagsData.map((item, index) => {
      return (
        <div key={index} className={styles.tag}>
          {item}
        </div>
      );
    })}
  </div>
);
