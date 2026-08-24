import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from './components';
import styles from './layout.module.css';
import { Up } from '@/components/Up/Up';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Главная страница блога',
};
export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={styles.body}>
        <a href="#main-content" className={styles.skipLink}>
          Перейти к основному содержимому
        </a>
        <Header />
        {children}
        <Up />
      </body>
    </html>
  );
}
