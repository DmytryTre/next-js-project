import { BlogCard, P } from '@/components';
import styles from './layout.module.css';
import getPosts from '@/api/posts';
import { ReactNode } from 'react';

export default async function Home() {
  const posts = await getPosts();
  const tags: ReactNode[] = [
    <P size="s" key="title" className={styles.tagTitle}>
      Front-end
    </P>,
    <P size="s" key="date">
      1 месяц назад
    </P>,
  ];

  return (
    <main className={styles.main}>
      {posts?.map((item) => (
        <BlogCard key={item.id} post={item} tags={tags} />
      ))}
    </main>
  );
}
