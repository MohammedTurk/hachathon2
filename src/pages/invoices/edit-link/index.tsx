import { NoSsr } from "components";
import React from "react";

export const EditLink = () => {
  return (
    <NoSsr>
      <div>EditLink</div>
    </NoSsr>
  );
};

EditLink.mainLayoutProps = {
  title: "Talents Valley Edit Link",
  pageDescription: "Edit Link page description",
  contentClassName: "!block !p-2 !pr-4",
};

export default EditLink;
