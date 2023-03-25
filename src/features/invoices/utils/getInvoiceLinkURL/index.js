import { API_SERVICES_URLS } from "data";

export function getInvoiceLinkURL(id, isInvoice = true) {
  return isInvoice
    ? API_SERVICES_URLS.INVOICE.INVOICE_DETAILS(id)
    : API_SERVICES_URLS.INVOICE.LINK_DETAILS(id);
}

export default getInvoiceLinkURL;
