import { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "lib/@heroicons";
import { NavTable, PaginationTable } from "components";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const TabTable = ({
  types = ["all", "invoices", "service"],
  transactions,
  handleTabClick,
  type,
}) => {
  const statusColor = (status) => {
    if (status === "pending") {
      return "text-[#CDA434]";
    } else if (status === "cancelled") {
      return "text-[#BEC2C6]";
    } else if (status === "Inactive") {
      return "text-[#707070]";
    } else {
      return "text-black";
    }
  };

  const filteredTransactions =
    type === "all"
      ? transactions?.transactions
      : transactions?.transactions.filter(
          (item) => item.invoice?.type === type || item.service?.type === type
        );

  const datatype = transactions?.transactions[0].type;
  const timestamp = transactions?.transactions[0].updatedAt;
  const date = new Date(timestamp);
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
  });

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 1
  );

  let dateText = "";
  if (date >= today) {
    dateText = "today";
  } else if (date >= yesterday) {
    dateText = "yesterday";
  } else {
    dateText = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  // function handleTabClick(type) {
  //   setSelectedTab(type);
  // }
  return (
    <div className="w-full sm:px-0 bg-[#FFFF] shadow-md sm:rounded-lg">
      <Tab.Group>
        <Tab.List className="flex ">
          {types.map((items) => {
            return (
              <Tab
                key={items}
                className={({ selected }) =>
                  classNames(
                    "p-2 pl-7 text-sm font-medium text-gray-400",
                    selected
                      ? "text-blue-500 border-b-4 border-blue-500 "
                      : "text-gray-500"
                  )
                }
                onClick={() => handleTabClick(items)}
              >
                {items}
              </Tab>
            );
          })}
        </Tab.List>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left  ">
            <thead className="text-xs  uppercase bg-[#FFFF] ">
              <tr>
                <th className="text-sm px-6 pb-3 pt-4 font-medium text-gray-400 capitalize flex gap-4">
                  <div className="flex items-center gap-2">
                    Name
                    <div className="flex flex-col  gap-1">
                      <a href="#" className="text-[#9E9E9E]">
                        <ChevronUpIcon className="h-3 w-3" />
                      </a>
                      <a href="#" className="text-[#9E9E9E]">
                        <ChevronDownIcon className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    Date
                    <div className="flex flex-col  gap-1">
                      <a href="#" className="text-[#9E9E9E]">
                        <ChevronUpIcon className="h-3 w-3" />
                      </a>
                      <a href="#" className="text-[#9E9E9E]">
                        <ChevronDownIcon className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </th>
                <th className="px-6 py-3 text-sm pb-3 pt-4 font-medium text-gray-400 capitalize">
                  <div className="flex items-center">
                    Amount{" "}
                    <div className="flex flex-col pl-1">
                      <a href="#">
                        <ChevronUpIcon className="h-3 w-3 font-bold" />
                      </a>
                      <a href="#">
                        <ChevronDownIcon className="h-3 w-3 font-bold" />
                      </a>
                    </div>
                  </div>
                </th>
                <th className="px-6 py-3 text-sm pb-3 pt-4 font-medium text-gray-400 capitalize">
                  <div className="flex items-center">
                    Client{" "}
                    <div className="flex flex-col pl-1">
                      <a href="#">
                        <ChevronUpIcon className="h-3 w-3 font-bold" />
                      </a>
                      <a href="#">
                        <ChevronDownIcon className="h-3 w-3 font-bold" />
                      </a>
                    </div>
                  </div>
                </th>
                <th className="px-6 py-3 text-sm pb-3 pt-4 font-medium text-gray-400 capitalize">
                  <div className="flex items-center">
                    Status{" "}
                    <div className="flex flex-col pl-1">
                      <a href="#">
                        <ChevronUpIcon className="h-3 w-3 font-bold" />
                      </a>
                      <a href="#">
                        <ChevronDownIcon className="h-3 w-3 font-bold" />
                      </a>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>

            <Tab.Panels>
              {types.map((items, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  {filteredTransactions?.map((items) => (
                    <tr
                      key={items._id}
                      className="bg-white border-b hover:bg-gray-light "
                    >
                      <div className="flex flex-row ">
                        {items?.invoice?.fixed
                          .slice(0, 2)
                          .map((fixed, index) => (
                            <span className="pl-6" key={fixed._id}>
                              {fixed?.itemName.length > 12
                                ? fixed.itemName.substring(0, 12) + "..."
                                : fixed.itemName}
                              {index === 1 &&
                              items?.invoice.fixed.length > 2 ? (
                                <span className="pl-2">+ other</span>
                              ) : null}
                            </span>
                          )) ||
                          items?.service?.fixed
                            .slice(0, 2)
                            .map((fixed, index) => (
                              <span className="pl-6" key={fixed._id}>
                                {fixed?.itemName.length > 12
                                  ? fixed.itemName.substring(0, 12) + "..."
                                  : fixed.itemName}
                                {index === 1 &&
                                items?.service.fixed.length > 2 ? (
                                  <span className="pl-2">+ other</span>
                                ) : null}
                              </span>
                            ))}
                      </div>
                      <th className="px-6 whitespace-nowrap flex flex-col">
                        <span className="text-gray-400 font-normal text-xs pt-1">
                          {dateText}
                          <span className="pl-2 text-gray-500">
                            {items?.invoice?.currency ||
                              items?.service?.currency}
                          </span>
                        </span>
                      </th>

                      <td className="px-6 py-4 text-gray-dark font-medium text-md">
                        $
                        {items?.invoice?.fixed.reduce(
                          (total, fixed) => total + fixed.price,
                          0
                        ) ||
                          items?.service?.fixed.reduce(
                            (total, fixed) => total + fixed.price,
                            0
                          )}
                      </td>
                      <td className="px-6 py-4 text-black font-medium text-md">
                        {items?.invoice?.client.fullName || "_"}
                      </td>
                      <td
                        className={`px-6 py-4 font-medium ${statusColor(
                          items.status
                        )}`}
                      >
                        {items.invoice?.status || items.service?.status}
                      </td>
                    </tr>
                  ))}{" "}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </table>
        </div>
      </Tab.Group>
    </div>
  );
};
