import { Format } from "features/invoices/utils";
import React from "react";

export const Status = ({ StatusOptions, date }) => {
  return (
    <>
      <div className="flex justify-between ">
        <div className="flex items-center gap-3">
          {StatusOptions?.icon}
          <div className="leading-5">
            <p
              className={`${StatusOptions?.statusColor} font-semibold text-sm`}
            >
              {StatusOptions?.label}
            </p>
            <span className="text-[#8C8C8C] text-xs flex gap-[4px]">
              {StatusOptions?.text || "Estimate: 24 hours."}
            </span>
          </div>
        </div>
        <span className="text-[#8C8C8C] text-xs">{Format.date(date)}</span>
      </div>
    </>
  );
};

export default Status;
