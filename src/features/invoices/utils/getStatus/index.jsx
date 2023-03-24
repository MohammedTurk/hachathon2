import {
  Active,
  Cancelled,
  CheckIcon,
  Disapproved,
  Paypal,
  Pending,
  SendIcon,
} from "components/svg";
import { ErrorIconMini } from "lib/@heroicons";
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
    case "unpaid":
      return {
        label: "unPaid",
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
    case "inactive":
      return {
        label: "Inactive",
        statusColor: "text-gray-700",
        icon: <Active className="text-gray-400" />,
      };
    case "active": {
      return {
        label: "Active",
        statusColor: "text-[#4375FF]",
        icon: <Active className="text-[#4375FF]" />,
      };
    }
    default: {
      return {
        label: "Not Vaild Status",
        statusColor: "text-red",
        icon: <ErrorIconMini className="text-red w-8 h-8" />,
      };
    }
  }
}

export default getStatus;
