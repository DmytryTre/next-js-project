import { CardImageProps } from './CardImage.props';
import styles from './CardImage.module.css';
import Image from 'next/image';

export const CardImage = ({
  source,
  size = 's',
  ...props
}: CardImageProps): React.ReactElement => (
  <div className={styles[size]}>
    <Image src={source} alt="card image" {...props} />
  </div>
);
