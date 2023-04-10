import React from "react";

export const Status = ({ status = "", className = "" }) => {
  const spanClasse = getClassName(status);

  return (
    <span
      className={`${className} ${spanClasse} block w-fit  capitalize text-xs rounded-2xl   px-4 py-1 font-medium`}
    >
      {status}
    </span>
  );
};

function getClassName(status) {
  const typeStatus = status.toLocaleLowerCase();

  switch (typeStatus) {
    case "pending":
      return "bg-[#FFF9F0] text-[#DAA545]";
    case "ready":
      return "bg-[#F4F7FD] text-[#0044FF]";
    case "completed":
      return "bg-[#F3F3F3] text-black";
    case "cancelled":
      return "bg-[#F2F4F7] text-[#BEC2C6]";
    default:
      return "bg-gray-200 text-black";
  }
}

export default Status;
