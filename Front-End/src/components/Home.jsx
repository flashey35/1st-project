import React from "react";
import image1 from "../assets/images/Veggies.png";

const Home = () => {
  return (
    <div className="flex m-6 rounded-lg ">
      <div className=" shrink-0">
        <img className="" src={image1} alt="image not Found" />
      </div>
      <div className="">
        <h1 className=" font-mono text-2xl p-3 my-2">Best Quality product</h1>
        <h1 className="font-mono text-4xl p-2">Join The Movement</h1>
        <p className="font-mono text-2xl font-bold p-3">
          Our website offers the ultimate convenience in fresh produce shopping.
          With a simple click, customers can order a variety of farm-fresh
          vegetables and have them delivered right to their doorstep. We source
          directly from local farmers, ensuring quality and supporting local
          agriculture. Say goodbye to crowded supermarkets and hello to
          hassle-free, healthy eating with our vegetable delivery service
        </p>
        <p className="font-mono text-4xl p-2">
          Small steps towards new era of Agriculture
        </p>
      </div>
    </div>
  );
};

export default Home;
