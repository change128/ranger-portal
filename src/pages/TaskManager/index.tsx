import { Form, Input, Button, Modal, Table, Row, Col } from 'antd';
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

  const renderContent = () => {
    switch (contentType) {
      case ContentType.text:
        return (
          <>
            <FormItem
              label="表单类型"
              name={[contentType, 'formType']}
              initialValue={contentType}
            >
              <Input disabled />
            </FormItem>
            <FormItem label="字段名称" name={[contentType, 'fieldName']}>
              <Input />
            </FormItem>
            <FormItem label="提示" name={[contentType, 'tips']}>
              <Input />
            </FormItem>
          </>
        );
      case ContentType.image:
        return (
          <>
            <FormItem
              label="表单类型"
              name={[contentType, 'formType']}
              initialValue={contentType}
            >
              <Input disabled />
            </FormItem>
            <FormItem label="字段名称" name={[contentType, 'fieldName']}>
              <Input />
            </FormItem>
            <FormItem label="提示" name={[contentType, 'tips']}>
              <Input />
            </FormItem>
            <FormItem label="图片地址" name={[contentType, 'url']}>
              <Input />
            </FormItem>
          </>
        );
      case ContentType.number:
        return (
          <>
            <FormItem
              label="表单类型"
              name={[contentType, 'formType']}
              initialValue={contentType}
            >
              <Input disabled />
            </FormItem>
            <FormItem label="字段名称" name={[contentType, 'fieldName']}>
              <Input />
            </FormItem>
            <FormItem label="提示" name={[contentType, 'tips']}>
              <Input />
            </FormItem>
            <FormItem label="数字内容" name={[contentType, 'content']}>
              <Input />
            </FormItem>
          </>
        );
      default:
        return null;
    }
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
    >
      <FormItem label="配置名称" name={'configName'}>
        <Input />
      </FormItem>
      <FormItem label="配置类型" name={'configType'}>
        <Input />
      </FormItem>
      <Row justify="space-between" align="middle">
        <Col span={12} offset={6}>
          <Button
            onClick={() => {
              handleCreate('text');
            }}
          >
            新建文本
          </Button>
          <Button
            onClick={() => {
              handleCreate('image');
            }}
          >
            新建图片
          </Button>
          <Button
            onClick={() => {
              handleCreate('number');
            }}
          >
            新建数字
          </Button>
        </Col>
      </Row>

      <FormItem label="表单类型" name={'configList'} initialValue={[]}>
        <EditTable onEdit={handleEdit} onDelete={handleDelete} />
      </FormItem>

      <Modal
        onCancel={onModalCancel}
        onOk={onModalOk}
        open={visable}
        {...modalProps[contentType]}
      >
        {renderContent()}
      </Modal>
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
