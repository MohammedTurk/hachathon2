import { NoSsr } from "components";
import { CreateLinkForm,InvoiceWrapper } from "features/invoices";
 import React from "react";

export const CreateLink = () => {
  return (
    <NoSsr>
       <InvoiceWrapper>
        <CreateLinkForm />
    </InvoiceWrapper>
    </NoSsr>
  );
};
CreateLink.mainLayoutProps = {
  title: "Talents Valley Create Link",
  pageDescription: "Create Link page description",
  contentClassName: "!block !p-2 !pr-4",
  withoutFooter: true

};

export default CreateLink;
