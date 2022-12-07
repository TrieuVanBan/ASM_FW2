import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Table, Popconfirm, message } from "antd";
import { useAppDispatch, useAppSelector } from "../app/hook";
import {
  useGetCategorysQuery,
  useRemoveCategoryMutation,
} from "../services/category";
import Column from "antd/es/table/Column";

type Props = {};

const Category = () => {
  const { data: categorys = [], isLoading, error } = useGetCategorysQuery();
  const [removeCategory] = useRemoveCategoryMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const removeItem = (id: number) => {
    // console.log("id", id);
    removeCategory(id);
    message.info("Bạn đã xóa thành công!");
  };
  return (
    <>
      <Link to="add">
        <Button type="primary">Add</Button>
      </Link>

      <Table
        dataSource={categorys.map((cate, index) => ({
          index: index + 1,
          key: cate.id,
          name: cate.name,
        }))}
      >
        <Column title="STT" dataIndex="index" key="index" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column
          title="Action"
          key="action"
          render={(cat) => {
            // console.log("cate: ", cat);
            return (
              <>
                <Popconfirm
                  placement="top"
                  title="Bạn có muốn xóa không?"
                  onConfirm={() => removeItem(cat.key)}
                  okText="Có"
                  cancelText="Không"
                >
                  <Button type="primary" danger>
                    Delete
                  </Button>
                </Popconfirm>

                <Button type="primary" danger>
                  <Link to={`/admin/categorys/edit/${cat.key}`}>Edit</Link>
                </Button>
              </>
            );
          }}
        ></Column>
      </Table>
    </>
  );
};

export default Category;
