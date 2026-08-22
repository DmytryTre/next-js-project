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
    <main id="main-content" tabIndex={-1} className={styles.main}>
      <ul className={styles.postsList} aria-label="Список публикаций блога">
        {posts?.map((item) => {
          return (
            <li key={item.id}>
              <BlogCard post={item} tags={tags} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
