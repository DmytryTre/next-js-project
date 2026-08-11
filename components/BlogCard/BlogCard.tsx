import { BlogCardProps } from './BlogCard.props';
import styles from './BlogCard.module.css';
import { Button, CardImage, Htag, LikeCounterButton, P, Tags } from '@/components';
import { ReactNode } from 'react';

export const BlogCard = ({ post }: BlogCardProps): React.ReactElement => {
  const myElements: ReactNode[] = [
    <P size="s" className={styles.tagTitle}>
      Front-end
    </P>,
    <P size="s">1 месяц назад</P>,
  ];

  return (
    <div className={styles.container}>
      <CardImage
        source="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        width={330}
        height={190}
      />

      <Tags tagsData={myElements} />
      <LikeCounterButton>
        <P size="s">1</P>
      </LikeCounterButton>

      <Htag Tag="h4">{post.title}</Htag>
      <P size="m">{post.body}</P>

      <P size="s">3 минуты</P>
      <Button appearance="ghost" arrow="right">
        Перейти
      </Button>
    </div>
  );
};
