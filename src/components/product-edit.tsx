import React from "react";
import { Button, Form, Input, InputNumber, message, Select } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { IProduct } from "../interfaces/product";
import {
  useEditProductMutation,
  useGetProductQuery,
} from "../services/product";
import {
  useGetCategoryQuery,
  useGetCategorysQuery,
} from "../services/category";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
};

const validateMessages = {
  required: "${label} không được để trống!",
  types: {
    // number: "${label} phải là số!",
  },
};

const ProductEdit = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const { data: getCategorys } = useGetCategorysQuery();
  const { data: getCategory } = useGetCategoryQuery(id as any);
  const { data: getProduct } = useGetProductQuery(id as any);
  const [editProduct, { isLoading, error }] = useEditProductMutation(id as any);
  console.log(getCategory);

  form.setFieldsValue(getProduct);
  const navigate = useNavigate();

  const onFinish: SubmitHandler<IProduct> = async (values: IProduct) => {
    console.log(values);
    const valueAdd: IProduct = {
      id,
      name: values.name,
      image: values.image,
      price: values.price,
      description: values.description,
      categoryId: values.categoryId,
    };
    editProduct(valueAdd);
    message.success("Cập nhật sản phẩm thành công");
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
        Cập nhật sản phẩm
      </h2>
      <Form
        {...layout}
        name="nest-messages"
        form={form}
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

export default ProductEdit;
