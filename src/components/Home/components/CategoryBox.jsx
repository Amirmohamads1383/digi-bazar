import React from "react";

export default function CategoryBox({ title, img }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-4 border-y-3 border-y-white hover:border-y-Primary bg-white rounded-lg transition-all">
      <img src={img} alt="" className="w-40 object-cover"/>
      <h2 className="font-bold text-lg text-Title">{title}</h2>
    </div>
  );
}
