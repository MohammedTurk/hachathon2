import { API_SERVICES_URLS } from "data";

export function getInvoiceLinkURL(id, isInvoice = true) {
  return isInvoice
    ? API_SERVICES_URLS.CLIENT.GET_INVOICE(id)
    : API_SERVICES_URLS.CLIENT.LINK_DETAILS(id);
}

export default getInvoiceLinkURL;
