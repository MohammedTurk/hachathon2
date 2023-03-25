import { NoSsr } from "components";
import { EditInvoiceForm,InvoiceWrapper } from "features/invoices";
 import React from "react";

export const EditInvoice = () => {
   return (
    <NoSsr>
     <InvoiceWrapper>
        <EditInvoiceForm  />
    </InvoiceWrapper>
    </NoSsr>
  );
};

EditInvoice.mainLayoutProps = {
  title: "Talents Valley Edit Invoice",
  pageDescription: "Edit Invoice page description",
  contentClassName: "!block  !p-0 ",
  withoutFooter: true
};

export default EditInvoice;
