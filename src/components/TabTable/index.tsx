import { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronUpIconMini, ChevronDownIconMini } from "lib/@heroicons";
import { NavTable, PaginationTable } from "components";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const TabTable = ({
  types = ["all", "invoices", "links"],
  updateType,
  transactions,
}) => {
  const statusColor = (status) => {
    if (status === "pending") {
      return "text-[#DAA545]";
    } else if (status === "ready") {
      return "text-[#4BAE4F]";
    } else if (status === "sent") {
      return "text-blue-light";
    } else if (status === "paid") {
      return "text-[#4BAE4F]";
    } else {
      return "text-gray-dark";
    }
  };
  // console.log(
  //   "maha " + transactions?.transactions[1].invoice?.fixed[0].itemName
  // );
  const data = transactions?.transactions;
  const timestamp = transactions?.transactions[0]?.updatedAt;
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

  return (
    <div className="w-full sm:px-0 bg-[#FFFF] shadow-md sm:rounded-lg">
      <Tab.Group>
        <Tab.List className="flex ">
          {types.map((type) => {
            return (
              <Tab
                key={type}
                className={({ selected }) =>
                  classNames(
                    "p-2 pl-7 text-sm font-medium text-gray-400",
                    selected
                      ? "text-blue-500 border-b-4 border-blue-500 "
                      : "text-gray-500"
                  )
                }
                onClick={() => updateType(type)}
              >
                {type}
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
                        <ChevronUpIconMini className="h-3 w-3" />
                      </a>
                      <a href="#" className="text-[#9E9E9E]">
                        <ChevronDownIconMini className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    Date
                    <div className="flex flex-col  gap-1">
                      <a href="#" className="text-[#9E9E9E]">
                        <ChevronUpIconMini className="h-3 w-3" />
                      </a>
                      <a href="#" className="text-[#9E9E9E]">
                        <ChevronDownIconMini className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </th>
                <th className="px-6 py-3 text-sm pb-3 pt-4 font-medium text-gray-400 capitalize">
                  <div className="flex items-center">
                    Amount{" "}
                    <div className="flex flex-col pl-1">
                      <a href="#">
                        <ChevronUpIconMini className="h-3 w-3 font-bold" />
                      </a>
                      <a href="#">
                        <ChevronDownIconMini className="h-3 w-3 font-bold" />
                      </a>
                    </div>
                  </div>
                </th>
                <th className="px-6 py-3 text-sm pb-3 pt-4 font-medium text-gray-400 capitalize">
                  <div className="flex items-center">
                    Client{" "}
                    <div className="flex flex-col pl-1">
                      <a href="#">
                        <ChevronUpIconMini className="h-3 w-3 font-bold" />
                      </a>
                      <a href="#">
                        <ChevronDownIconMini className="h-3 w-3 font-bold" />
                      </a>
                    </div>
                  </div>
                </th>
                <th className="px-6 py-3 text-sm pb-3 pt-4 font-medium text-gray-400 capitalize">
                  <div className="flex items-center">
                    Status{" "}
                    <div className="flex flex-col pl-1">
                      <a href="#">
                        <ChevronUpIconMini className="h-3 w-3 font-bold" />
                      </a>
                      <a href="#">
                        <ChevronDownIconMini className="h-3 w-3 font-bold" />
                      </a>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions?.transactions.map((items) => (
                <tr
                  key={items._id}
                  className="bg-white border-b hover:bg-gray-light"
                >
                  <span className="pl-6">
                    {" "}
                    {items?.invoice?.fixed[0].itemName}
                  </span>

                  <th className="px-6 whitespace-nowrap flex flex-col">
                    <span className="text-gray-400 font-normal text-xs pt-1">
                      {dateText}
                    </span>
                  </th>

                  <td className="px-6 py-4 text-gray-dark font-medium text-md">
                    {items?.invoice?.fixed[0].price}
                  </td>

                  <td className="px-6 py-4 text-black font-medium text-md">
                    {items?.invoice?.client.fullName || "_"}
                  </td>
                  <td
                    className={`px-6 py-4 font-medium ${statusColor(
                      items.status
                    )}`}
                  >
                    {items.invoice?.status}
                  </td>
                </tr>
              ))}{" "}
              <tr></tr>
            </tbody>
          </table>
        </div>
 
      </Tab.Group>
    </div>
  );
};
