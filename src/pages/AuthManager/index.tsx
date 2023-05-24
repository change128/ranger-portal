import { Form, Input, Row, Col, Button, FormInstance } from 'antd';
import { useMatch, useNavigate, useLocation } from '@umijs/max';
import React, { useCallback } from 'react';
import api from '@/services/meta';
import { message } from 'antd';

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
    <Form form={form} labelCol={{ span: 4 }}>
      <Form.Item name={'username'}>
        <Input placeholder="请输入账号" />
      </Form.Item>
      <Form.Item name={'password'}>
        <Input placeholder="请输入密码" />
      </Form.Item>
      <Form.Item>
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
    <Form form={form} labelCol={{ span: 4 }}>
      <Form.Item name={'username'}>
        <Input placeholder="请输入账号" />
      </Form.Item>
      <Form.Item name={'password'}>
        <Input placeholder="请输入密码" />
      </Form.Item>
      <Form.Item>
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
  const onMainBtnClick = useCallback(async () => {
    if (location.pathname === '/login') {
      try {
        await form.validateFields();
        const values = await form.getFieldsValue();
        const logInfo = await api.AuthController.login(values);

        if (logInfo.state === 'success') {
          message.success('登录成功');
          // 写入token
          localStorage.setItem('ranger_meta', logInfo.data.token);
          window.location.href = '/dashboard';

          return;
        } else {
          message.error(`登录失败 ${logInfo.data.msg}`);
          return;
        }
      } catch (err) {
        message.error('登录失败');
      }
    } else {
      try {
        await form.validateFields();
        const values = await form.getFieldsValue();
        const regInfo = await api.AuthController.register(values);
        if (regInfo.state === 'success') {
          message.success('注册成功');
          navigate('/login');
          return;
        } else {
          message.error(`注册失败 ${regInfo.data.msg}`);
          return;
        }
      } catch (err) {
        message.error('注册失败');
      }
    }
  }, [location.pathname]);

  return (
    <div
      style={{
        width: '400px',
        margin: '0 auto',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: '#eeeeee',
          height: '260px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px',
          paddingBottom: '0',
          boxSizing: 'border-box',
        }}
      >
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
      </div>
    </div>
  );
};

export default AuthManager;
