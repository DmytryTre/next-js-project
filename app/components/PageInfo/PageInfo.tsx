import { CardImage, Htag, P, Tags } from '@/components';
import { PageInfoProps } from './PageInfo.props';

export const PageInfo = ({ title, body, tags }: PageInfoProps) => (
  <>
    <Htag Tag="h1">{title}</Htag>
    <Tags tagsData={tags} />
    <CardImage
      source="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      width={330}
      height={300}
    />
    <P>{body}</P>
  </>
);
