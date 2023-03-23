import React, { useEffect, useState } from "react";

import { useSWRMutationHook, useToggle } from "../../../hooks";
import { Drawer } from "../../../features/invoices/components";
import { Button } from "components";
import { API_SERVICES_URLS } from "../../../data/";
import { useRouter } from "next/router";

export function Index() {
  const [idInvoice, setIdInvoice] = useState("");
  const { isOpen, closeModal, openModal } = useToggle();
  const { trigger, data, isMutating } = useSWRMutationHook(
    API_SERVICES_URLS.INVOICE.INVOICE_DETAILS(idInvoice),
    "GET"
  );

  // when i click on the Table
  function handleClickOnTabel(id) {
    openModal();
    setIdInvoice(id);
  }

  // request happen i id change
  useEffect(() => {
    if (idInvoice !== "") {
      trigger();
    }
  }, [idInvoice]);

  useEffect(() => {
    console.log("request", data?.data?.invoice.status);
  }, [data]);

  const router = useRouter();

  // Turk give me the id
  useEffect(() => {
    if (router?.query) {
      handleClickOnTabel(router?.query?.lastInvoiceId);
    }
  }, [router?.query]);

  return (
    <div>
      Index
      <Drawer
        isOpen={isOpen}
        closeModal={closeModal}
        data={data?.data?.invoice}
        isMutating={isMutating}
      />
      <Button onClick={closeModal}>close</Button>
      <Button onClick={() => handleClickOnTabel("640f99bba3350410c1a42193")}>
        unpaid
      </Button>
      <Button onClick={() => handleClickOnTabel("63fcabcb63f07e048d5af96c")}>
        paid
      </Button>
      <Button onClick={() => handleClickOnTabel("641b324696719d501a4bae9c")}>
        pending_approval
      </Button>
      <Button onClick={() => handleClickOnTabel("63e2a0e815282bd4cb0a49b0")}>
        cancelled
      </Button>
      <Button onClick={openModal}>open</Button>
    </div>
  );
}

export default Index;
