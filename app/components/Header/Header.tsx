import { Htag } from '@/components';
import Styles from './Header.module.css';
import { GithubButton } from '..';

export const Header = () => {
  return (
    <header className={Styles.header}>
      <Htag Tag="h1">Мой блог</Htag>
      <GithubButton />
    </header>
  );
};
