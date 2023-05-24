import React, { ReactNode, useState, useRef } from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import { Tabs } from 'antd';
type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const onFinish = (values: any) => {
  console.log('Received values of form:', values);
};

const TabForm: ReactNode = (
  <Form.List name="users">
    {(fields, { add, remove }) => (
      <>
        {fields.map(({ key, name, ...restField }) => (
          <Space
            key={key}
            style={{ display: 'flex', marginBottom: 8 }}
            align="baseline"
          >
            <Form.Item
              {...restField}
              name={[name, 'first']}
              rules={[{ required: true, message: 'Missing first name' }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              {...restField}
              name={[name, 'last']}
              rules={[{ required: true, message: 'Missing last name' }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
            <MinusCircleOutlined onClick={() => remove(name)} />
          </Space>
        ))}
        <Form.Item>
          <Button
            type="dashed"
            onClick={() => add()}
            block
            icon={<PlusOutlined />}
          >
            Add field
          </Button>
        </Form.Item>
      </>
    )}
  </Form.List>
);

const initialItems = [
  { label: 'Tab 1', children: () => <TabForm />, key: '1' },
];

const App: React.FC = () => {
  const [items, setItems] = useState(initialItems);
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const newTabIndex = useRef(0);
  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };
  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: `Tab${items.length + 1}`,
      children: TabForm,
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      >
        <Tabs
          type="editable-card"
          onChange={onChange}
          activeKey={activeKey}
          onEdit={onEdit}
          items={items}
        />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
