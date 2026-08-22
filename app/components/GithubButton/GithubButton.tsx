import { Button } from '@/components';
import GithubIcon from './github.svg';

export const GithubButton = () => (
  <Button
    aria-label="Ссылка на Github"
    appearance="ghost"
    icon={GithubIcon}
    href="https://github.com/DmytryTre/next-js-project"
  />
);
