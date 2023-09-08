import { GetServerSidePropsContext, NextPage } from 'next';
import { checkAuth } from '@/utils/checkAuth';
import React from 'react';
import { Layout } from '@/layouts/Layout';

import * as Api from '@/api';
import { FileItem } from '@/api/dto/files.dto';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { FileList } from '@/components/FileList';

interface Props {
  items: FileItem[];
}

const DashboardPhotos: NextPage<Props> = ({ items }) => {
  return (
    <DashboardLayout>
      <FileList items={items} />
    </DashboardLayout>
  );
};

DashboardPhotos.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard / Photos">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }

  try {
    const items = await Api.files.getAll('photos');

    return {
      props: {
        items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: { items: [] },
    };
  }
};

export default DashboardPhotos;
