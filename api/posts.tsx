import { API } from '@/app/api';
import { Post } from '@/interfaces/blog.interface';

export default async function getPosts(id?: string): Promise<Post[] | null> {
  const url = id ? `${API.blog.posts}/${id}` : API.blog.posts;

  const res = await fetch(url, { next: { revalidate: 10 } });

  if (!res.ok) {
    return null;
  }

  return res.json();
}
