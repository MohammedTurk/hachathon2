import { NoSsr } from "components";
import React from "react";

export const CreateLink = () => {
  return (
    <NoSsr>
      <div>CreateLink</div>
    </NoSsr>
  );
};
CreateLink.mainLayoutProps = {
  title: "Talents Valley Create Link",
  pageDescription: "Create Link page description",
  contentClassName: "!block !p-2 !pr-4",
};

export default CreateLink;
