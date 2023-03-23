import React from "react";
import { ErrorIconMini } from "lib/@heroicons";

export const ErrorMessage = ({
  message = "Invoice Disapproved. Review:",
  resasons = ["Description.", " Amount."],
}) => {
  return (
    <div className="flex  gap-3 bg-red-100 border border-red-400 rounded p-2">
      <ErrorIconMini className="w-6 h-6" color="red" />
      <div className="leading-5">
        <p className={` font-semibold text-sm`}>{message}</p>
        <ul className="text-[#8C8C8C] text-xs">
          {resasons.map((resason) => (
            <li key={{ resason }}> - {resason}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ErrorMessage;
