import { useEffect, useState } from "react";
import {   TableSkeleton, TabTable } from "components";
import { API_SERVICES_URLS } from "data";
 
import { useSWRMutationHook } from "hooks";
import { Card, Checkbox } from "components";
import Button from "components/Button";
import { Send } from "components/svg";
import { Filter } from "components/svg";

import { MagnifyingGlassIconOutline, PlusIconMini } from "lib/@heroicons";
export const TransactionsWrapper = () => {
  const buttonClasses = {
    button: "!bg-gray-50 !text-[#4375FF] flex items-center gap-1 sm:gap-2	h-9 ",
    iconButton:
      "!rounded-lg bg-[#F3F6FF] !text-[#4375FF] hover:!text-[#F3F6FF] hover:!bg-[#4375FF] ",
    buttonText: "text-sm",
  };

  const [transactions, setTransactions] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [sortValue, setSortValue] = useState("");
  const [filteredValue, setFilteredValue] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("all");

  const {
    trigger: getTransactionData,
    data: TransactionData,
    isMutating,
  } = useSWRMutationHook(
    `${API_SERVICES_URLS.CLIENT.INVOICE_LIST}?limit=5${sortValue ? `&sort=${sortValue}` : ""}${searchValue ? `&search=${searchValue}` : ""}${filteredValue.length>0 ? `&filter=${filteredValue.join()}` : ""}&offset=${currentPage}&type=${type}`,
    "GET"
  );
  useEffect(() => {
    getTransactionData();
  }, []);

  useEffect(() => {
    if (TransactionData) {
      setTransactions(TransactionData?.data);
      console.log("data is from inside", TransactionData?.data);
    }
    console.log("data is from outside", TransactionData?.data);
  }, [isMutating]);

  const handleNextPaginate = () => {
    setCurrentPage((prev) => prev + 1);
    getTransactionData();
  };
  
  const handlePrevPaginate = () => {
    setCurrentPage((prev) => prev - 1);
    getTransactionData();
  };
  const handleSortData = (value) => {
    const sortedFor = `${value}`;
    setSortValue(sortedFor);
    getTransactionData();
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);

    setTimeout(() => {
      getTransactionData();
    }, 1000);
  };
  const updateType = (value) => {
    setType(value);
     
  };
  const handleCheck = (event) => {
    if (event.target.checked) {
      setFilteredValue([...filteredValue, event.target.value]);
      setTimeout(() => {
        getTransactionData();
      }, 1000);
    } else {
      const values = filteredValue.filter(
        (value) => value !== event.target.value
      );
      setFilteredValue(values);

      setTimeout(() => {
        getTransactionData();
      }, 1000);
    }
  };
  // console.log("hee"+filteredValue)

  return (
    <div className="flex flex-row">
      <div className="flex justify-between pb-4  ">
        <div className="relative ">
          <div className="py-3 pl-2 absolute text-gray-500">
            {" "}
            <MagnifyingGlassIconOutline className=" w-4 h-4 " />
          </div>
          <input
            className="p-3 pl-8 block w-full border-gray focus:ring-0 focus:border-blue rounded-md text-sm "
            placeholder="Search for invoice, title, client or description"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-row sm:gap-1 ">
          <Button className={buttonClasses.button} buttonSize="small">
            <PlusIconMini className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs  sm:text-sm"> Link</span>
          </Button>
          <Button className={buttonClasses.button} buttonSize="small">
            <Send className=" sm:w-4" />
            <span className="text-xs sm:text-sm  "> Invoice</span>
          </Button>
          <Button
            className="!bg-white p-9 h-fit !text-gray-dark flex items-center gap-2"
            buttonSize="small"
            onClick={() => setOpen(!open)}
          >
            <Filter />
            Filter
          </Button>
          {open && (
            <Card className="z-10 absolute px-6 py-3 mt-10 ml-11">
              <Checkbox
                id="Paid"
                label="Paid"
                onChange={handleCheck}
                value="paid"
              />
              <Checkbox
                id="Sent"
                label="Sent"
                onChange={(e) => handleCheck(e)}
                value="sent"
              />
              <Checkbox
                id="Pending"
                label="Pending"
                onChange={(e) => handleCheck(e)}
                value="pending"
              />
              <Checkbox
                id="Canceled"
                label="Canceled"
                onChange={(e) => handleCheck(e)}
                value="canceled"
              />
              <Checkbox
                id="Active"
                label="Active"
                onChange={(e) => handleCheck(e)}
                value="active"
              />
              <Checkbox
                id="InActive"
                label="InActive"
                onChange={(e) => handleCheck(e)}
                value="inactive"
              />
              <Checkbox
                id="Disapproved"
                label="Disapproved"
                onChange={(e) => handleCheck(e)}
                value="disapproved"
              />
              <Checkbox
                id="Refunded"
                label="Refunded"
                onChange={(e) => handleCheck(e)}
                value="refunded"
              />
            </Card>
          )}
        </div>

 
        {isMutating ? (
          <TableSkeleton />
        ) : (
          <div className="">
 
            {/* <InvoicesTable
              transactions={transactions}
              handleSortData={handleSortData}
              handlePrevPaginate={handlePrevPaginate}
              handleNextPaginate={handleNextPaginate}
              currentPage={currentPage}
            /> */}
            <TabTable updateType={updateType} transactions={transactions} />
          </div>
        )}
      </div>
    </div>
  );
};

{
  /* <span className="text-xl font-semibold text-gray-dark mb-4 block">
        Transactions
      </span>
      <div className="flex  justify-between">
        <div className="flex w-full gap-2">
          <div className="w-[60%]">
            <Input
              id="search"
              inputClassName="pl-10"
              inputSize="small"
              placeholder="Search"
              startIcon={<MagnifyingGlassIconMini className="w-5 h-5" />}
              onChange={(e) => handleSearch(e)}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="">
            <Button
              className="!bg-white !text-[#4375FF] hover:!text-[#F3F6FF] shadow-md hover:!bg-[#4375FF] flex items-center gap-1 sm:gap-2"
              buttonSize="small"
            >
              <ArrowDownTrayIconMini className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-xs  sm:text-sm">Withdraw</span>
            </Button>
          </div>
          <div className="">
            <MyPopover>
              <span className="flex gap-2 mb-3 items-center">
                <input type="checkbox" name="all" id="all" />
                <label htmlFor="all" className="text-gray-dark font-medium">
                  All
                </label>
              </span>
              <span className="flex gap-2 mb-3 items-center">
                <input type="checkbox" name="Send" id="Send" />
                <label htmlFor="Send" className="text-gray-dark font-medium">
                  Send
                </label>
              </span>
              <span className="flex gap-2 mb-3 items-center">
                <input type="checkbox" name="Ready" id="Ready" />
                <label htmlFor="Ready" className="text-gray-dark font-medium">
                  Ready
                </label>
              </span>

              <span className="flex gap-2 mb-3 items-center">
                <input type="checkbox" name="Pending" id="Pending" />
                <label htmlFor="Pending" className="text-gray-dark font-medium">
                  Pending
                </label>
              </span>
              <span className="flex gap-2 mb-3 items-center">
                <input type="checkbox" name="Completed" id="Completed" />
                <label
                  htmlFor="Completed"
                  className="text-gray-dark font-medium"
                >
                  Completed
                </label>
              </span>
              <span className="flex gap-2 mb-3 items-center">
                <input type="checkbox" name="Canceled" id="Canceled" />
                <label
                  htmlFor="Canceled"
                  className="text-gray-dark font-medium"
                >
                  Canceled
                </label>
              </span>
            </MyPopover>
            {/* <Button
                  buttonSize="small"
                  loading={isMutating}
                  onClick={handleSearchRequest}
                >
                  filter
                </Button> 
      {/* </div>
        </div>
      </div> */
}
