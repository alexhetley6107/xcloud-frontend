import Head from 'next/head';
import { Header } from '@/components/Header';
import React from 'react';

import s from '@/styles/Home.module.scss';

interface LayoutProps {
  title: string;
}

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Header />
        <div className={s.main}>
          <div className={s.layout}>{children}</div>
        </div>
      </main>
    </>
  );
};
