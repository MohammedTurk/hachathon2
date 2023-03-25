import { useEffect, useState } from "react";
import { Button, Input, TabTable, Card, Checkbox, Link } from "components";
import { API_SERVICES_URLS } from "data";
import { useSWRMutationHook } from "hooks";
import { Filter } from "components/svg";
import { MagnifyingGlassIconOutline, PlusIconMini } from "lib/@heroicons";

export const TransactionsWrapper = () => {
  const buttonClasses = {
    buttonLink:
      "bg-gray-50 text-[#4375FF] flex items-center gap-1 sm:gap-2	h-9 block p-3 rounded-md hover:bg-blue-light hover:text-white transition-colors",
    iconButton:
      "!rounded-lg bg-[#F3F6FF] !text-[#4375FF] hover:!text-[#F3F6FF] hover:!bg-[#4375FF] ",
    buttonText: "text-sm",
  };

  const [transactions, setTransactions] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [sortValue, setSortValue] = useState("");
  const [filteredValue, setFilteredValue] = useState<any>([]);
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("all");
  const [checkboxes, setCheckboxes] = useState({
    invoice: [
      {
        id: 1,
        value: "paid",
        checked: false,
      },
      {
        id: 2,
        value: "sent",
        checked: false,
      },
      {
        id: 3,
        value: "Pending",
        checked: false,
      },
      {
        id: 4,
        value: "Canceled",
        checked: false,
      },
      {
        id: 5,
        value: "active",
        checked: false,
      },
      {
        id: 6,
        value: "inactive",
        checked: false,
      },
      {
        id: 7,
        value: "disapproved",
        checked: false,
      },
      {
        id: 8,
        value: "refunded",
        checked: false,
      },
    ],
    link: [
      {
        id: 3,
        value: "Pending",
        checked: false,
      },
      {
        id: 5,
        value: "active",
        checked: false,
      },
      {
        id: 6,
        value: "inactive",
        checked: false,
      },
      {
        id: 7,
        value: "disapproved",
        checked: false,
      },
    ],
  });

  const {
    trigger: getTransactionData,
    data: TransactionData,
    isMutating,
  } = useSWRMutationHook(
    `${API_SERVICES_URLS.CLIENT.INVOICE_LIST}?limit=5${
      sortValue ? `&sort=${sortValue}` : ""
    }${searchValue ? `&search=${searchValue}` : ""}${
      filteredValue.length > 0 ? `&filter=${filteredValue.join()}` : ""
    }&offset=${currentPage}&type=${type}`,
    "GET"
  );

  useEffect(() => {
    getTransactionData();
  }, []);

  useEffect(() => {
    getTransactionData();
    if (TransactionData) {
      setTransactions(TransactionData?.data);
    }
  }, [type]);

  useEffect(() => {
    if (TransactionData) {
      setTransactions(TransactionData?.data);
      console.log(TransactionData);
    }
  }, [isMutating]);

  const handleNextPaginate = () => {
    setCurrentPage((prev) => prev + 1);
    getTransactionData();
  };

  const handlePrevPaginate = () => {
    setCurrentPage((prev) => prev - 1);
    getTransactionData();
  };
  const handleSortData = (value: any) => {
    const sortedFor = `${value}`;
    setSortValue(sortedFor);
    getTransactionData();
  };
  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
    setTimeout(() => {
      getTransactionData();
    }, 1000);
  };

  const handleCheck = (event: any, id: any) => {
    if (event.target.checked) {
      setFilteredValue([...filteredValue, event.target.value]);
      const boxes = { ...checkboxes };
      let targetCheckboxFromInvoice = boxes.invoice.find(
        (item) => item.id === id
      );
      let targetCheckboxFromLink = boxes.link.find((item) => item.id === id);
      if (targetCheckboxFromInvoice) {
        targetCheckboxFromInvoice.checked = true;
      }
      if (targetCheckboxFromLink) {
        targetCheckboxFromLink.checked = true;
      }

      setCheckboxes({ ...boxes });
      setTimeout(() => {
        getTransactionData();
      }, 2000);
    } else {
      const values = filteredValue.filter(
        (value: any) => value !== event.target.value
      );
      setFilteredValue(values);
      const boxes = { ...checkboxes };
      let targetCheckboxFromInvoice = boxes.invoice.find(
        (item) => item.id === id
      );
      let targetCheckboxFromLink = boxes.link.find((item) => item.id === id);
      if (targetCheckboxFromInvoice) {
        targetCheckboxFromInvoice.checked = false;
      }
      if (targetCheckboxFromLink) {
        targetCheckboxFromLink.checked = false;
      }

      setCheckboxes({ ...boxes });
      setTimeout(() => {
        getTransactionData();
      }, 1000);
    }
  };

  const handleTabClick = (value: any) => {
    setType(value);
  };

  return (
    <>
      <div className="flex justify-between  ">
        <Input
          id="search"
          inputClassName="pl-10"
          inputSize="small"
          placeholder="Search"
          startIcon={<MagnifyingGlassIconOutline className="w-5 h-5" />}
          onChange={(e) => handleSearch(e)}
          withoutHelperText
        />
        <div className="flex justify-between sm:gap-1 ">
          <Link href="/invoices/create-link" className={buttonClasses.buttonLink}>
            <PlusIconMini className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs  sm:text-sm">Link</span>
          </Link>
          <Link
            href="/invoices/create-invoice"
            className={buttonClasses.buttonLink}
          >
            <PlusIconMini className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs  sm:text-sm">Invoice</span>
          </Link>

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
              {checkboxes.invoice.map(({ id, value, checked }) => (
                <Checkbox
                  key={id}
                  id={value}
                  label={value.toUpperCase()}
                  checked={checked}
                  value={value}
                  onClick={(e) => handleCheck(e, id)}
                />
              ))}
            </Card>
          )}
        </div>
      </div>
      <div>
        <TabTable
          types={["all", "invoice", "service"]}
          handleTabClick={handleTabClick}
          transactions={transactions}
          handleSortData={handleSortData}
          type={type}
          isMutating={isMutating}
          handlePrevPaginate={handlePrevPaginate}
          handleNextPaginate={handleNextPaginate}
          currentPage={currentPage}
          getTransactionData={getTransactionData}
        />
      </div>
    </>
  );
};
