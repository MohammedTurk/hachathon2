import React, { useState } from "react";
import { Button, Card, IconButton, Input, Modal, Skeleton } from "components";
import { ChevronLeftIconOutline } from "lib/@heroicons";
import { useToggle } from "hooks";
import {
  TimeLine,
  ButtonsWrapper,
  StatusWrapper,
  PreviewWrapper,
  LinkTotal,
  ServiceLink,
  PrivewLink,
 
} from "./components";
import { useRouter } from "next/router";
import { isInvoice } from "features/invoices/utils";
import getStatus from "features/invoices/utils/getStatus";

export const Drawer = ({
  isOpen,
  response,
  closeModal,
  isMutating,
  onChange,
  getTransactionData
}: any) => {
  const data = response?.data?.invoice || response?.data?.service;
  const status = getStatus(data?.status, data?._id);

  const router = useRouter();
  function handleMove() {
    const pathname = isInvoice(data)
      ? `/invoices/edit-invoice/${data?._id}`
      : `/invoices/edit-link/${data?._id}`;

    router.push({
      pathname,
    });
  }

  const isInvoiceDisplay = data && isInvoice(data);

  return (
    <>
      <Card
        className={`bg-[#F2F4F7] h-screen fixed right-0 top-0 w-[400px]    px-5  border rounded-none z-50  overflow-auto transition-transform duration-[500ms] flex flex-col  scrollbar-track-gray-200 scrollbar-thumb-gray-300 scrollbar-thin scrollbar-thumb-rounded-lg   ${
          isOpen ? "-translate-x-0" : "translate-x-full"
        } `}
      >
        <div className="flex justify-center items-center pt-4 pb-4  ">
          <span
            className="w-6 h-6  absolute left-5 top-15 	font-bold cursor-pointer hover:bg-gray-200 rounded-full p-1"
            onClick={closeModal}
          >
            <ChevronLeftIconOutline />
          </span>

          <span className="text-center font-semibold  text-lg capitalize">
            {isInvoiceDisplay ? "invoice" : "link"}
          </span>
        </div>

        {isMutating ? (
          <div className="flex flex-col justify-between flex-1 ">
            <div className="flex flex-col gap-4">
              <Skeleton height={80} />
              <Skeleton height={80} />
              <Skeleton height={80} />
            </div>
            <div>
              <Skeleton height={50} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-between flex-grow">
            <div className="flex flex-col justify-between gap-5">
              <StatusWrapper
                data={data}
                onEdit={handleMove}
                StatusOptions={status.statusOptions}
              />

              {isInvoiceDisplay ? (
                <>
                  <TimeLine data={data?.history} />
                  <PreviewWrapper getValues={() => data} />
                </>
              ) : (
                <>
                  <ServiceLink privewLinkoptions={status.privewLinkoptions} />
                  <LinkTotal data={data} />
                  <PrivewLink invoices={response?.data?.invoices.data} />

                  <TimeLine data={data?.history} />
                </>
              )}
            </div>

            <ButtonsWrapper
              data={data}
              optionsButtons={status.optionsButtons}
              onMoveToEdit={handleMove}
              isInvoice={isInvoiceDisplay}
              onChange={onChange}
              getTransactionData={getTransactionData}
            />
          </div>
        )}
      </Card>
    </>
  );
};
export default Drawer;
