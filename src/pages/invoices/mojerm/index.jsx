import React, { useEffect, useState } from "react";

import { useSWRMutationHook, useToggle } from "../../../hooks";
import { Drawer } from "../../../features/invoices/components";
import { Button } from "components";
import { useRouter } from "next/router";
import getInvoiceLinkURL from "../../../features/invoices/utils/getInvoiceLinkURL";

export function Index() {
  const [urlRequest, setUrlRequest] = useState("");
  const { isOpen, closeModal, openModal } = useToggle();
  const { trigger, data, isMutating } = useSWRMutationHook(urlRequest, "GET");

  // when i click on the Table
  function handleClickOnTabel(id, isInvoice) {
    openModal();
    console.log("link -->", getInvoiceLinkURL(id, isInvoice));
    setUrlRequest(getInvoiceLinkURL(id, isInvoice));
  }

  // request happen i id change
  useEffect(() => {
    if (urlRequest !== "") {
      trigger();
    }
  }, [urlRequest]);

  useEffect(() => {
    // console.log("request", data?.data?.invoice.status);
    // console.log("request", data?.data?.invoice);
    console.log("request", data?.data);
  }, [data]);

  const router = useRouter();

  // Turk give me the id
  useEffect(() => {
    if (router?.query?.lastInvoiceId) {
      handleClickOnTabel(router?.query?.lastInvoiceId);
    }
  }, [router?.query]);

  const testData = data?.data?.invoice || data?.data?.service;

  return (
    <div>
      Index
      <Drawer
        isOpen={isOpen}
        closeModal={closeModal}
        data={testData}
        isMutating={isMutating}
        onChange={trigger}
      />
      <Button onClick={closeModal}>close</Button>
      <Button onClick={() => handleClickOnTabel("640f99bba3350410c1a42193")}>
        unpaid
      </Button>
      <Button onClick={() => handleClickOnTabel("641c43c686abbe326e82bc92")}>
        paid
      </Button>
      <Button onClick={() => handleClickOnTabel("641db0dd73ac594b84ec3b6d")}>
        pending_approval
      </Button>
      <Button onClick={() => handleClickOnTabel("641defa03943f49510614021")}>
        cancelled
      </Button>
      <Button onClick={() => handleClickOnTabel("641c9cebe524b0786800e4f1")}>
        cancelled
      </Button>
      <Button onClick={() => handleClickOnTabel("641d51eeeb7c4bb8330e19c3")}>
        sent
      </Button>
      <Button
        onClick={() => handleClickOnTabel("641d939173ac594b84ec2397", false)}
      >
        Link pending_approval
      </Button>
      <Button
        onClick={() => handleClickOnTabel("641c418f86abbe326e82bc04", false)}
      >
        Link pending_approval
      </Button>
      <Button
        onClick={() => handleClickOnTabel("641c418f86abbe326e82bc04", false)}
      >
        Link active
      </Button>
      <Button onClick={openModal}>open</Button>
    </div>
  );
}

export default Index;
