import React from 'react';
import { GetServerSidePropsContext, NextPage } from 'next';
import { checkAuth } from '@/utils/checkAuth';
import { Header } from '@/components/Header';

const DashboardPage: NextPage /* <Props> */ = () => {
  return (
    <main>
      <Header />
      <h1>Dashboard</h1>
    </main>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }

  return {
    props: {},
  };
};

export default DashboardPage;
