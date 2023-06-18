import { Topic } from './components/Topic';
import { Typography } from 'antd';
import { Layout } from 'antd';
import { data } from './data';
import { useRequest } from '@umijs/max';

const { Content } = Layout;
const Interview = () => {
  const d = useRequest('https://www.anjuke.com/fangjia/ty2023/');
  console.log(d);
  return (
    <Layout>
      <Content
        style={{
          padding: 24,
          overflow: 'scroll',
          height: 'calc(100vh - 64px)',
        }}
      >
        <Typography.Title level={3}>Interview</Typography.Title>
        {data.map(({ question, answer }, index) => {
          return (
            <Topic question={question} index={index} key={index}>
              {answer}
            </Topic>
          );
        })}
      </Content>
    </Layout>
  );
};

export default Interview;
