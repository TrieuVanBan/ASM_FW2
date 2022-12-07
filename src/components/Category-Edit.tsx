import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Form, Input, message } from "antd";
import {
  useAddCategoryMutation,
  useEditCategoryMutation,
  useGetCategoryQuery,
} from "../services/category";
import { useNavigate, useParams } from "react-router-dom";
import { ICate } from "../interfaces/category";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
};

const validateMessages = {
  required: "${label} không được để trống!",
};

const CategoryEdit = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const { data: getCategory } = useGetCategoryQuery(id as any);
  const [editCategory, { isLoading, error }] = useEditCategoryMutation(
    id as any
  );

  form.setFieldsValue(getCategory);
  const navigate = useNavigate();

  const onFinish: SubmitHandler<ICate> = async (values: ICate) => {
    const valueAdd: ICate = {
      id,
      name: values.name,
    };
    editCategory(valueAdd);
    message.success("Cập nhật danh mục thành công");
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
        form={form}
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

export default CategoryEdit;
