export const isInvoice = (data) => {
  if (data.invoiceNo) {
    return true;
  } else if (data.serviceNo) {
    return false;
  } else {
    throw new Error("data should be invoice or link ");
  }
};

export default isInvoice;
