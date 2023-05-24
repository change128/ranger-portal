import React from 'react';
import { Form, FormItemProps, CheckboxProps, Checkbox } from 'antd';
const FormItem = Form.Item;

/** 通用数字输入组件 */
interface CommonCheckBoxProps extends CheckboxProps {
  fieldName: string;
  label?: string;
  wrapperProps?: FormItemProps;
}

export const CommonCheckbox: React.FC<CommonCheckBoxProps> = (props) => {
  const { fieldName, label, wrapperProps, ...rest } = props;
  return (
    <FormItem
      name={fieldName}
      label={label}
      valuePropName={'checked'}
      {...wrapperProps}
    >
      <Checkbox {...rest} />
    </FormItem>
  );
};
