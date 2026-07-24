import React from "react";
import MegaIconBox from "./MegaIconBox";

export default function MegaBox({ title, icon, data }) {
  return (
    <div className="flex flex-col gap-3 shrink-0 px-5 py-3 border-l border-l-Caption">
      <div className="flex items-center gap-1.5 pb-3 border-b border-b-Caption/15">
        <span className="text-Primary">{icon}</span>
        <h3 className="text-lg font-semibold text-Title">{title}</h3>
      </div>
      <div className="flex flex-col items-start gap-4">
        {data.map((item) => (
          <MegaIconBox key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
