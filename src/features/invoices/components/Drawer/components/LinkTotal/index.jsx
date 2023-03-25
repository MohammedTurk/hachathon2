import { Card } from "components";
import React from "react";

export const LinkTotal = ({ data }) => {
  const fees = data?.ourFee + data?.paymentFee || 0;
  return (
    <Card className="flex flex-row justify-between border shadow-sm ">
      <div className="flex flex-col gap-2">
        <span className="text-gray-400 text-sm">Balance</span>
        <span className=" text-sm">{`${data?.currency} ${data?.balance}`}</span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-gray-400 text-sm">Paid INV.</span>
        <span className=" text-sm">
          {`${data?.currency} ${data?.paidInvoice}`}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold text-gray-400 text-sm">Fees</span>
        <span className="text-sm">{`${data?.currency} ${fees}`}</span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold text-gray-400 text-sm">Total</span>
        <span className=" text-sm font-semibold">
          {`${data?.currency} ${data?.balance}`}
        </span>
      </div>
    </Card>
  );
};

export default LinkTotal;
