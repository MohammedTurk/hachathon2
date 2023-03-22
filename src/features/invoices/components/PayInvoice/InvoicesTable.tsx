import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "lib/@heroicons";
import { NavTable } from "components/NavTable";
import { TabTable } from "components/TabTable";
// import { useToggle } from "hooks";


function InvoicesTable() {
  // const paginateCount = () => Math.floor(transactions?.count / 5);
  // const {
  //   isOpen: isOpenDrawal,
  //   closeModal: closeModalDrawal,
  //   openModal: openModalDrawal,
  // } = useToggle();
  return (
    <>
    <NavTable/>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <TabTable/>

      <table className="w-full text-sm text-left  ">
        <thead className="text-xs  uppercase bg-[#FFFF] ">
          <tr>
            <th className="px-6 py-3">
              <div className="flex items-center">
                Name
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
            <th className="px-6 py-3">
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
            <th className="px-6 py-3">
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
            <th className="px-6 py-3">
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
        <tbody>
          <tr className="bg-white border-b hover:bg-gray-light">
            <td className="px-6 py-4 font-medium whitespace-nowrap text-gray-500	">
              Apple MacBook Pro 17
            </td>
            <td className="px-6 py-4 text-gray-600 font-medium">555</td>
            <td className="px-6 py-4 text-gray-400 font-medium 	">Laptop</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="bg-white border-b hover:bg-gray-light">
            <td className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
              Microsoft Surface Pro
            </td>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
          </tr>
          <tr className="bg-white hover:bg-gray-light">
            <td className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap ">
              Magic Mouse 2
            </td>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* <Drawal isOpen={isOpenDrawal} closeDrawal={closeModalDrawal} data={detailedTransaction?.data} isMutating={isMutating}/> */}

    </>
  );
}

export default InvoicesTable;
