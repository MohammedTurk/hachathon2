import { BalanceCard, NoSsr } from "components";
import { CreateInvoiceForm } from "features/invoices";
import CreateWrapper from "features/invoices/components/Create&EditInvoices/InvoiceWrapper";
import { GeneralLayout } from "layouts";
import React from "react";

export const CreateInvoice = () => {
  return (
    <NoSsr>
         <CreateWrapper>
        
            <CreateInvoiceForm/>
        </CreateWrapper>
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
