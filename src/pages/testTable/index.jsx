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

  const paginationSettings = usePagination(0, 4, data.length);

  const tabs = ["all", "invoices", "links"].map((item, index) => (
    <span className="relative " key={index}>
      {item}
      <span className="absolute flex items-center justify-center w-1 h-1 p-2 text-sm text-white rounded-full -top-1 -right-4 bg-red">
        4
      </span>
    </span>
  ));
  return (
    <div className="flex flex-col gap-4">
      <h2>Table dierentdi table</h2>
      <Table
        className="w-[800px] !bg-gray-700 text-white"
        tabs={["all", "invoices", "links"]}
        headers={[["name", "date"], "amount", ["client", "status"]]}
        onSort={(baseon) => console.log("sort", baseon)}
        onChangeTab={(data) => console.log("data", data)}
        pagination={
          <Pagination
            {...paginationSettings}
            getString={(start, total) => `Page ${start} / ${total} `}
          />
        }
        classNameActive="text-white"
      >
        {paginationSettings.getRange(data).map((row) => {
          return (
            <tr
              className="w-full text-white bg-gray-400 border-b cursor-pointer border-gray hover:bg-gray-500 text"
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

      <Table
        className="w-[800px] "
        tabs={["all", "invoices", "links"]}
        headers={["name", "date", "amount", ["client", "status"]]}
        onSort={(baseon) => console.log("baseon", baseon)}
        onChangeTab={(data) => console.log("data", data)}
        pagination={
          <Pagination
            {...paginationSettings}
            getString={(start, total) => `Page ${start} / ${total} `}
          />
        }
      >
        {paginationSettings.getRange(data).map((row) => {
          return (
            <tr
              className="w-full text-back bg-white border-b cursor-pointer border-gray hover:bg-[#FAFCFF] text "
              onClick={() => onClick(row)}
            >
              <td>
                <div className="flex flex-col px-3 py-3 ">{row[0]}</div>
              </td>
              <td>
                <div className="flex flex-col px-3 py-3 ">{row[1]}</div>
              </td>
              <td>
                <div className="flex flex-col px-3 py-3 ">
                  <Status status={row[2]} />
                  <p>saddsad</p>
                  <span>Click here</span>
                </div>
              </td>
              <td>
                <div className="flex flex-col px-3 py-3 ">
                  <Status status={row[2]} />
                  <p>saddsad</p>
                  <span>Click here</span>
                </div>
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
};

export default testTable;
