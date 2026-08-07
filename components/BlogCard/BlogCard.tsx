import { BlogCardProps } from './BlogCard.props';
import styles from './BlogCard.module.css';
import { Button, CardImage, Htag, LikeButton, P, Tags } from '@/components';
import { ReactNode } from 'react';

export const BlogCard = ({}: BlogCardProps): React.ReactElement => {
  const myElements: ReactNode[] = [
    <P size="s" className={styles.tagTitle}>
      Front-end
    </P>,
    <P size="s">1 месяц назад</P>,
  ];

  return (
    <div className={styles.container}>
      <CardImage source="./" />
      <div className={styles.header}>
        <Tags tagsData={myElements} />
        <LikeButton>
          <P size="s">1</P>
        </LikeButton>
      </div>
      <Htag Tag="h3">Как работать с CSS Grid</Htag>
      <P size="m">
        Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS.
        Гриды подойдут и для верстки основных областей страницы..
      </P>
      <div className={styles.footer}>
        <P size="s">3 минуты</P>
        <Button appearance="ghost" arrow="right">
          Перейти
        </Button>
      </div>
    </div>
  );
};
