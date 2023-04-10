import React from "react";
import Table from "../../components/Table";

export const testTable = () => {
  const onClick = console.log;

  function handleRender(row, tdClassName, ...rest) {
    return (
      <tr
        className="w-full text-gray-900 bg-white border-b cursor-pointer border-gray hover:bg-gray-light text"
        onClick={() => onClick(row)}
        {...rest}
      >
        <td>
          <div className="flex flex-col px-2 py-3 ">{row[0]}</div>
        </td>
        <td>
          <div className="flex flex-col px-2 py-3 ">{row[1]}</div>
        </td>
        <td>
          <div className="flex flex-col px-2 py-3 ">{row[2]}</div>
        </td>
      </tr>
    );
  }
  return (
    <Table
      className="w-[600px] "
      thClassName="text-blue"
      headers={[["Name", "Date"], "Amount", ["Client", "Status"]]}
      onSort={(baseon) => console.log("baseon", baseon)}
      data={[
        ["ahmed", "2000", "300"],
        ["ahmed", "2000", "300"],
        ["ahmed", "2000", "300"],
        [
          "ahmed",
          "2000",
          "300",
          {
            dsadsa: "das",
          },
        ],
      ]}
      renderRow={handleRender}
    />
  );
};

export default testTable;
