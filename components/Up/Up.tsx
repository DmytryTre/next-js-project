'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Up.module.css';
import UpIcon from './up.svg';

export const Up = (): React.ReactElement => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const visibility = useTransform(scrollY, (value) => (value > 0 ? 'visible' : 'hidden'));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      className={styles.up}
      style={{ opacity, visibility }}
      onClick={scrollToTop}
      aria-label="Наверх"
    >
      <UpIcon />
    </motion.button>
  );
};
