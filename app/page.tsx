import { BlogCard } from '@/components';
import Styles from './layout.module.css';

export default function Home() {
  return (
    <main className={Styles.main}>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </main>
  );
}
