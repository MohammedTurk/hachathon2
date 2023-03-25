import React from "react";
import { ErrorIconMini } from "lib/@heroicons";
import { Button } from "components";

export const ErrorMessage = ({
  message = "Invoice Disapproved. Review:",
  resasons = ["Description.", " Amount."],
  onEdit,
}) => {
  return (
    <div className="flex justify-between items-start bg-red-100 border border-red-400 rounded p-2">
      <div className="flex   gap-3 bg-red-100   p-2">
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
      <Button
        className="  text-blue-500 !text-base  bg-white border shadow font-semibold px-6 !py-1 mt-2	 hover:!bg-gray-50  "
        onClick={onEdit}
      >
        Edit
      </Button>
    </div>
  );
};
export default ErrorMessage;
