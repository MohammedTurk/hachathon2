import React from "react";
import Search from "./Search";

export const TableTools = ({ children, onSearch, ...rest }) => {
  return (
    <div className="flex justify-between p-2" {...rest}>
      <Search setSearch={onSearch} />
      {children}
      <div>Filter</div>
    </div>
  );
};

export default TableTools;
