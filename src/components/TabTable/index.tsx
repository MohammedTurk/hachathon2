import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { ChevronUpIconMini, ChevronDownIconMini } from "lib/@heroicons";
import { NavTable, PaginationTable, TableSkeleton } from "components";
import { useSWRMutationHook, useToggle } from "hooks";
import { getInvoiceLinkURL } from "features/invoices/utils";
import { Drawer } from "features/invoices";
import { useRouter } from "next/router";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const TabTable = ({
  types,
  transactions,
  handleTabClick,
  handleSortData,
  type,
  isMutating,
  handlePrevPaginate,
  handleNextPaginate,
  currentPage,
  getTransactionData
}: any) => {
  const [urlRequest, setUrlRequest] = useState("");
  const { isOpen, closeModal, openModal } = useToggle();
  const {
    trigger,
    data,
    isMutating: isMutatingDrawer,
  } = useSWRMutationHook(urlRequest, "GET");

  // when i click on the Table
  function handleClickOnTabel(id:any, isInvoice:any) {
    console.log("lastInvoiceId",id);
    console.log("invoiceType",isInvoice);
    
    openModal();
    setUrlRequest(getInvoiceLinkURL(id, isInvoice));
  }

  // request happen i id change
  useEffect(() => {
    if (urlRequest !== "") {
      trigger();
    }
  }, [urlRequest]);

  const router = useRouter();
  const { lastInvoiceId,type:invoiceType } = router.query;

  // Turk give me the id
  useEffect(() => {
    if (lastInvoiceId) {
      handleClickOnTabel(lastInvoiceId,invoiceType == 'invoice');
      console.log("lastInvoiceId",lastInvoiceId);
      console.log("invoiceType",invoiceType);
      
    }
  }, [lastInvoiceId]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log(selectedIndex);

  const statusColor = (status: any) => {
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
 
  return (
    <div className="w-full sm:px-0 bg-[#FFFF] shadow-md sm:rounded-lg">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex ">
          {types.map((items: any) => {
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
                      <a
                        href="#"
                        className="text-[#9E9E9E]"
                        onClick={() => handleSortData("name")}
                      >
                        <ChevronUpIconMini className="h-3 w-3" />
                      </a>
                      <a
                        href="#"
                        className="text-[#9E9E9E]"
                        onClick={() => handleSortData("-name")}
                      >
                        <ChevronDownIconMini className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    Date
                    <div className="flex flex-col  gap-1">
                      <a
                        href="#"
                        className="text-[#9E9E9E]"
                        onClick={() => handleSortData("date")}
                      >
                        <ChevronUpIconMini className="h-3 w-3" />
                      </a>
                      <a
                        href="#"
                        className="text-[#9E9E9E]"
                        onClick={() => handleSortData("-date")}
                      >
                        <ChevronDownIconMini className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </th>
                <th className="px-6 py-3 text-sm pb-3 pt-4 font-medium text-gray-400 capitalize">
                  <div className="flex items-center">
                    Amount{" "}
                    <div className="flex flex-col pl-1">
                      <a href="#" onClick={() => handleSortData("amount")}>
                        <ChevronUpIconMini className="h-3 w-3 font-bold" />
                      </a>
                      <a href="#" onClick={() => handleSortData("-amount")}>
                        <ChevronDownIconMini className="h-3 w-3 font-bold" />
                      </a>
                    </div>
                  </div>
                </th>
                <th className="px-6 py-3 text-sm pb-3 pt-4 font-medium text-gray-400 capitalize">
                  <div className="flex items-center">
                    Client{" "}
                    <div className="flex flex-col pl-1">
                      <a href="#" onClick={() => handleSortData("client")}>
                        <ChevronUpIconMini className="h-3 w-3 font-bold" />
                      </a>
                      <a href="#" onClick={() => handleSortData("-client")}>
                        <ChevronDownIconMini className="h-3 w-3 font-bold" />
                      </a>
                    </div>
                  </div>
                </th>
                <th className="px-6 py-3 text-sm pb-3 pt-4 font-medium text-gray-400 capitalize">
                  <div className="flex items-center">
                    Status{" "}
                    <div className="flex flex-col pl-1">
                      <a href="#" onClick={() => handleSortData("status")}>
                        <ChevronUpIconMini className="h-3 w-3 font-bold" />
                      </a>
                      <a href="#" onClick={() => handleSortData("-status")}>
                        <ChevronDownIconMini className="h-3 w-3 font-bold" />
                      </a>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {isMutating ? (
                <tr>
                  <td colSpan={4}>
                    <TableSkeleton />
                  </td>
                </tr>
              ) : (
                transactions?.transactions.map((items: any) => (
                  <tr
                    key={items._id}
                    className="bg-white border-b hover:bg-gray-light "
                    onClick={() => 
   
                      
                      handleClickOnTabel(lastInvoiceId || items._id, items.type == "invoice" )

                  
                    }
                  >
                    <th
                      scope="row"
                      className="px-6 py-4   whitespace-nowrap  flex flex-col"
                    >
                      <span className="text-gray-dark font-medium">
                        {/* {withdraw.office?.name || withdraw.bank?.bankName} */}
                        {items?.invoice?.fixed
                          .slice(0, 2)
                          .map((fixed: any, index: any) => (
                            <span className=" " key={fixed._id}>
                              {index === 1 && " + "}

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
                            .map((fixed: any, index: any) => (
                              <span className="" key={fixed._id}>
                                {index === 1 && " + "}

                                {fixed?.itemName.length > 12
                                  ? fixed.itemName.substring(0, 12) + "..."
                                  : fixed.itemName}
                                {index === 1 &&
                                items?.service.fixed.length > 2 ? (
                                  <span className="pl-2">+ other</span>
                                ) : null}
                              </span>
                            ))}
                      </span>
                    </th>

                    <td className="px-6 py-4  text-black  font-medium text-md">
                       ${items?.invoice?.subTotal || items?.service?.subTotal}
                    </td>
                    <td className="px-6 py-4 text-gray-dark font-medium text-md">
                      {items?.invoice?.client.fullName || "_"}
                    </td>
                    <td
                      className={`px-6 py-4 font-medium ${statusColor(
                       items.invoice?.status || items.service?.status
                      )}`}
                    >
                      {items.invoice?.status || items.service?.status}
                    </td>
                  </tr>
                ))
              )}
              <PaginationTable
                transactions={transactions}
                handlePrevPaginate={handlePrevPaginate}
                handleNextPaginate={handleNextPaginate}
                currentPage={currentPage}
              />
            </tbody>
          </table>
        </div>
      </Tab.Group>
      <Drawer
        isOpen={isOpen}
        closeModal={closeModal}
        response={data}
        isMutating={isMutatingDrawer}
        onChange={trigger}
        getTransactionData={getTransactionData}
      />
    </div>
  );
};
 