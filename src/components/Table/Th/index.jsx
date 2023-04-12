import React from "react";
import { ArrowFilter } from "../../svg";

export const Th = ({
  head,
  onClick,
  className = "",
  classNameActive = "",
  isActive,
  ...rest
}) => {
  return (
    <div
      className={` flex gap-2 px-5 py-3  text-sm  capitalize text-inherit  font-medium  ${className}`}
      {...rest}
    >
      <span>{head}</span>
      <div className="flex flex-col justify-center gap-[2px]">
        <button onClick={() => onClick(head)}>
          <ArrowFilter
            className={`w-3 h-2 ${isActive(head) ? classNameActive : ""}`}
          />
        </button>
        <button onClick={() => onClick(`-${head}`)}>
          <ArrowFilter
            className={`w-3 h-2  rotate-180 ${
              isActive(`-${head}`) ? classNameActive : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Th;
