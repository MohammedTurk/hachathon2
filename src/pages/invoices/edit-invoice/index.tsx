import { NoSsr } from "components";
import React from "react";

export const EditInvoice = () => {
  return (
    <NoSsr>
      <div className="">EditInvoice</div>
    </NoSsr>
  );
};

EditInvoice.mainLayoutProps = {
  title: "Talents Valley Edit Invoice",
  pageDescription: "Edit Invoice page description",
  contentClassName: "!block !p-2 !pr-4",
};

export default EditInvoice;
