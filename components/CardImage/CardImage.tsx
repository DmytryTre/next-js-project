import { CardImageProps } from './CardImage.props';
import styles from './CardImage.module.css';

export const CardImage = ({ source, size = 's' }: CardImageProps): React.ReactElement => (
  <div className={styles[size]}>
    <img src={source} alt="card image" />
  </div>
);
