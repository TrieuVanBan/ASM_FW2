import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="flex">
        <div className="bg-[#1B1B1B] p-2 mr-10 h-[55px] z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </div>
        <div className="w-[100%] flex justify-between">
          <ul
            id="menu"
            className="flex flex-col sm:flex-row sm:items-center invisible sm:visible top-0 left-0 bottom-100 fixed sm:relative z-10 w-full h-screen sm:h-full  bg-[#1B1B1B] sm:bg-white text-white sm:text-black pt-[130px] sm:pt-0"
          >
            <li className="pb-[20px] sm:pb-0 mx-[20px]">
              <Link to="/">Home</Link>
            </li>
            <li className="pb-[20px] sm:pb-0 mx-[20px]">
              <a href="">Shop</a>
            </li>
            <li className="pb-[20px] sm:pb-0 mx-[20px]">
              <a href="">Magazine</a>
            </li>
          </ul>
          <div id="menu1" className="flex items-center ml-auto z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 mr-6 sm:mr-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <Link
              to="/signin"
              className="hidden sm:flex border-r-2 border-gray-500 pr-[10px] mr-[10px]"
            >
              Signin
            </Link>
            <Link className="hidden sm:flex" to="/signup">
              Signup
            </Link>
            <div id="btn-menu" className="z-20 lg:hidden cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 sm:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
