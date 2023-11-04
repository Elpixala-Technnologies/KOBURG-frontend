import Link from "next/link";
import React from "react";

const Info = () => {
  const shoeName = (
    <div className="shoeName">
      <div>
        <h1 className="big">Sneakers SunBe</h1>
        <span className="new">new</span>
      </div>
      <h3 className="small">Men's running shoes</h3>
    </div>
  );

  const description = (
    <div className="description">
      <h3 className="title">Product Info</h3>
      <p className="text">
        The Sneakers SunBe feature an EVA sole, offering lightweight cushioning
        and a level of comfort that's second to none.
      </p>
    </div>
  );

  const ColorContainer = (
    <div className="color-container">
      <h3 className="title">Color</h3>
      <div className="colors flex flex-wrap gap-2">
        <span className="color active" primary="#2175f5" color="blue"></span>
        <span className="color" primary="#f84848" color="red"></span>
        <span className="color" primary="#29b864" color="green"></span>
        <span className="color" primary="#ff5521" color="orange"></span>
        <span className="color" primary="#444" color="black"></span>
      </div>
    </div>
  )
  
  const SizeContainer = (
    <div className="size-container">
      <h3 className="title">size</h3>
      <div className="sizes">
        <span className="size">7</span>
        <span className="size">8</span>
        <span className="size active">9</span>
        <span className="size">10</span>
        <span className="size">11</span>
      </div>
    </div>
  );

  const BuySection = (
    <div className="buy-price flex gap-4 items-center">
      <Link href="/shop" className="buy rounded">
        Explore More
      </Link>
      <div className="price">
        <h1
          style={{
            fontSize: "1rem",
          }}
        >
          Rs. 1549.99
        </h1>
      </div>
    </div>
  );

  return (
    <div className="info w-[100vw] ">
      {shoeName}
      {description}
      {ColorContainer}
      {SizeContainer}
      {BuySection}
    </div>
  );
};

export default Info;
