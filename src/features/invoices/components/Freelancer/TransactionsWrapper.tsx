import { useEffect, useState } from "react";
import { Button, Input, TableSkeleton ,TabTable} from "components";
import { API_SERVICES_URLS } from "data";
import { useSWRMutationHook } from "hooks";
import { InvoicesTable } from "./InvoicesTable";
export const TransactionsWrapper = () => {
console.log('TransactionsWrapper');

 
  const [transactions, setTransactions] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [sortValue, setSortValue] = useState("");
  const [filteredValue, setFilteredValue] = useState();
  const [searchValue, setSearchValue] = useState("");
  const[type,setType]= useState("all");

  const { trigger: getTransactionData ,data:TransactionData,isMutating  } = useSWRMutationHook(`${
    API_SERVICES_URLS.CLIENT.INVOICE_LIST
  }?limit=5&sort=${sortValue}&offset=${currentPage}&type=${type}${
    filteredValue ? `&filter=${filteredValue}` : ""
  }${searchValue ? `&search=${searchValue}` : ""}`,
    "GET",
  
  );
  useEffect(() => {
    getTransactionData();
  }, []);

  useEffect(() => {
    if(TransactionData){
      setTransactions(TransactionData?.data);
      console.log('data is from inside',TransactionData?.data);
      
    }
    console.log('data is from outside',TransactionData?.data);
 

    
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
  const updatedata = (value) => {
    setType(value);
  }
  return (
    <div className="">
      {/* <span className="text-xl font-semibold text-gray-dark mb-4 block">
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
                </Button> */}
      {/* </div>
        </div>
      </div> */}
      {isMutating ? (
        <TableSkeleton />
      ) : (
        <div className="">
          <InvoicesTable
            transactions={transactions}
            handleSortData={handleSortData}
            handlePrevPaginate={handlePrevPaginate}
            handleNextPaginate={handleNextPaginate}
            currentPage={currentPage}
          />
           <TabTable
            updatedata={updatedata}
            transactions={transactions}

          />
        </div>
      )}
    </div>
 
  );
};
