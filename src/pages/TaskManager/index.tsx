import { Form, Input, Button, Modal, Table, Row, Col, Card } from 'antd';
import { useState } from 'react';

const FormItem = Form.Item;

enum ContentType {
  text = 'text',
  image = 'image',
  number = 'number',
}
const ContentTypeMap = {
  [ContentType.text]: '文本',
  [ContentType.image]: '图片',
  [ContentType.number]: '数字',
};

const EditTable: React.FC<{
  value?: any[];
  onEdit: (record: any) => void;
  onDelete: (record: any) => void;
}> = ({ value, onEdit, onDelete }) => {
  return (
    <Table
      pagination={{
        pageSize: 5,
      }}
      dataSource={value}
      columns={[
        {
          title: '表单类型',
          dataIndex: 'formType',
          key: 'formType',
          render: (text) => {
            return <span>{ContentTypeMap[text]} </span>;
          },
        },
        {
          title: '字段名称',
          dataIndex: 'fieldName',
          key: 'fieldName',
        },
        {
          title: '提示',
          dataIndex: 'tips',
          key: 'tips',
        },
        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          render: (_, record) => {
            return (
              <>
                <Button
                  onClick={() => {
                    onEdit(record);
                  }}
                >
                  编辑
                </Button>
                <Button
                  onClick={() => {
                    onDelete(record);
                  }}
                >
                  删除
                </Button>
              </>
            );
          },
        },
      ]}
    />
  );
};

const TaskManager = () => {
  const [contentType, setContentType] = useState('');
  const [visable, setVisable] = useState(false);
  const [form] = Form.useForm();

  const handleCreate = (contentType: string) => {
    setContentType(contentType);
    form.setFieldValue(contentType, {
      formType: contentType,
    });
    setVisable(true);
  };
  const onModalOk = () => {
    const modalContent = form.getFieldValue(contentType);
    const { configList = [] } = form.getFieldsValue();
    const list = configList.map((item, index) => {
      return {
        ...item,
        key: index,
      };
    });
    form.setFieldsValue({
      configList: [
        ...form.getFieldValue('configList'),
        { ...modalContent, key: list.length },
      ],
    });
    setVisable(false);
  };
  const onModalCancel = () => {
    setVisable(false);
  };
  const modalProps = {
    [ContentType.text]: {
      title: '新建文本',
    },
    [ContentType.image]: {
      title: '新建图片',
    },
    [ContentType.number]: {
      title: '新建数字',
    },
  };
  const handleEdit = (record) => {
    const { formType } = record;
    form.setFieldValue(formType, record);
    setContentType(formType);
    setVisable(true);
  };
  const handleDelete = (record) => {
    const { configList } = form.getFieldsValue();
    const list = configList.filter((item) => item.key !== record.key);
    form.setFieldsValue({
      configList: list,
    });
  };

  const RenderContent: React.FC<{ value?: any }> = ({ value }) => {
    const { type } = value;
    console.log('type', value);

    switch (type) {
      case ContentType.text:
        return (
          <>
            <FormItem
              label="表单类型"
              name={type}
              initialValue={ContentType.text}
            >
              <Input disabled />
            </FormItem>
            {/* <FormItem label="字段名称" name={'name'}>
              <Input />
            </FormItem>
            <FormItem label="提示" name={'tips'}>
              <Input />
            </FormItem> */}
          </>
        );
      case ContentType.image:
        return (
          <>
            <FormItem
              label="表单类型"
              name={type}
              initialValue={ContentType.image}
            >
              <Input disabled />
            </FormItem>
            {/* <FormItem label="字段名称" name={'name'}>
              <Input />
            </FormItem>
            <FormItem label="提示" name={'tips'}>
              <Input />
            </FormItem>
            <FormItem label="图片地址" name={'url'}>
              <Input />
            </FormItem> */}
          </>
        );
      case ContentType.number:
        return (
          <>
            <FormItem
              label="表单类型"
              name={type}
              initialValue={ContentType.number}
            >
              <Input disabled />
            </FormItem>
            {/* <FormItem label="字段名称" name={'name'}>
              <Input />
            </FormItem>
            <FormItem label="提示" name={'tips'}>
              <Input />
            </FormItem>
            <FormItem label="数字内容" name={'content'}>
              <Input />
            </FormItem> */}
          </>
        );
      default:
        return null;
    }
  };

  const renderContent = (type, index) => {
    switch (type) {
      case ContentType.text:
        return (
          <>
            <FormItem
              label="表单类型"
              name={[index, 'type']}
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 12,
              }}
              labelAlign="right"
            >
              <Input disabled />
            </FormItem>
            <FormItem
              wrapperCol={{
                span: 12,
              }}
              label="字段名称"
              name={[index, 'name']}
              labelCol={{
                span: 6,
              }}
              labelAlign="right"
            >
              <Input />
            </FormItem>
            <FormItem
              wrapperCol={{
                span: 12,
              }}
              label="提示"
              name={[index, 'tips']}
              labelCol={{
                span: 6,
              }}
              labelAlign="right"
            >
              <Input />
            </FormItem>
          </>
        );
      case ContentType.image:
        return (
          <>
            <FormItem
              label="表单类型"
              name={[index, 'type']}
              wrapperCol={{
                span: 12,
              }}
              labelCol={{
                span: 6,
              }}
              labelAlign="right"
            >
              <Input disabled />
            </FormItem>
            <FormItem
              wrapperCol={{
                span: 12,
              }}
              label="字段名称"
              name={[index, 'name']}
              labelCol={{
                span: 6,
              }}
            >
              <Input />
            </FormItem>
            <FormItem
              wrapperCol={{
                span: 12,
              }}
              label="提示"
              name={[index, 'tips']}
              labelCol={{
                span: 6,
              }}
            >
              <Input />
            </FormItem>
            <FormItem
              wrapperCol={{
                span: 12,
              }}
              label="图片地址"
              name={[index, 'url']}
              labelCol={{
                span: 6,
              }}
            >
              <Input />
            </FormItem>
          </>
        );
      case ContentType.number:
        return (
          <>
            <FormItem
              label="表单类型"
              name={[index, 'type']}
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 12,
              }}
            >
              <Input disabled />
            </FormItem>
            <FormItem
              label="字段名称"
              name={[index, 'name']}
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 12,
              }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="提示"
              name={[index, 'tips']}
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 12,
              }}
            >
              <Input />
            </FormItem>
            <FormItem
              label="数字内容"
              name={[index, 'content']}
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 12,
              }}
            >
              <Input />
            </FormItem>
          </>
        );
      default:
        return null;
    }
  };

  const ConfigForm: React.FC<{
    value?: any;
    index?: number;
  }> = ({ value, index }) => {
    const { type } = value;
    return (
      <Row
        align="middle"
        justify={'end'}
        style={{
          border: '1px solid #ccc',
        }}
      >
        <Col span={4}>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            {index}
          </div>
        </Col>
        <Col
          style={{
            padding: '10px 10px',
            borderLeft: '1px solid #ccc',
            borderRight: '1px solid #ccc',
          }}
          span={16}
        >
          {renderContent(type, index)}
        </Col>
        <Col span={4}>
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <Button type="link">删除</Button>
          </div>
        </Col>
      </Row>
    );
  };
  return (
    <Form
      form={form}
      labelCol={{
        span: 4,
        offset: 2,
      }}
      wrapperCol={{
        span: 12,
      }}
      style={{
        height: '100vh',
        overflow: 'scroll',
      }}
    >
      <FormItem label="配置名称" name={'configName'}>
        <Input />
      </FormItem>
      <FormItem label="配置类型" name={'configType'}>
        <Input />
      </FormItem>

      {/* <FormItem label="表单类型" name={'configList'} initialValue={[]}>
        <EditTable onEdit={handleEdit} onDelete={handleDelete} />
      </FormItem> */}

      <Form.List name={'configList'}>
        {(fields, { add }) => {
          console.log(form.getFieldValue('configList'));
          return (
            <Form.Item label="配置列表">
              {fields.map((field, index) => {
                return (
                  <Form.Item name={index} key={index}>
                    <ConfigForm index={index} />
                  </Form.Item>
                );
              })}
              <Button
                onClick={() => {
                  //q: 添加时如何设置默认值
                  add(
                    {
                      type: 'text',
                    },
                    0,
                  );
                }}
              >
                <span>添加文案</span>
              </Button>
              <Button
                onClick={() => {
                  //q: 添加时如何设置默认值
                  add(
                    {
                      type: 'image',
                    },
                    0,
                  );
                }}
              >
                <span>添加图片</span>
              </Button>
              <Button
                onClick={() => {
                  //q: 添加时如何设置默认值
                  add(
                    {
                      type: 'number',
                    },
                    0,
                  );
                }}
              >
                <span>添加数字</span>
              </Button>
            </Form.Item>
          );
        }}
      </Form.List>

      {/* <Modal
        onCancel={onModalCancel}
        onOk={onModalOk}
        open={visable}
        {...modalProps[contentType]}
      >
        {renderContent()}
      </Modal> */}
      <div></div>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
      <Button
        onClick={() => {
          console.log(form.getFieldsValue());
        }}
      >
        测试
      </Button>
    </Form>
  );
};

export default TaskManager;
