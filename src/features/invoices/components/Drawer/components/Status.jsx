import {
  Cancelled,
  Disapproved,
  Pending,
  Active,
  SendIcon,
  CheckIcon,
  Paypal,
} from "components/svg";
import { ErrorMessage } from "./ErrorMessage";
import React from "react";

function getSettings(status) {
  switch (status) {
    case "pending_verification":
    case "pending_approval":
      return {
        label: "Pending Approval",
        statusColor: "text-[#DAA545]",
        icon: <Pending />,
      };
    case "cancelled":
    case "canceled":
      return {
        label: "Cancelled",
        statusColor: "text-[#000]",
        icon: <Cancelled />,
      };
    case "disapproved":
      return {
        label: "Disapproved",
        statusColor: "text-[#000]",
        icon: <Disapproved />,
        hasError: true,
      };
    case "sent":
      return {
        label: "Sent",
        statusColor: "text-[#000]",
        icon: <SendIcon />,
      };
    case "paid":
      return {
        label: "Paid",
        statusColor: "text-[#60AD5A]",
        icon: <CheckIcon />,
        text: (
          <>
            Paid by
            <Paypal />
            Paypal
          </>
        ),
      };
    case "Inactive":
      return {
        label: "Inactive",
        statusColor: "text-[#4375FF]",
        icon: <Active className="fill-gray-300" fill="gray-300" />,
      };
    default:
      return {
        label: "Active",
        statusColor: "text-[#4375FF]",
        icon: <Active />,
      };
  }
}

export const Status = ({ status, date }) => {
  const StatusOptions = getSettings(status);
  return (
    <>
      {StatusOptions?.hasError && <ErrorMessage />}
      <div className="flex justify-between ">
        <div className="flex items-center gap-3">
          {StatusOptions.icon}
          <div className="leading-5">
            <p className={`${StatusOptions.statusColor} font-semibold text-sm`}>
              {StatusOptions.label}
            </p>
            <span className="text-[#8C8C8C] text-xs flex gap-[4px]">
              {StatusOptions.text || "Estimate: 24 hours."}
            </span>
          </div>
        </div>
        <span className="text-[#8C8C8C] text-xs">
          {new Date(date).toLocaleDateString("us-en", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
    </>
  );
};

export default Status;
