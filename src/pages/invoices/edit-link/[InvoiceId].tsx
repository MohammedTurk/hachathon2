import { NoSsr } from "components";
import {EditLinkForm ,InvoiceWrapper} from "features/invoices/components";
 import React from "react";

export const EditLink = () => {
  return (
    <NoSsr>
      <InvoiceWrapper>
        <EditLinkForm />
      </InvoiceWrapper>
    </NoSsr>
  );
};

EditLink.mainLayoutProps = {
  title: "Talents Valley Edit Link",
  pageDescription: "Edit Link page description",
  contentClassName: "!block !p-2 !pr-4",
};

export default EditLink;
