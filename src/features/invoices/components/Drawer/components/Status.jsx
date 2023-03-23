import {
  Cancelled,
  Disapproved,
  Pending,
  Active,
  SendIcon,
} from "components/svg";
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
      };
    case "sent":
      return {
        label: "Sent",
        statusColor: "text-[#000]",
        icon: <SendIcon />,
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
      <div className="flex justify-between ">
        <div className="flex items-center gap-3">
          {StatusOptions.icon}
          <div className="leading-5">
            <p className={`${StatusOptions.statusColor} font-semibold text-sm`}>
              {StatusOptions.label}
            </p>
            <span className="text-[#8C8C8C] text-xs">Estimate: 24 hours.</span>
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
