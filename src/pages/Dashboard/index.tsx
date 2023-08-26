import { SearchFormWrapper } from '@/components/Common/SearchFormWrapper';
import { CommonInput } from '@/components/Common/CommonForm';
import { CommonMultipleSelect } from '@/components/Common/CommonForm';
import { CommonSingleSelect } from '@/components/Common/CommonForm';
import { Form } from 'antd';
const SearchForm = () => {
  return (
    <SearchFormWrapper>
      <CommonInput name={'name'} label="名字" />
      <CommonSingleSelect
        name={'user'}
        label={'用户'}
        options={[
          {
            label: '张三',
            value: '1',
          },
          {
            label: '李四',
            value: '2',
          },
        ]}
      />
    </SearchFormWrapper>
  );
};

const Dashboard: React.FC = () => {
  return <Form></Form>;
};

export default Dashboard;
