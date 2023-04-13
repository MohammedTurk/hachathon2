import React, { useState } from "react";
import Table from "../../components/Table";
import { useToggle } from "hooks";
import { Status, Pagination, Skeleton, Filter } from "../../components";

import TableTools from "../../components/Table/TableTools";

import useTable from "../../components/Table/useTable";

export const testTable = () => {
  const {
    handleChangeUrlParams: ChangeURl,
    paginationSettings,
    TransactionData,
    isMutating,
    selectedOptions,
    handleSelectedOptions,
  } = useTable({
    sort: "",
    search: "",
    type: "all",
    offset: 0,
    limit: "5",
  });

  const tempData = TransactionData?.data?.transactions;
  const tabs = ["all", "invoice", "link"];

  console.log("selectedOptions", `filter=${selectedOptions.join()}`);

  return (
    <div className="flex flex-col gap-4">
      <h2>Table dierentdi table</h2>
      <TableTools
        onSearch={(search) => ChangeURl("search", search)}
        handleSelectedOptions={handleSelectedOptions}
        selectedOptions={selectedOptions}
      ></TableTools>
      <Table
        className="w-[800px] "
        tabs={tabs}
        headers={[["name", "date"], "amount", "client", "status"]}
        onSort={(name) => ChangeURl("sort", name)}
        onChangeTab={(index) => ChangeURl("type", tabs[index])}
        downSide={
          <Pagination
            {...paginationSettings}
            getString={(start, total) => `Page ${start} / ${total} `}
          />
        }
      >
        {isMutating ? (
          <>
            {"x"
              .repeat(paginationSettings.step)
              .split("")
              .map(() => (
                <tr className="w-full text-black transition-colors border-b cursor-pointer border-gray hover:bg-gray-light ">
                  <td className="px-4 py-4 ">
                    <Skeleton width="100px" height="30" />
                  </td>
                  <td className="px-4 py-4 ">
                    <Skeleton width="100px" height="30" />
                  </td>
                  <td className="px-4 py-4 ">
                    <Skeleton width="100px" height="30" />
                  </td>
                  <td className="px-4 py-4 ">
                    <Skeleton width="100px" height="30" />
                  </td>
                </tr>
              ))}
          </>
        ) : (
          <>
            {tempData?.map((row) => {
              // hover:bg-[#FAFCFF]
              return (
                <tr
                  className="w-full text-black transition-colors border-b cursor-pointer border-gray hover:bg-gray-light "
                  onClick={() => console.log(row)}
                >
                  <td>
                    <div className="flex flex-col px-4 py-4 ">
                      <h3 className="capitalize">
                        {row?.invoice?.fixed[0]?.itemName}
                      </h3>

                      <div className="flex gap-2 pt-1 pb-2">
                        <small className="font-semibold text-gray-600">
                          Today
                        </small>
                        <small className="font-normal text-gray-500">
                          PayPal
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col px-4 py-4 ">
                      1000 {row?.invoice?.currency}
                    </div>
                  </td>
                  <td className="text-gray-500 ">
                    {row?.invoice?.client?.fullName || "-"}
                  </td>
                  <td>
                    <div className="flex flex-col px-4 py-4 ">
                      <Status status={row?.invoice?.status} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </>
        )}
      </Table>
      <button onClick={() => paginationSettings.goTo(7)}>go to 7</button>
    </div>
  );
};

export default testTable;

// map((item)=> <td>{item}</td>)
