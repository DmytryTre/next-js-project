import { BlogCardProps } from './BlogCard.props';
import styles from './BlogCard.module.css';
import { Button, CardImage, Htag, LikeCounterButton, P, Tags } from '@/components';

export const BlogCard = ({ post, tags }: BlogCardProps): React.ReactElement => (
  <div className={styles.container}>
    <CardImage
      source="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      width={330}
      height={190}
    />

    <Tags tagsData={tags} />
    <LikeCounterButton>
      <P size="s">1</P>
    </LikeCounterButton>

    <Htag Tag="h4" maxLength={30}>
      {post.title}
    </Htag>
    <P size="m">{post.body}</P>

    <P size="s">3 минуты</P>
    <Button appearance="ghost" arrow="right" href={`${post.id}`}>
      Перейти
    </Button>
  </div>
);
