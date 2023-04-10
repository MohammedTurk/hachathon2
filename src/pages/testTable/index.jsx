import React from "react";
import Table from "../../components/Table";
import { Status, Pagination } from "../../components";
import { usePagination } from "../../utils";

export const testTable = () => {
  const onClick = console.log;

  const data = [
    ["ahmed", "1", "cancelled"],
    ["ali", "1", "ready"],
    ["mohammed", "1", "ready"],
    ["ahmed", "2", "pending"],
    ["ali", "2", "cancelled"],
    ["mohammed", "2", "completed"],
    ["ahmed", "3", "pending"],
    ["ali", "3", "ready"],
    ["mohammed", "34", "completed"],
    ["ahmed", "4", "cancelled"],
    ["ahmed", "1", "cancelled"],
    ["ali", "1", "ready"],
    ["mohammed", "1", "ready"],
    ["ahmed", "2", "pending"],
    ["ali", "2", "cancelled"],
    ["mohammed", "2", "completed"],
    ["ahmed", "3", "pending"],
    ["ali", "3", "ready"],
    ["mohammed", "34", "completed"],
    ["ahmed", "4", "cancelled"],
    ["ahmed", "1", "cancelled"],
    ["ali", "1", "ready"],
    ["mohammed", "1", "ready"],
    ["ahmed", "2", "pending"],
    ["ali", "2", "cancelled"],
    ["mohammed", "2", "completed"],
    ["ahmed", "3", "pending"],
    ["ali", "3", "ready"],
    ["mohammed", "34", "completed"],
    ["ahmed", "4", "cancelled"],
  ];

  const paginationSettings = usePagination(0, 7, data.length);

  console.log(paginationSettings);

  return (
    <Table
      className="w-[600px]"
      headers={[["Name", "Date"], "Amount", ["Client", "Status"]]}
      onSort={(baseon) => console.log("baseon", baseon)}
      pagination={
        <Pagination
          {...paginationSettings}
          getString={(start, total) => `Page ${start} of ${total} `}
        />
      }
    >
      {paginationSettings.getRange(data).map((row) => {
        return (
          <tr
            className="w-full text-gray-900 bg-white border-b cursor-pointer border-gray hover:bg-[#FAFCFF] text"
            onClick={() => onClick(row)}
          >
            <td>
              <div className="flex flex-col px-2 py-3 ">{row[0]}</div>
            </td>
            <td>
              <div className="flex flex-col px-2 py-3 ">{row[1]}</div>
            </td>
            <td>
              <div className="flex flex-col px-2 py-3 ">
                <Status status={row[2]} />
                <p>saddsad</p>
                <span>Click here</span>
              </div>
            </td>
          </tr>
        );
      })}
    </Table>
  );
};

export default testTable;
