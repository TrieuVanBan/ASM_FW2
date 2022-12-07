import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Table, Popconfirm, message } from "antd";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { fetchProducts } from "../slice/product";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "../services/product";
import Column from "antd/es/table/Column";

type Props = {};

const Product = () => {
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  const [removeProduct] = useRemoveProductMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const removeItem = (id: number) => {
    // console.log("id", id);
    removeProduct(id);
    message.info("Bạn đã xóa thành công!");
  };
  return (
    <>
      <Link to="add">
        <Button type="primary">Add</Button>
      </Link>

      <Table
        dataSource={products.map((item, index) => ({
          index: index + 1,
          key: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          description: item.description,
          categoryId: item.categoryId,
        }))}
      >
        <Column title="STT" dataIndex="index" key="index" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column
          title="Price"
          dataIndex="price"
          key="price"
          render={(price) =>
            price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })
          }
        />
        {
          <Column
            title="Image"
            dataIndex="image"
            key="image"
            render={(image) => (
              <img src={image} alt="" width={"100px"} height={"100px"} />
            )}
          />
        }
        <Column title="Description" dataIndex="description" key="description" />
        <Column title="Category" dataIndex="categoryId" key="categoryId" />
        <Column
          title="Action"
          key="action"
          render={(product) => {
            // console.log("product", product);
            return (
              <>
                <Popconfirm
                  placement="top"
                  title="Bạn có muốn xóa không?"
                  onConfirm={() => removeItem(product.key)}
                  okText="Có"
                  cancelText="Không"
                >
                  <Button type="primary" danger>
                    Delete
                  </Button>
                </Popconfirm>

                <Button type="primary" danger>
                  <Link to={`edit/${product.key}`}>Edit</Link>
                </Button>
              </>
            );
          }}
        ></Column>
      </Table>
    </>
  );
};

export default Product;
