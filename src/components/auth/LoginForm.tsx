import React, { FC } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { setCookie } from 'nookies';

import s from './Auth.module.scss';
import { LoginFormDTO } from '@/api/dto/auth.dto';
import * as Api from '@/api';

export const LoginForm: FC = () => {
  const onSubmit = async (values: LoginFormDTO) => {
    try {
      const { token } = await Api.auth.login(values);

      notification.success({
        message: 'Success!',
        description: 'Going to admin-panel...',
        duration: 2,
      });

      setCookie(null, '_token', token, {
        path: '/',
      });
      location.href = '/dashboard';
    } catch (error) {
      console.warn('LoginForm', error);

      notification.error({
        message: 'Error!',
        description: 'Wrong email or password',
        duration: 2,
      });
    }
  };

  return (
    <div className={s.formBlock}>
      <Form name="basic" labelCol={{ span: 8 }} onFinish={onSubmit}>
        <Form.Item
          label="E-Mail"
          name="email"
          rules={[{ required: true, message: 'Email is required' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Password is required',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
