import React from 'react';
import { FormItemProps, InputNumber, InputNumberProps, Form } from 'antd';
const FormItem = Form.Item;

/** 通用数字输入组件 */
interface CommonNumberProps extends InputNumberProps {
  fieldName: string;
  label?: string;
  wrapperProps?: FormItemProps;
}
export const CommonNumber: React.FC<CommonNumberProps> = (props) => {
  const { fieldName, label, wrapperProps, ...rest } = props;
  return (
    <FormItem name={fieldName} label={label} {...wrapperProps}>
      <InputNumber {...rest} />
    </FormItem>
  );
};
