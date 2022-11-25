import React, { useEffect, useRef, useState } from "react";
import { IProduct } from "../interfaces/product";
import { getProducts } from "../api/product";

type Props = {};

const Home = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const geData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    geData();
  }, []);

  return (
    <div>
      <main className="flex flex-col sm:flex-row flex-wrap sm:gap-7 md:gap-[1.65rem] lg:gap-8 xl:gap-6 mt-[20px] sm:mt-[40px]">
        <div className="w-[100%] sm:w-[30%] md:w-[30.5%] lg:w-[30.8%] xl:w-[23.4%] mb-[20px] sm:mb-0">
          <p className="text-[#ccc] mb-[20px] sm:mb-[10px] lg:mb-[40px]">
            Filter by
          </p>
          <select
            className="w-[100%] block border-b-2 border-[#ccc] pb-1 mb-[16px]"
            name=""
            id=""
          >
            <option value="">Collection</option>
          </select>
          <select
            className="w-[100%] block border-b-2 border-[#ccc] pb-1 mb-[16px]"
            name=""
            id=""
          >
            <option value="">Color</option>
          </select>
          <select
            className="w-[100%] block border-b-2 border-[#ccc] pb-1 mb-[16px]"
            name=""
            id=""
          >
            <option value="">Category</option>
          </select>
          <select
            className="w-[100%] block border-b-2 border-[#ccc] pb-1 mb-[16px]"
            name=""
            id=""
          >
            <option value="">Price Range</option>
            <option value="">Price Range</option>
            <option value="">Price Range</option>
          </select>
          <div className="w-[100%]">
            <input className="w-[100%]" type="range" />
            <div className="flex justify-between">
              <p>$0</p>
              <p>$10,000+</p>
            </div>
          </div>
        </div>
        {products.map((product, index) => (
          <>
            <div className="w-[100%] sm:w-[30%] md:w-[30.5%] lg:w-[30.8%] xl:w-[23.4%] mb-[20px] sm:mb-0">
              <div className="relative">
                <img
                  className="w-[100%] h-[300px] object-cover"
                  src={product.image}
                  alt=""
                />
                <div className="absolute left-0 bottom-0 bg-white w-[50%] h-[40px]" />
              </div>
              <h2>{product.name}</h2>
              <div className="flex justify-between">
                <p className="text-[#22232B] opacity-[50%]">Giá</p>
                <p>{product.price}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
          </>
        ))}
      </main>
      <div className="flex justify-end flex-wrap items-center mt-[50px]">
        <button className="px-2 py-1 mr-6 rounded-md border-solid border-2 border-inherit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="bg-[#22232B] text-white px-3  py-1 rounded-md mr-6 border-solid border-2 border-inherit">
          1
        </button>
        <button className="block px-3  py-1 rounded-md mr-6 border-solid border-2 border-inherit">
          2
        </button>
        <button className="block px-3  py-1 rounded-md mr-6 border-solid border-2 border-inherit">
          3
        </button>
        <button className="block px-3  py-1 rounded-md mr-6 border-solid border-2 border-inherit">
          4
        </button>
        <button className="block px-3  py-1 rounded-md mr-6 border-solid border-2 border-inherit">
          5
        </button>
        <button className="block px-3  py-1 rounded-md mr-6 border-solid border-2 border-inherit">
          6
        </button>
        <button className="block px-3  py-1 rounded-md mr-6 border-solid border-2 border-inherit">
          7
        </button>
        <button className="px-2 py-1 mr-1 rounded-md border-solid border-2 border-inherit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
