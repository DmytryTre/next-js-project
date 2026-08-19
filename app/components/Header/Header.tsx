import { Htag } from '@/components';
import styles from './Header.module.css';
import { GithubButton } from '..';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Htag Tag="h1">Мой блог</Htag>
      <GithubButton />
    </header>
  );
};
