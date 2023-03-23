import React from "react";

export const Total = ({ currency, subTotal, Fees }) => {
  return (
    <div className="flex justify-end gap-10 my-3">
      <div className="flex flex-col">
        <span className="text-gray-400 text-sm">Subtotal</span>
        <span className="text-gray-400 text-sm">Fees</span>
        <span className="font-semibold">Total</span>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-400 text-sm">
          {`${currency} ${subTotal}`}
        </span>
        <span className="text-gray-400 text-sm">{`${currency} ${Fees}`}</span>
        <span className="font-semibold">
          {`${currency} ${subTotal - Fees}`}
        </span>
      </div>
    </div>
  );
};

export default Total;
