
import React from "react";
import Gradients from "./Gradients";
import ProductImages from "./ProductImages";
import Info from "./Info/Info";
import { NavLogo } from "@/src/Assets";
import Image from "next/image";

const LatestProduct = () => {
  return (
    <div className="mt-10">
      <div className="container">
        <div className="card md:w-[860px] w-auto mx-auto">
          <div className="shoeBackground ">
            <Gradients />
            <Image
              width={150}
              height={150}
              src={NavLogo}
              alt="logo"
              className="logo md:mr-4"
            />
            <ProductImages />
          </div>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
