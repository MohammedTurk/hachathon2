import getInvoiceLinkURL from "../getInvoiceLinkURL";
//  archived = edit false
export function getPrivewLinkSettings(status, id) {
  switch (status) {
    case "pending_verification":
    case "pending_approval":
      return {
        text: "Once Approved. Link will Show up here.",
        isDisabled: {
          copy: true,
        },
      };

    case "inactive":
      return {
        text: getInvoiceLinkURL(id, false),
        isDisabled: {
          copy: true,
        },
      };
    case "active":
      return {
        text: getInvoiceLinkURL(id, false),
        isDisabled: {
          copy: false,
        },
      };
    case "cancelled":
    case "canceled":
      return {
        text: "Link Caneled. No Link Shown",
        isDisabled: {
          copy: true,
        },
      };
    case "disapproved":
      return {
        text: "Link Disapproved. No Link Shown",
        isDisabled: {
          copy: true,
        },
      };
  }
}

export default getPrivewLinkSettings;
