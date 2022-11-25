import React from "react";
import { Button, Form, Input, InputNumber, message } from "antd";
import { useAddProductMutation } from "../services/product";
import { useNavigate } from "react-router-dom";

interface IFormInputs {
  name: string;
  price: number;
  image: string;
  description: string;
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
};

const validateMessages = {
  required: "${label} không được để trống!",
  types: {
    number: "${label} phải là số!",
  },
};

const ProductAdd = () => {
  const [addProduct, { isLoading, error }] = useAddProductMutation();
  const navigate = useNavigate();

  const onFinish = (values: IFormInputs) => {
    addProduct(values);
    message.success("Thêm sản phẩm thành công");
    navigate(-1);
  };

  return (
    <div>
      <h2 style={{ marginLeft: "200px", marginBottom: "50px" }}>
        Thêm sản phẩm
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
        <Form.Item name={["image"]} label="Image" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={["price"]}
          label="Price"
          rules={[{ type: "number", required: true }]}
        >
          <InputNumber style={{ width: "30%" }} />
        </Form.Item>
        <Form.Item
          name={["description"]}
          label="description"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
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

export default ProductAdd;
