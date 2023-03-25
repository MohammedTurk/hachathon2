import { useEffect, useState } from "react";
import { Input, NavTable, TableSkeleton ,TabTable} from "components";
import { API_SERVICES_URLS } from "data";
import useForm from "lib/react-hook-form";
import { useSWRMutationHook } from "hooks";
import { Card , Checkbox } from 'components';
import Button from "components/Button";
import { Send } from "components/svg";
import { Filter } from 'components/svg';
import { Search, PlusIconMini } from "lib/@heroicons";
import { InvoicesTable } from "./InvoicesTable";
export const TransactionsWrapper = () => {
console.log('TransactionsWrapper');
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
  const { register } = useForm();
  const [open, setOpen] = useState(false);
  const[type,setType]= useState("all");

  const { trigger: getTransactionData ,data:TransactionData,isMutating  } = useSWRMutationHook(
  `${API_SERVICES_URLS.CLIENT.INVOICE_LIST}?limit=5${sortValue ? `&sort=${sortValue}` : ""}${searchValue ? `&search=${searchValue}` : ""}${filteredValue.length>0 ? `&filter=${filteredValue.join()}` : ""}&offset=${currentPage}&type=${type}`,
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
  const handleCheck = (event) =>{
    if(event.target.checked){
      setFilteredValue([...filteredValue,event.target.value]);
      setTimeout(() => {
        getTransactionData();
      }, 1000);
    }
    else{
      const values = filteredValue.filter((value)=>
        value!==event.target.value 
      )
      setFilteredValue(values);

      setTimeout(() => {
        getTransactionData();
      }, 1000);
    }
  }
  console.log("hee"+filteredValue)

  
  return (
    <div className="flex flex-row pb-4  ">
      <div className="flex justify-between pb-4  ">
      <div>
            <Input
              id="search"
              inputClassName="pl-10"
              inputSize="small"
              placeholder="Search"
              startIcon={<Search className="w-5 h-5" />}
              onChange={(e) => handleSearch(e)}
            />
        <div className="flex justify-between sm:gap-1 ">
          <Button className={buttonClasses.button} buttonSize="small">
            <PlusIconMini className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs  sm:text-sm"> Link</span>
          </Button>
          <Button className={buttonClasses.button} buttonSize="small">
            <Send className=" sm:w-4" />
            <span className="text-xs sm:text-sm  "> Invoice</span>
          </Button>
            <Button className="!bg-white p-9 h-fit !text-gray-dark flex items-center gap-2" buttonSize="small"
              onClick={() => setOpen(!open)}
             >
              <Filter />
              Filter
              </Button>
              {open && (
                <Card className='z-10 absolute px-6 py-3 mt-10 ml-11'>
                  <Checkbox id="Paid" label="Paid" onChange={handleCheck} value="paid"  />
                  <Checkbox id="Sent" label="Sent" onChange={(e)=>handleCheck(e)}  value="sent" />
                  <Checkbox id="Pending" label="Pending" onChange={(e)=>handleCheck(e)} value="pending" />
                  <Checkbox id="Canceled" label="Canceled" onChange={(e)=>handleCheck(e)} value="canceled" />
                  <Checkbox id="Active" label="Active" onChange={(e)=>handleCheck(e)} value="active"/>
                  <Checkbox id="InActive" label="InActive" onChange={(e)=>handleCheck(e)}  value="inactive" />
                  <Checkbox id="Disapproved" label="Disapproved" onChange={(e)=>handleCheck(e)} value="disapproved" />
                  <Checkbox id="Refunded" label="Refunded" onChange={(e)=>handleCheck(e)} value="refunded" />
                </Card>                      
              )}                     
          </div>
      </div>
      
   
      <div>
      {isMutating ? (
        <TableSkeleton />
      ) : (
        <div className="">
          <InvoicesTable
            transactions={transactions}
            handlePrevPaginate={handlePrevPaginate}
            handleNextPaginate={handleNextPaginate}
            handleSortData={handleSortData}
            currentPage={currentPage}
          />
           <TabTable
            updatedata={updatedata}
            transactions={transactions}
            handleSortData={handleSortData}
          />
        </div>
      )}
      </div>
    </div>
    </div>
 
  );
};




{/* <Card className='z-10 absolute px-6 py-3 mt-10 ml-11'>
  <Checkbox id="Paid" label="Paid" onChange={handleCheck} value="paid" />
  <Checkbox id="Sent" label="Sent" onChange={(e)=>handleCheck(e)}  value="sent" />
  <Checkbox id="Pending" label="Pending" onChange={(e)=>handleCheck(e)} value="pending" />
  <Checkbox id="Canceled" label="Canceled" onChange={(e)=>handleCheck(e)} value="canceled"/>
  <Checkbox id="Disapproved" label="Disapproved" onChange={(e)=>handleCheck(e)} value="disapproved"/>
  <Checkbox id="Refunded" label="Refunded" onChange={(e)=>handleCheck(e)} value="refunded"/>
</Card>  */}


{/* <Card className='z-10 absolute px-6 py-3 mt-10 ml-11'>
  <Checkbox id="Active" label="Active"  onChange={(e)=>handleCheck(e)} value="active" />
  <Checkbox id="InActive" label="InActive"  onChange={(e)=>handleCheck(e)}  value="inactive" />
  <Checkbox id="Disapproved" label="Disapproved" onChange={(e)=>handleCheck(e)} value="disapproved" />
  <Checkbox id="Refunded" label="Refunded" onChange={(e)=>handleCheck(e)} value="refunded"  />
</Card> */}



