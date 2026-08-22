'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import styles from './Up.module.css';
import UpIcon from './up.svg';

export const Up = (): React.ReactElement => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [0, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      aria-label="Наверх"
      className={styles.up}
      style={{ opacity }}
      onClick={scrollToTop}
    >
      <UpIcon aria-hidden="true" />
    </motion.button>
  );
};
