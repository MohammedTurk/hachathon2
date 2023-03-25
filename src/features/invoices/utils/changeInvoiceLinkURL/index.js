import { API_SERVICES_URLS } from "data";

export function changeInvoiceLinkURL(id, isInvoice = true) {
  return isInvoice
    ? API_SERVICES_URLS.CLIENT.INVOICE_CHANGESTATUS(id)
    : API_SERVICES_URLS.CLIENT.LINK_CHANGESTATUS(id);
}

export default changeInvoiceLinkURL;
