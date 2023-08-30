import React from 'react';
import { Layout, Avatar, Menu, Popover, Button } from 'antd';
import s from './Header.module.scss';
import { CloudOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import * as Api from '@/api';

export const Header: React.FC = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const onClickLogout = () => {
    Api.auth.logout();
    location.href = '/';
  };

  return (
    <Layout.Header className={s.root}>
      <div className={s.headerInner}>
        <div className={s.headerLeft}>
          <h2>
            <CloudOutlined />
            xCloud
          </h2>

          <Menu
            className={s.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: '/dashboard', label: 'Main' },
              { key: '/dashboard/profile', label: 'Profile' },
            ]}
          />
        </div>

        <div className={s.headerRight}>
          <Popover
            trigger="click"
            content={
              <Button onClick={onClickLogout} type="primary" danger>
                Log Out
              </Button>
            }
          >
            <Avatar>A</Avatar>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  );
};
