import React from "react";
import { Button, Form, Input, InputNumber, message, Select } from "antd";
import { useAddProductMutation } from "../services/product";
import { useNavigate } from "react-router-dom";
import { useGetCategorysQuery } from "../services/category";

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
  const { data: getCategorys } = useGetCategorysQuery();
  const [addProduct, { isLoading, error }] = useAddProductMutation();
  const navigate = useNavigate();

  const onFinish = (values: IFormInputs) => {
    addProduct(values);
    message.success("Thêm sản phẩm thành công");
    navigate(-1);
  };

  // Selec
  const { Option } = Select;
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

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
        <Form.Item
          name={["categoryId"]}
          label="Danh mục"
          rules={[{ required: true }]}
        >
          <Select
            defaultValue="Danh mục sản phẩm"
            style={{ width: 200 }}
            onChange={handleChange}
          >
            {getCategorys &&
              getCategorys.map((cate, index) => (
                <Option key={index} value={cate.id}>
                  {cate.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          name={["name"]}
          label="Tên sản phẩm"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["image"]}
          label="Ảnh sản phẩm"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["price"]}
          label="Giá tiền"
          rules={[{ type: "number", required: true }]}
        >
          <InputNumber style={{ width: "30%" }} />
        </Form.Item>
        <Form.Item
          name={["description"]}
          label="Mô tả"
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
