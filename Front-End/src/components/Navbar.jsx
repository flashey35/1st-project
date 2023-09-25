import React from "react";
import "../index.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";

const Navbar = () => {
  return (
    <div
      className="  flex justify-between w-[full] m-6 h-[110px] "
      id="container"
    >
      <div>
        <h1 className="text-4xl heading-5 p-10 items-center ">LOGO</h1>
      </div>

      <div className=" mr-10 w-[full]">
        <ul className="flex text-4xl p-4 ">
          <li className="p-4 pointer ">About</li>
          <li className="p-4 pointer ">Contact</li>
          <li className="p-4 pointer flex items-center ">
            <BiDollar />
            0.00
          </li>
          <li className="p-4 pointer">
            <AiOutlineShoppingCart />
          </li>

          <li className="p-4 ">
            <BsFillPersonFill />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
