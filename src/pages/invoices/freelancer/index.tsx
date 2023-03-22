import { InvoicesCard, SendInvoiceForm } from "features/invoices";
import { Link } from "components";
import type { NextPageWithLayout } from "types";

const SendInvoice = () => {
  return (
    <InvoicesCard
      formTitle="invoice"
    >
      <SendInvoiceForm />
    </InvoicesCard>
  );
};


export default SendInvoice;