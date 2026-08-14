import { BlogCard } from '@/components';
import Styles from './layout.module.css';
import getPosts from '@/api/posts';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className={Styles.main}>
      {posts?.map((item) => (
        <BlogCard key={item.id} post={item} />
      ))}
    </main>
  );
}
