import { Form, Input, Layout, Row, Col, Button, FormInstance } from 'antd';
import { useMatch, useNavigate, useLocation } from '@umijs/max';
import React, { useCallback } from 'react';

interface IAuthManagerProps {
  onMainBtnClick: (values: any) => void;
  onSubBtnClick: (values: any) => void;
  form: FormInstance;
}
export interface IFromValues {
  username: string;
  password: string;
}

const LoginBlock: React.FC<IAuthManagerProps> = ({
  form,
  onMainBtnClick,
  onSubBtnClick,
}) => {
  const match = useMatch('/login');

  if (!match) return null;

  return (
    <Form form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
      <Form.Item label="用户名" name={'username'}>
        <Input />
      </Form.Item>
      <Form.Item label="密码" name={'password'}>
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 14,
        }}
      >
        <Row justify={'space-around'}>
          <Col>
            <Button onClick={onMainBtnClick} type="primary">
              登录
            </Button>
          </Col>
          <Col>
            <Button onClick={onSubBtnClick}>去注册</Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};
const RegisterBlock: React.FC<IAuthManagerProps> = ({
  form,
  onMainBtnClick,
  onSubBtnClick,
}) => {
  const match = useMatch('/register');
  if (!match) return null;
  return (
    <Form form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
      <Form.Item label="用户名" name={'username'}>
        <Input />
      </Form.Item>
      <Form.Item label="密码" name={'password'}>
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 14,
        }}
      >
        <Row justify={'space-around'}>
          <Col>
            <Button onClick={onMainBtnClick} type="primary">
              注册
            </Button>
          </Col>
          <Col>
            <Button onClick={onSubBtnClick}>已有账号，去登录</Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

const AuthManager = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const onSubBtnClick = useCallback(() => {
    if (location.pathname === '/login') {
      navigate('/register');
    } else {
      navigate('/login');
    }
  }, [location.pathname]);
  const onMainBtnClick = useCallback(() => {
    if (location.pathname === '/login') {
      form.validateFields().then((values) => {
        console.log(values);
      });
    } else {
      form.validateFields().then((values) => {
        console.log(values);
      });
    }
  }, [location.pathname]);

  return (
    <Layout
      style={{
        width: '600px',
        padding: '30px',
        margin: '0 auto',
        marginTop: '30vh',
      }}
    >
      <Row justify="center">
        <Col span={18}>
          <LoginBlock
            form={form}
            onMainBtnClick={onMainBtnClick}
            onSubBtnClick={onSubBtnClick}
          />
          <RegisterBlock
            form={form}
            onMainBtnClick={onMainBtnClick}
            onSubBtnClick={onSubBtnClick}
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default AuthManager;
