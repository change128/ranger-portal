import React, { PropsWithChildren } from 'react';
import { CommonInput } from '@/components/Common/CommonForm';
import { Form, Input } from 'antd';

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  const [form] = Form.useForm();
  const visibleFields = ['name', 'age'];
  const c = () => {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child as React.ReactElement, {
        disabled: !visibleFields.includes(
          (child as React.ReactElement).props.name,
        ),
      });
    });
  };
  return <Form form={form}>{c()}</Form>;
};

const App: React.FC = () => {
  return (
    <Content>
      <CommonInput
        name={'name'}
        label="名字"
        style={{
          width: '100px',
        }}
      />
      <CommonInput name={'age'} label="年龄" />
      <CommonInput name={'group'} label="分组" />
    </Content>
  );
};

export default App;
