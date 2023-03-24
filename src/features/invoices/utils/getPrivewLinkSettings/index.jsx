//  archived = edit false
export function getPrivewLinkSettings(status, id) {
  const SERVICES_URL = `Test/${id}`;

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
        text: SERVICES_URL,
        isDisabled: {
          copy: true,
        },
      };
    case "active":
      return {
        text: SERVICES_URL,
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
