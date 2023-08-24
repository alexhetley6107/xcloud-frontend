import React, { FC } from 'react';
import s from './Auth.module.scss';
import { Form, Input, Button } from 'antd';

export const LoginForm: FC = () => {
  const onSubmit = async (values: any) => {
    console.log(values);
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
