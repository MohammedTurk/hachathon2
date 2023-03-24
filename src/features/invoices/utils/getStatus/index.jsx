import {
  Active,
  Cancelled,
  CheckIcon,
  Disapproved,
  Paypal,
  Pending,
  SendIcon,
} from "components/svg";
import React from "react";
export function getStatus(status) {
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
        text: "You can edit your invoice.",
        hasError: true,
      };

    case "archived":
      return {
        label: "Archived",
        statusColor: "text-[#000]",
        icon: <Disapproved />,
        text: "You can't edit your invoice.",
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

export default getStatus;
