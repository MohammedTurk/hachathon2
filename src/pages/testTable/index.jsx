import React from "react";
import Table from "../../components/Table";

export const testTable = () => {
  return (
    <Table
      className="w-[600px]"
      headers={["Name", "Date", "Amount", "Client", "Status"]}
      onSort={(baseon, isUp) => console.log("baseon", baseon, isUp)}
    />
  );
};

export default testTable;
