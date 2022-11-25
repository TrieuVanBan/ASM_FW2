import React from "react";
import { Button, Form, Input, InputNumber, message } from "antd";
import { useAddCategoryMutation } from "../services/category";
import { useNavigate } from "react-router-dom";

interface IFormInputs {
  name: string;
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
};

const validateMessages = {
  required: "${label} không được để trống!",
};

const CategoryAdd = () => {
  const [addCategory, { isLoading, error }] = useAddCategoryMutation();
  const navigate = useNavigate();

  const onFinish = (values: IFormInputs) => {
    addCategory(values);
    message.success("Thêm danh mục thành công");
    navigate(-1);
  };

  return (
    <div>
      <h2 style={{ marginLeft: "200px", marginBottom: "50px" }}>
        Thêm danh mục
      </h2>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name={["name"]} label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CategoryAdd;
