import { Htag } from '@/components';
import styles from './Header.module.css';
import { GithubButton } from '..';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Htag Tag="h1">Мой блог</Htag>
      </Link>
      <GithubButton />
    </header>
  );
};
