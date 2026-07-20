import React from "react";

export default function ProductGallery({ product }) {
  return (
    <div className="flex flex-col gap-3">
      <img
        src={product.images[0]}
        alt={product.name || "Product image"}
        className="w-110 h-110 object-cover border border-Secondry/25 rounded-md"
      />
      
      {product.images.length > 1 && (
        <div className="flex items-center gap-5">
          {product.images.slice(0, 4).map((image, index) => (
            <img 
              src={image} 
              alt={`Product thumbnail ${index + 1}`}
              key={index}
              className="w-20 h-20 object-cover border border-Caption/30 rounded-md"
            />
          ))}
        </div>
      )}
    </div>
  );
}