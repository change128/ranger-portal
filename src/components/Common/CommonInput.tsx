import React from 'react';
import { Input, Form, FormItemProps, InputProps } from 'antd';
const FormItem = Form.Item;
/** 通用Input组件 */
interface CommonInputProps extends InputProps {
  fieldName: string;
  label?: string;
  wrapperProps?: FormItemProps;
}
export const CommonInput: React.FC<CommonInputProps> = (props) => {
  const { fieldName, label, wrapperProps, ...rest } = props;
  return (
    <FormItem name={fieldName} label={label} {...wrapperProps}>
      <Input {...rest} />
    </FormItem>
  );
};
