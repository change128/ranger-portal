import React, { PropsWithChildren, ReactElement, useEffect } from 'react';
import { Form, Button, Row, Col, Card, Space } from 'antd';
import qs from 'query-string';
import _ from 'lodash';

export const SearchFormWrapper: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [form] = Form.useForm();
  const appendToQuery = (values: any) => {
    const currentUrl = window.location.href;
    const { query, url } = qs.parseUrl(currentUrl);
    const newQuery = _.merge(query, values);
    const newUrl = qs.stringifyUrl({ url, query: newQuery });
    window.history.pushState({}, '', newUrl);
  };
  const onFinish = (values: any) => {
    appendToQuery(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const searchForms = () => {
    return React.Children.map(children, (child) => {
      return <Col span={6}>{child}</Col>;
    });
  };
  useEffect(() => {
    const currentUrl = window.location.href;
    const { query } = qs.parseUrl(currentUrl);
    form.setFieldsValue(query);
  }, []);
  return (
    <Card>
      <Form
        onFinish={onFinish}
        form={form}
        onValuesChange={() => {
          console.log(form.getFieldsValue());
        }}
      >
        <Row gutter={12}>{searchForms()}</Row>
        <Row>
          <Col span={6}>
            <Space>
              <Button type="primary" htmlType="submit">
                搜索
              </Button>
              <Button danger onClick={onReset}>
                重置
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
