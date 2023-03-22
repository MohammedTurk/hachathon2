import React, { useEffect, useState } from "react";

import { useSWRMutationHook, useToggle } from "../../../hooks";
import { Drawer } from "../../../features/invoices/components";
import { Button } from "components";
import { API_SERVICES_URLS } from "../../../data/";

export function Index() {
  const [idInvoice, setIdInvoice] = useState("");
  const { isOpen, closeModal, openModal } = useToggle();
  const { trigger, data, isMutating } = useSWRMutationHook(
    API_SERVICES_URLS.INVOICE.INVOICE_DETAILS(idInvoice),
    { method: "GET", headers: {} }
  );

  function handleClickOnTabel(id) {
    openModal();
    setIdInvoice(id);
    setTimeout(() => trigger(), 0);
  }

  useEffect(() => {
    console.log(data?.data?.invoice.status);
  }, [data]);

  return (
    <div>
      Index
      <Drawer
        isOpen={isOpen}
        closeModal={closeModal}
        data={data.data.invoice}
        isMutating={isMutating}
      />
      <Button onClick={closeModal}>close</Button>
      <Button onClick={() => handleClickOnTabel("640f99bba3350410c1a42193")}>
        unpaid
      </Button>
      <Button onClick={() => handleClickOnTabel("63fcabcb63f07e048d5af96c")}>
        paid
      </Button>
      <Button onClick={() => handleClickOnTabel("63fa3c99a53f7481c085a22f")}>
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
