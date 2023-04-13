import { usePagination } from "utils";
import { useSWRMutationHook } from "hooks";
import { API_SERVICES_URLS } from "data";
import { useEffect, useState } from "react";

export const useTable = (
  params,
  baseUrl = API_SERVICES_URLS.CLIENT.INVOICE_LIST
) => {
  const [param, setPatam] = useState(params);

  const urlParams = new URLSearchParams(param);
  function handleChangeUrlParams(name, value) {
    setPatam({ ...param, [name]: value });
  }

  console.log(`?${urlParams.toString()}`);

  const {
    trigger: getTransactionData,
    data: TransactionData,
    isMutating,
  } = useSWRMutationHook(baseUrl + `?${urlParams.toString()}`, "GET");

  useEffect(() => {
    getTransactionData();
  }, [param]);

  const [selectedOptions, setSelectedOptions] = useState(param.filter || []);

  const handleSelectedOptions = (e) => {
    const value = e.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  useEffect(() => {
    if (selectedOptions.length)
      handleChangeUrlParams("filter", selectedOptions.join(","));
    else {
      const temp = { ...param };
      delete temp.filter;
      console.log("temp", temp);
      setPatam(temp);
    }
  }, [selectedOptions]);

  // i = 0, step = 5, length = 0
  const paginationSettings = usePagination(
    0,
    +params.limit,
    +TransactionData?.data?.count
  );

  useEffect(() => {
    if (TransactionData) {
      handleChangeUrlParams("offset", +paginationSettings.index);
    }
  }, [paginationSettings.index]);

  useEffect(() => {
    if (TransactionData) {
      if (!TransactionData.data?.count) {
        console.log("run");
        paginationSettings.clear();
      }
    }
  }, [isMutating]);

  return {
    handleChangeUrlParams,
    paginationSettings,
    TransactionData,
    isMutating,
    selectedOptions,
    handleSelectedOptions,
  };
};

export default useTable;
