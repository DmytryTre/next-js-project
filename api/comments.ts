import { API } from '@/app/api';
import { CommentModel } from '@/interfaces/page.interface';

export default async function getComments(
  postId?: string,
): Promise<CommentModel[] | null> {
  const url = `${API.blog.comments}?postId=${postId}`;

  const res = await fetch(url, { next: { revalidate: 10 } });

  if (!res.ok) {
    return null;
  }

  return res.json();
}
