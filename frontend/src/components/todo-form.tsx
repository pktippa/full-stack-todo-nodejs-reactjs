import { Button,  Form, Input } from 'antd';
import React from 'react';
import { DataType } from '../common/types';

type TodoFormProps = {
  createNewTodo: (item: Partial<DataType>) => void;
  id?: number;
  title?: string;
  desc?: string;
}
const TodoForm = ({createNewTodo, title = '', desc = '', id}: TodoFormProps) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    createNewTodo({id, title: values.title, desc: values.desc})
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{marginTop: 50}}>
      Todo
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ title, desc }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please input todo title' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="desc"
        rules={[{ required: true, message: 'Please input todo description' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {id? 'Save' : 'Create'}
        </Button>
      </Form.Item>
    </Form></div>
  );
};

export default TodoForm;