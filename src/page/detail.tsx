import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetCategoryQuery,
  useGetCategorysQuery,
} from "../services/category";
import { useGetProductQuery, useGetProductsQuery } from "../services/product";
import { IProduct } from "../interfaces/product";

type Props = {};

const Detail = () => {
  const { id } = useParams();

  const { data: getCategorys = [] } = useGetCategorysQuery();
  const { data: getProduct } = useGetProductQuery(id as any);
  const { data: getProducts = [] } = useGetProductsQuery();

  return (
    <div>
      <div className="flex mt-5 flex-wrap sm:flex-nowrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 mr-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <div className="w-[100%] sm:w-[70%] sm:mr-5 text-[26px]">
          <input
            className="w-[100%] outline-none border-b-2 border-black pb-3"
            type="text"
            placeholder="living room"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="w-[100%] sm:w-[25%] outline-none border-b-2 border-[#ccc] pb-3 text-[20px] sm:text-[26px]"
          name=""
          id=""
        >
          <option className="text-[18px]" value="">
            Best match
          </option>
          <option className="text-[18px]" value="">
            Best match
          </option>
          <option className="text-[18px]" value="">
            Best match
          </option>
        </select>
        <select
          className="visible sm:hidden w-[100%] sm:w-[25%] outline-none border-b-2 border-[#ccc] pb-3 text-[20px] sm:text-[26px]"
          name=""
          id=""
        >
          <option className="text-[18px]" value="">
            Filters
          </option>
        </select>
      </div>
      <div className="flex mt-20 mb-6 justify-between border-b-[2px] border-[#ccc] pb-28">
        <div className=" w-[100%] sm:w-[30%] md:w-[30.5%] lg:w-[30.8%] xl:w-[23.4%] mb-[20px] sm:mb-0">
          <p className="text-[#5f5d5d] mb-[20px] sm:mb-[10px] lg:mb-[40px]">
            Danh Mục
          </p>
          {getCategorys.map((cate, index) => (
            <a
              href=""
              key={index}
              className="flex justify-between mb-[6px] pl-10 py-2 hover:bg-[#1B1B1B] hover:text-white"
            >
              {cate.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          ))}
        </div>
        <div className="flex">
          <img
            className="w-[400px] h-[400px] object-cover"
            src={getProduct?.image}
            alt=""
          />
          <div className="grid grid-cols-1 gap-4 content-between w-[300px] ml-5">
            <div>
              <div className="flex items-center">
                <p className="text-[18px] font-bold ">Tên:</p>
                <p className="ml-2">{getProduct?.name}</p>
              </div>
              <div className="flex items-center">
                <p className="text-[18px] font-bold">Giá:</p>
                <p className="ml-2">{getProduct?.price}</p>
              </div>
              <div className="flex items-center">
                <p className="text-[18px] font-bold">Size:</p>
                <p className="ml-2 cursor-pointer font-bold text-gray-500">S</p>
                <p className="ml-2 cursor-pointer font-bold text-gray-500">M</p>
                <p className="ml-2 cursor-pointer font-bold text-gray-500">L</p>
                <p className="ml-2 cursor-pointer font-bold text-gray-500">
                  XL
                </p>
                <p className="ml-2 cursor-pointer font-bold text-gray-500">
                  XXL
                </p>
              </div>
              {/* <div className="flex items-center">
                <p className="text-[18px] font-bold">Danh mục:</p>
                <p className="ml-2">{getCate?.name} </p>
              </div> */}
              <div className="flex">
                <p className="text-[18px] font-bold whitespace-nowrap">
                  Mô tả:
                </p>
                <p className="ml-2">{getProduct?.description}</p>
              </div>
            </div>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-[22px] font-bold">Sản phẩm khác</h2>
        <div className="flex gap-5 mb-20">
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMq-Lq3Rvl-HCYs1idZvqBb1fyzdn70MtD5g&usqp=CAU"
            alt=""
          />
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZrAkY4ij7PzKB34XqctmNguE4ZYeROycwOw&usqp=CAU"
            alt=""
          />
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ao-thun-nam-tay-ngan-khong-co-ao-phong-nam-cao-cap-hiddle-uppercase-4.png"
            alt=""
          />
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://cf.shopee.vn/file/88577c6975464e467634f59611a87231"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
