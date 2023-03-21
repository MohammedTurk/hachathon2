import { NoSsr } from "components";
import React from "react";

export const CreateInvoice = () => {
  return (
    <NoSsr>
      <div className="">CreateInvoice</div>
    </NoSsr>
  );
};
CreateInvoice.mainLayoutProps = {
  title: "Talents Valley Create Invoice",
  pageDescription: "Create Invoice page description",
  contentClassName: "!block !p-2 !pr-4",
};
export default CreateInvoice;
