import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsPersonGear } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="bg-black m-6 text-white h-[180px] p-3 rounded-md ">
      <div className="flex justify-evenly mt-8">
        <div className="flex items-center bg-gray-600 p-3 rounded-2xl">
          <div>
            <MdOutlineLocalShipping color="green" size={40} />
          </div>
          <div className="p-3">
            <h1 className="font-mono text-2xl">Free Shipping</h1>
            <h1>Above $5 Only</h1>
          </div>
        </div>
        <div className="flex  bg-gray-600 p-3 rounded-2xl">
          <div>
            <BsPersonGear color="green" size={60} />
          </div>
          <div className="p-3">
            <h1 className="font-mono text-2xl">Certified Organic</h1>
            <h1>100% Guarantee</h1>
          </div>
        </div>
        <div className="flex  bg-gray-600 p-3 rounded-2xl">
          <div>
            <FaMoneyBillAlt color="green" size={40} />
          </div>
          <div className="p-3">
            <h1 className="font-mono text-2xl">Huge Savings</h1>
            <h1>At Lowest Price</h1>
          </div>
        </div>
        <div className="flex  bg-gray-600 p-3 rounded-2xl">
          <div>
            <FaRecycle color="green" size={40} />
          </div>
          <div className="p-3">
            <h1 className="font-mono text-2xl">Easy Returns</h1>
            <h1>No Questioned Asked</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

{
  /* <div className="flex m-5 justify-evenly text-white bg-black h-[180px] items-center ">
      <div className="flex bg-gray-500 font-mono cursor-pointer items-center h-[110px] m-3 w-[220px]">
        <MdOutlineLocalShipping color="green" size={40} />
        <h1 className="p-3 font-mono text-2xl">Free Shipping</h1>
        <h1>Above $5 Only</h1>
      </div>
      <div className="bg-gray-500 font-mono cursor-pointer items-center h-[110px] m-3 w-[220px]">
        <BsPersonGear color="green" size={60} />
        <div className="flex">
          <h1 className="p-3 font-mono">Certified Organic</h1>
          <h1>100% Guarantee</h1>
        </div>
      </div>
      <div className="flex bg-gray-500 font-mono cursor-pointer items-center h-[110px] m-3 w-[220px]  ">
        <FaMoneyBillAlt color="green" size={40} style={{}} />
        <h1 className="p-3 font-mono">Huge Savings</h1>
        <h1> At Lowest Price</h1>
      </div>
      <div className="flex bg-gray-500 font-mono cursor-pointer items-center h-[110px] m-3 w-[220px] ">
        <FaRecycle color="green" size={40} />
        <h1 className="p-3 font-mono">Easy Returns</h1>
        <h1>No Questions Asked</h1>
      </div>
    </div> */
}
