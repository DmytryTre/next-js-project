import getPosts from '@/api/posts';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = await getPosts();

  if (!posts) {
    return [];
  }

  return posts.map((post) => ({
    id: String(post.id),
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
  title: 'Страница',
};

export default async function PageCourses({ params }: Props) {
  const { id } = await params;
  const post = await getPosts(id);

  return <div>курсы</div>;
}
