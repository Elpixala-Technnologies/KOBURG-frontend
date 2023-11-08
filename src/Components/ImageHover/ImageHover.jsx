import React, { useState } from 'react';

const ImageWithHoverEffect = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="relative flex h-65 overflow-hidden rounded-[1rem]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={`object-cover w-full object-center transition-opacity ${
          hovered ? 'opacity-0' : 'opacity-75'
        }`}
        src={src[0]}
        alt={alt}
      />
      {hovered && (
        <img
          className="object-cover w-full object-center opacity-75"
          src={src[1]} 
          alt={alt}
        />
      )}
    </div>
  );
};

export default ImageWithHoverEffect;
