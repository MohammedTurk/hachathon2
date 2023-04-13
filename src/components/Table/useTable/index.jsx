import { usePagination } from "utils";
import { useSWRMutationHook } from "hooks";
import { API_SERVICES_URLS } from "data";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

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
  };
};

export default useTable;
