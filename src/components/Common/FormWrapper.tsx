import React, { PropsWithChildren } from 'react';
import {
  Form,
  Typography,
  Button,
  Space,
  Modal,
  FormProps,
  FormInstance,
} from 'antd';
const FormItem = Form.Item;

/** 表单组件 */
interface FormWrapperProps extends FormProps {
  title?: string;
  showButton?: boolean;
  onSubmitCB?: (value: any) => void;
  form?: FormInstance;
}

export const FormWrapper: React.FC<PropsWithChildren<FormWrapperProps>> = (
  props,
) => {
  const { children, title = '', form, showButton = true, ...rest } = props;
  const resetFormData = () => {
    Modal.confirm({
      title: '确定要重置表单吗？',
      onOk: () => {
        form!.resetFields();
      },
    });
  };
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <>
      <Typography.Title level={3}>{title}</Typography.Title>
      <Form {...rest} form={form} onFinish={onFinish}>
        {children}
        {showButton && (
          <FormItem>
            <Space>
              <Button htmlType="submit">提交</Button>
              <Button onClick={resetFormData}>重置</Button>
              <Button
                onClick={() => {
                  history.back();
                }}
              >
                取消
              </Button>
            </Space>
          </FormItem>
        )}
      </Form>
    </>
  );
};
