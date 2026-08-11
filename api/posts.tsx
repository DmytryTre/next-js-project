import { API } from '@/app/api';
import { Post } from '@/interfaces/blog.interface';

export default async function getPosts(): Promise<Post[] | null> {
  const res = await fetch(API.blog.posts, { next: { revalidate: 10 } });

  if (!res.ok) {
    return null;
  }

  return res.json();
}
