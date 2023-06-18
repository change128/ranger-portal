// 封装一些常用的表单组件
import React from 'react';
import dayjs from 'dayjs';
import { formRules } from './formRules';
import {
  Form,
  FormItemProps,
  Input,
  InputProps,
  Checkbox,
  CheckboxProps,
  InputNumber,
  InputNumberProps,
  Radio,
  RadioGroupProps,
  Select,
  SelectProps,
  DatePicker,
} from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';

const FormItem = Form.Item;
// 便利 formRules  拼接一个is前缀的key

type CustomRule = keyof typeof formRules;

type CommonFormItemProps = Pick<
  FormItemProps,
  | 'label'
  | 'name'
  | 'rules'
  | 'labelCol'
  | 'wrapperCol'
  | 'extra'
  | 'className'
  | 'valuePropName'
  | 'required'
>;

//实现一个HOC 传入一个组件，返回一个FormItem组件包裹的组件并完善类型
const withFormItem =
  <T extends object>() =>
  (Component: React.ComponentType<T>) => {
    return (
      props: CommonFormItemProps &
        T & {
          presetRules?: CustomRule[] | undefined;
        },
    ) => {
      const {
        label,
        name,
        rules,
        labelCol,
        wrapperCol,
        extra,
        className,
        valuePropName = 'value',
        required = false,
        presetRules = [],
        ...formProps
      } = props;

      const formatRules = () => {
        const _rules = rules || [];
        const _presetRules = presetRules.map((rule) => {
          return formRules[rule];
        });

        return [..._presetRules, ..._rules];
      };
      return (
        <FormItem
          required={required}
          label={label}
          name={name}
          rules={formatRules()}
          labelCol={labelCol}
          wrapperCol={wrapperCol}
          extra={extra}
          className={className}
          valuePropName={valuePropName}
        >
          <Component {...(formProps as T)} />
        </FormItem>
      );
    };
  };
export const CommonInput = withFormItem<InputProps>()(Input);
export const CommonInputNumber = withFormItem<InputNumberProps>()(InputNumber);
export const CommonSingleCheckbox = withFormItem<CheckboxProps>()(Checkbox);
export const CommonCheckboxGroup = withFormItem<CheckboxGroupProps>()(
  Checkbox.Group,
);
export const CommonRadioGroup = withFormItem<RadioGroupProps>()(Radio.Group);
export const CommonSingleSelect = withFormItem<SelectProps>()(Select);
export const CommonMultipleSelect = withFormItem<Omit<SelectProps, 'mode'>>()(
  (props) => {
    return <Select mode="multiple" {...props}></Select>;
  },
);
export const TimeRangePicker = withFormItem<RangePickerProps<dayjs.Dayjs>>()(
  DatePicker.RangePicker,
);
const DP = DatePicker.RangePicker;
