import React, { useState, useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "lib/@heroicons";
import { NavTable, TabTable, PaginationTable } from "components";
import { useToggle,useSWRMutationHook } from "hooks";
import { API_SERVICES_URLS } from "data";
import { getCookie } from "lib/js-cookie";
import { COOKIES_KEYS } from "data";
import { useSWR, type Fetcher } from "lib/swr";

import axios from "axios";
const currentUser = getCookie(COOKIES_KEYS.currentUser);

const InvoicesFetcher = async (url:string) => {
  const currentUser = getCookie(COOKIES_KEYS.currentUser);  
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${currentUser?.accessToken }`,
      'Content-Type': 'application/json'
    },
  })
  return res.data;
};

export const InvoicesTable = ({
  transactions,
  handleNextPaginate,
  handlePrevPaginate,
  handleSortData,
  currentPage,
}:any) => {
  const [idTransaction, setIdTransaction] = useState();
  // const {trigger :getTransactionDetails ,isMutating } = useSWRMutationHook(API_SERVICES_URLS.INVOICES.INVOICE_LIST , {method: "GET",headers:{ Authorization: `Bearer ${currentUser?.accessToken}`,
  // "Content-Type": "application/json",}})
  // const { data, error, isLoading } = useSWR(
  //   "https://talents-valley-backend.herokuapp.com/api/transactions/invoice-service-listing?limit=10&offset=0&type=all",
  //   InvoicesFetcher
    
  // );
  // const dataapp=data?.data.transactions
  // console.log('app '+dataapp.invoice?.client.fullName)
  // transaction.invoice.freelancer.firstName;
// console.log("invoices " +transactions)

// data?.data.transactions.forEach(transaction => {
//   if (transaction.type === 'invoice') {
//     const email = transaction.invoice.client.email;
//     console.log('Client Email:', email);
//   }
// });


  const [detailedTransaction, setDetailedTransaction] = useState();

  const {
    isOpen: isOpenDrawal,
    closeModal: closeModalDrawal,
    openModal: openModalDrawal,
  } = useToggle();

  const paginateCount = () => Math.floor(transactions?.count / 5);
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
  //   useEffect(()=>{
  //     const fetch =async ()=>{
  //         const response = await getTransactionDetails()
  //         if(response.status == "failed") return
  //          setDetailedTransaction(response)
  //          console.log(response.data.invoices[0].freelancer.firstName)

  //     }
  //     fetch()
  // },[idTransaction])
  //   const GetTransactionData = async (id)=>{

  //     setIdTransaction(id)
  //     openModalDrawal()

  //    }
  return (
    <>
      <NavTable />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {/* <TabTable /> */}

        <table className="w-full text-sm text-left  ">
          {/* <thead className="text-xs  uppercase bg-[#FFFF] ">
            <tr>
              <th className="text-sm px-6 pb-3 pt-4 font-medium text-gray-400 capitalize flex gap-4">
                <div className="flex items-center gap-2">
                  Name
                  <div className="flex flex-col  gap-1">
                    <a
                      href="#"
                      onClick={() => handleSortData("name")}
                      className="text-[#9E9E9E]"
                    >
                      <ChevronUpIcon className="h-3 w-3" />
                    </a>
                    <a
                      href="#"
                      onClick={() => handleSortData("-name")}
                      className="text-[#9E9E9E]"
                    >
                      <ChevronDownIcon className="h-3 w-3" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  Date
                  <div className="flex flex-col  gap-1">
                    <a
                      href="#"
                      onClick={() => handleSortData("date")}
                      className="text-[#9E9E9E]"
                    >
                      <ChevronUpIcon className="h-3 w-3" />
                    </a>
                    <a
                      href="#"
                      onClick={() => handleSortData("-date")}
                      className="text-[#9E9E9E]"
                    >
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
          </thead> */}
          {/* <tbody>
            {transactions?.invoices.map((invoice) => (
              
              <tr
                key={invoice._id}
                className="bg-white border-b hover:bg-gray-light "
                onClick={() => GetTransactionData(invoice._id)}
              >
                    {invoice.office?.name || invoice.bank?.bankName}

                <th
                  scope="row"
                  className="px-6 py-4   whitespace-nowrap  flex flex-col"
                >
                  <span className="text-gray-dark font-medium">
                  </span>
                  <span className="text-gray-400 font-normal text-xs pt-1">
                    {invoice.createdAt}
                  </span>
                </th>

                <td className="px-6 py-4 text-gray-dark font-medium text-md">
                  {invoice.recipient?.name || invoice.bank?.accountName}
                </td>
                <td className="px-6 py-4 text-black font-medium text-md">
                  {"$" + invoice.amount}
                </td>
                <td
                  className={`px-6 py-4 font-medium ${statusColor(
                    invoice.status
                  )}`}
                >
                  {invoice.status}
                </td>
              </tr>
            ))} <tr>
            <td>
              <div
                aria-label="Page navigation example"
                className="w-full flex justify-center p-1   bg-white"
              >
                <ul className="inline-flex items-center   ">
                  {currentPage > 0 && (
                    <li onClick={handlePrevPaginate}>
                      <a
                        href="#"
                        className="block px-3 py-2 ml-0   text-gray-500 bg-white     rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                      >
                        <span className="sr-only">Previous</span>
                        <svg
                          aria-hidden="true"
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  )}
      
                  <li className="px-3">
                    Page {currentPage} - {paginateCount()}
                  </li>
                  {currentPage < paginateCount() && (
                    <li onClick={handleNextPaginate}>
                      <a
                        href="#"
                        className="block px-3 py-2   text-gray-500 bg-white     rounded-r-lg hover:bg-gray-100 hover:text-gray-700  "
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          aria-hidden="true"
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </td>
          </tr>
          </tbody> */}
        </table>
        {/* <PaginationTable /> */}
      </div>
      {/* <Drawal isOpen={isOpenDrawal} closeDrawal={closeModalDrawal} data={detailedTransaction?.data} isMutating={isMutating}/> */}
    </>
  );
};

export default InvoicesTable;
