import { P, Tags } from '@/components';
import styles from './Comment.module.css';
import { CommentModel } from '@/interfaces/page.interface';
import { ReactNode } from 'react';

export const Comment = ({ name, email, body }: CommentModel) => {
  const tags: ReactNode[] = [
    <P className={styles.name} size="s" key="title">
      {name}
    </P>,
    <P className={styles.email} size="s" key="date">
      {email}
    </P>,
  ];
  return (
    <div className={styles.container}>
      <Tags tagsData={tags} />
      <P size="m">{body}</P>
    </div>
  );
};
