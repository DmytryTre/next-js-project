import getPosts from '@/api/posts';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Htag, LikeCounterButton, P } from '@/components';
import { LikeBlog } from '../components/LikeBlog/LikeBlog';
import styles from './page.module.css';
import getComments from '@/api/comments';
import { PageInfo, Comment, CommentForm } from '../components';

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;

  const id = resolvedParams.id;

  const post = await getPosts(id);

  return {
    title: post?.title || 'Пост',
  };
}

export default async function PageCourses({ params }: Props) {
  const { id } = await params;

  const [post, comments] = await Promise.all([getPosts(id), getComments(id)]);

  const tags: ReactNode[] = [
    <P size="s" key="title">
      Front-end
    </P>,
    <P size="s" key="date">
      1 месяц назад
    </P>,
    <P size="s" key="min">
      3 минуты
    </P>,
    <LikeCounterButton key="like">
      <P size="s">1</P>
    </LikeCounterButton>,
  ];

  return (
    <div className={styles.container}>
      {post && <PageInfo tags={tags} {...post} />}
      <LikeBlog id={id} />
      <Htag Tag="h2">Комментарии</Htag>
      {comments && comments.map((c) => <Comment key={c.id} {...c} />)}
      <CommentForm blogId={id} />
    </div>
  );
}
