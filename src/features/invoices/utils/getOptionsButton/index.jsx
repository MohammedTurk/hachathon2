export function getOptionsButton(status) {
  switch (status) {
    case "pending_verification":
    case "pending_approval":
      return {
        buttonText: "Cancel",
        optionsMessage: ["No", "Yes"],
        message: "cancel your invoice?",
        requestData: {
          status: "cancelled",
        },
      };

    case "sent":
    case "unpaid":
      return {
        buttonText: "Cancel",
        optionsMessage: ["No", "Yes"],
        message: "cancel your invoice?",
        requestData: {
          status: "cancelled",
        },

        hasSendReminderButton: true,
      };
    // return { ...getOptions("unpaid"), hasThridButton: true };
    case "disapproved":
    case "cancelled":
    case "canceled":
      return {
        buttonText: <span className="text-red-500">Delete</span>,
        optionsMessage: ["Cancel", "Delete"],
        message: "delete your invoice?",
        requestData: {
          status: "archived",
        },
      };

    case "paid":
      return {
        withoutButtons: true,
      };

    case "archived":
      return {
        withoutButtons: true,
      };
    case "active":
      return {
        buttonText: "Deactivate",
        optionsMessage: ["No", "Yes"],
        message: "Deactivate your invoice?",
        requestData: {
          status: "inactive",
        },
      };
    case "inactive":
      return {
        buttonText: "activate",
        optionsMessage: ["No", "Yes"],
        message: "activate your invoice?",
        requestData: {
          status: "active",
        },
      };
  }
}

export default getOptionsButton;
