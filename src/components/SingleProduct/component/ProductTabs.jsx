import React, { useState } from "react";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      label: "توضیحات محصول",
      content: (
        <div className="mt-6 font-medium text-base/relaxed text-Title">
          {product.description}
        </div>
      ),
    },
    {
      id: 2,
      label: "مشخصات فنی",
      content: (
        <ul className="mt-6 flex flex-col gap-4">
          {product.specs.map((spec) => (
            <li className="flex *:text-Title">
              <span className="font-bold w-1/4">{spec.title} :</span>
              <span className="">{spec.value}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 3,
      label: "نظرات کاربران",
      content: <div className="mt-6"></div>,
    },
  ];

  return (
    <div className="w-1/2 p-5 bg-white rounded-lg">
      <ul className="flex items-center justify-center gap-6 pb-6 border-b border-b-Caption/15">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`font-semibold text-lg cursor-pointer transition-colors ${
              activeTab === tab.id
                ? "text-Primary border-b-2 border-Primary pb-1"
                : "text-Title"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      {tabs.find((tab) => tab.id === activeTab)?.content}
    </div>
  );
}
