import React from 'react';
import { FormWrapper } from '@/components/Common/FormWrapper';
import {
  CommonInput,
  CommonInputNumber,
  CommonSingleSelect,
  CommonMultipleSelect,
  CommonRadioGroup,
  CommonCheckboxGroup,
  CommonSingleCheckbox,
  TimeRangePicker,
} from '@/components/Common/CommonForm';

export default () => {
  const formLayout = {
    labelCol: { span: 4, offset: 4 },
    wrapperCol: { span: 8 },
  };
  const cityOptions = [
    { label: '北京', value: 'beijing' },
    { label: '上海', value: 'shanghai' },
    { label: '广州', value: 'guangzhou' },
    { label: '深圳', value: 'shenzhen' },
  ];
  const mansOptions = [
    { label: '张三', value: 'zhangsan' },
    { label: '李四', value: 'lisi' },
    { label: '王五', value: 'wangwu' },
  ];
  const formatData = (values: any) => {
    console.log('values', values);
    return values;
  };
  return (
    <FormWrapper {...formLayout} formatData={formatData}>
      <CommonInput label="文本输入" name="name" presetRules={['chinese']} />
      <CommonInputNumber
        presetRules={['number']}
        label="数字输入"
        name="test"
        style={{
          width: '100%',
        }}
      />
      <CommonSingleSelect
        label="单选下拉框"
        name={'city'}
        options={cityOptions}
      />
      <CommonMultipleSelect
        label="多选下拉框"
        name={'citys'}
        options={cityOptions}
      />
      <CommonRadioGroup label="多选Radio" name="mans" options={mansOptions} />
      <CommonCheckboxGroup
        label="多选CheckBox"
        name="girls"
        options={mansOptions}
      />
      <CommonSingleCheckbox
        valuePropName="checked"
        label="单选"
        name={'flag'}
      />
      <TimeRangePicker label="时间" showTime name={'timer'} />
    </FormWrapper>
  );
};
