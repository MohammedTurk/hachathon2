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
    setUrlRequest(getInvoiceLinkURL(id, isInvoice));
  }

  // request happen i id change
  useEffect(() => {
    if (urlRequest !== "") {
      trigger();
    }
  }, [urlRequest]);

  const router = useRouter();

  // Turk give me the id
  useEffect(() => {
    if (router?.query?.lastInvoiceId) {
      handleClickOnTabel(router?.query?.lastInvoiceId);
    }
  }, [router?.query]);

  return (
    <div>
      <Drawer
        isOpen={isOpen}
        closeModal={closeModal}
        response={data}
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
      <Button onClick={() => handleClickOnTabel("641db1ab73ac594b84ec3c1c")}>
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
        onClick={() => handleClickOnTabel("641de9af73ac594b84ec5f73", false)}
      >
        active line
      </Button>
      <Button
        onClick={() => handleClickOnTabel("641e056873ac594b84ec79c8", false)}
      >
        acrive line
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
