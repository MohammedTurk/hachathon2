import { Tab } from "@headlessui/react";
import React from "react";

export const TablePanel = ({ children, ...rest }) => {
  return (
    <Tab.Panel as={React.Fragment} {...rest}>
      <>{children}</>
    </Tab.Panel>
  );
};

export default TablePanel;
