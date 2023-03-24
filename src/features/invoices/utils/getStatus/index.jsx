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
export function getStatus(status, id) {
  const SERVICES_URL = `Test/${id}`;

  switch (status) {
    case "pending_verification":
    case "pending_approval":
      return {
        statusOptions: {
          label: "Pending Approval",
          statusColor: "text-[#DAA545]",
          icon: <Pending />,
        },
        privewLinkoptions: {
          text: "Once Approved. Link will Show up here.",
          isDisabled: {
            copy: true,
          },
        },
        optionsButtons: {
          buttonText: "Cancel",
          optionsMessage: ["No", "Yes"],
          message: "cancel your invoice?",
          requestData: {
            status: "cancelled",
          },
        },
      };
    case "cancelled":
    case "canceled":
      return {
        statusOptions: {
          label: "Cancelled",
          statusColor: "text-[#000]",
          icon: <Cancelled />,
        },
        privewLinkoptions: {
          text: "Link Caneled. No Link Shown",
          isDisabled: {
            copy: true,
          },
        },
        optionsButtons: {
          buttonText: <span className="text-red-500">Delete</span>,
          optionsMessage: ["Cancel", "Delete"],
          message: "delete your invoice?",
          requestData: {
            status: "archived",
          },
        },
      };
    case "disapproved":
      return {
        statusOptions: {
          label: "Disapproved",
          statusColor: "text-[#000]",
          icon: <Disapproved />,
          text: "You can edit your invoice.",
          hasError: true,
        },
        privewLinkoptions: {
          text: "Link Disapproved. No Link Shown",
          isDisabled: {
            copy: true,
          },
        },
        optionsButtons: {
          buttonText: <span className="text-red-500">Delete</span>,
          optionsMessage: ["Cancel", "Delete"],
          message: "delete your invoice?",
          requestData: {
            status: "archived",
          },
        },
      };

    case "archived":
      return {
        statusOptions: {
          label: "Archived",
          statusColor: "text-[#000]",
          icon: <Disapproved />,
          text: "You can't edit your invoice.",
        },
        optionsButtons: {
          withoutButtons: true,
        },
      };

    case "sent":
      return {
        statusOptions: {
          label: "Sent",
          statusColor: "text-[#000]",
          icon: <SendIcon />,
        },
        optionsButtons: {
          buttonText: "Cancel",
          optionsMessage: ["No", "Yes"],
          message: "cancel your invoice?",
          requestData: {
            status: "cancelled",
          },

          hasSendReminderButton: true,
        },
      };
    case "paid":
      return {
        statusOptions: {
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
        },
        optionsButtons: {
          withoutButtons: true,
        },
      };
    case "unpaid":
      return {
        statusOptions: {
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
        },
        optionsButtons: {
          buttonText: "Cancel",
          optionsMessage: ["No", "Yes"],
          message: "cancel your invoice?",
          requestData: {
            status: "cancelled",
          },

          hasSendReminderButton: true,
        },
      };
    case "inactive":
      return {
        statusOptions: {
          label: "Inactive",
          statusColor: "text-gray-700",
          icon: <Active className="text-gray-400" />,
        },
        privewLinkoptions: {
          text: SERVICES_URL,
          isDisabled: {
            copy: true,
          },
        },
        optionsButtons: {
          buttonText: "activate",
          optionsMessage: ["No", "Yes"],
          message: "activate your invoice?",
          requestData: {
            status: "active",
          },
        },
      };
    case "active": {
      return {
        statusOptions: {
          label: "Active",
          statusColor: "text-[#4375FF]",
          icon: <Active className="text-[#4375FF]" />,
        },
        privewLinkoptions: {
          text: SERVICES_URL,
          isDisabled: {
            copy: false,
          },
        },
        optionsButtons: {
          buttonText: "Deactivate",
          optionsMessage: ["No", "Yes"],
          message: "Deactivate your invoice?",
          requestData: {
            status: "inactive",
          },
        },
      };
    }

    default: {
      return {
        statusOptions: {
          label: "Not Vaild Status",
          statusColor: "text-red",
          icon: <ErrorIconMini className="text-red w-8 h-8" />,
        },
      };
    }
  }
}

export default getStatus;
