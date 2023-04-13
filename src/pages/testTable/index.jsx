import React, { useState } from "react";
import Table from "../../components/Table";
import { useToggle } from "hooks";
import { Status, Pagination, Skeleton, Filter } from "../../components";
import PopoverMenu from "components/PopoverMenu";

import TableTools from "../../components/Table/TableTools";

import InvoiceStatus from "data/json/InvoiceStatus.json";

import useTable from "../../components/Table/useTable";

export const testTable = () => {
  const {
    handleChangeUrlParams: ChangeURl,
    paginationSettings,
    TransactionData,
    isMutating,
  } = useTable({
    sort: "",
    search: "",
    type: "all",
    offset: 0,
    limit: "5",
  });

  const tempData = TransactionData?.data?.transactions;
  const tabs = ["all", "invoice", "link"];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectOption = (e) => {
    const value = e.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  console.log("selectedOptions", `filter=${selectedOptions.join()}`);

  return (
    <div className="flex flex-col gap-4">
      <h2>Table dierentdi table</h2>
      <TableTools onSearch={(search) => ChangeURl("search", search)}>
        <PopoverMenu
          title="filter"
          butClassName="h-full !bg-white !shadow-md !text-gray-dark rounded-lg"
          Icon={<Filter className="self-center w-4 h-4 ml-1 mr-2 font-bold" />}
        >
          {InvoiceStatus["all"].map((item, i) => (
            <div className="p-2 mb-2 hover:bg-gray " key={i}>
              <label
                htmlFor={item.label}
                className="flex items-center content-center justify-start gap-2 px-3 pt-1"
                onChange={handleSelectOption}
              >
                <input
                  value={item.value}
                  id={item.label}
                  name={item.label}
                  type="checkbox"
                  className="mb-2 accent-blue"
                  checked={Boolean(selectedOptions.indexOf(item.value) != -1)}
                />
                <span className="self-center"> {item.label}</span>
              </label>
            </div>
          ))}
        </PopoverMenu>
        ;
      </TableTools>
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
