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
  form?: FormInstance;
  // 格式化表单数据
  formatData?: (values?: any) => any;
}

export const FormWrapper: React.FC<PropsWithChildren<FormWrapperProps>> = (
  props,
) => {
  const {
    children,
    title = '',
    form,
    showButton = true,
    formatData = () => {},
    ...rest
  } = props;
  const resetFormData = () => {
    Modal.confirm({
      title: '确定要重置表单吗？',
      onOk: () => {
        form!.resetFields();
      },
    });
  };
  const onFinish = (values: any) => {
    return formatData(values);
  };

  return (
    <>
      <Typography.Title level={3}>{title}</Typography.Title>
      <Form {...rest} form={form} onFinish={onFinish}>
        {children}
        {showButton && (
          <FormItem label=" " colon={false}>
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
