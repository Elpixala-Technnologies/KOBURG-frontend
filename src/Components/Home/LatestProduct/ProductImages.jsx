
import React, { Fragment, useState } from "react";
import blue from "../../../Assets/Products/blue-white.png";
import black from "../../../Assets/Products/black.png";
import green from "../../../Assets/Products/green.png";
import red from "../../../Assets/Products/red.png";
import orange from "../../../Assets/Products/orange.png";
import Image from "next/image";

const ProductImages = () => {
  const [selectedColor, setSelectedColor] = useState("blue");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <Fragment>
      <div className="colors flex space-x-4">
        <span
          className={`color ${selectedColor === "blue" ? "active" : ""}`}
          primary="#2175f5"
          color="blue"
          onClick={() => handleColorChange("blue")}
        ></span>
        <span
          className={`color ${selectedColor === "red" ? "active" : ""}`}
          primary="#f84848"
          color="red"
          onClick={() => handleColorChange("red")}
        ></span>
        <span
          className={`color ${selectedColor === "green" ? "active" : ""}`}
          primary="#29b864"
          color="green"
          onClick={() => handleColorChange("green")}
        ></span>
        <span
          className={`color ${selectedColor === "orange" ? "active" : ""}`}
          primary="#ff5521"
          color="orange"
          onClick={() => handleColorChange("orange")}
        ></span>
        <span
          className={`color ${selectedColor === "black" ? "active" : ""}`}
          primary="#444"
          color="black"
          onClick={() => handleColorChange("black")}
        ></span>
      </div>
      <Image
        src={
          selectedColor === "blue"
            ? blue
            : selectedColor === "red"
            ? red
            : selectedColor === "green"
            ? green
            : selectedColor === "orange"
            ? orange
            : black
        }
        width={400}
        height={400}
        alt={`${selectedColor} shoe`}
        className="max-w-full h-auto"
        color={selectedColor}
      />
    </Fragment>
  );
};

export default ProductImages;
