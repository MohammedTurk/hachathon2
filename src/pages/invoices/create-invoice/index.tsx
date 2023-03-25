import {  NoSsr } from "components";
import { CreateInvoiceForm ,InvoiceWrapper} from "features/invoices/components";
import React from "react";

export const CreateInvoice = () => {
  return (
    <NoSsr>
         <InvoiceWrapper>
            <CreateInvoiceForm/>
        </InvoiceWrapper>
    </NoSsr>
  );
};
CreateInvoice.mainLayoutProps = {
  title: "Talents Valley Create Invoice",
  pageDescription: "Create Invoice page description",
  contentClassName: "!block  !p-0 ",
  withoutFooter: true
};
export default CreateInvoice;
