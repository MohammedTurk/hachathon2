import React, { useState } from "react";
import { Button, Card, IconButton, Modal, Skeleton } from "components";
import { ChevronLeftIconOutline } from "lib/@heroicons";
import { useToggle } from "hooks";
import {
  TimeLine,
  ButtonsWrapper,
  StatusWrapper,
  PreviewWrapper,
} from "./components";
import { useRouter } from "next/router";
import { isInvoice } from "features/invoices/utils";
export const Drawer = ({
  isOpen,
  data,
  closeModal,
  isMutating,
  title = "Invoice",
}: any) => {
  const {
    isOpen: isOpenRequestModal,
    closeModal: closeModalRequestModal,
    openModal: openModalRequestModal,
  } = useToggle();

  const router = useRouter();
  function handleMove() {
    const pathname = isInvoice(data)
      ? "/invoices/edit-invoice"
      : "/invoices/edit-link";
    router.push({
      pathname,
      query: { id: data?._id },
    });
  }

  const isInvoiceDisplay = data && isInvoice(data);

  console.log(data);
  console.log(isInvoiceDisplay);
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

          <span className="text-center font-bold  text-lg">{title}</span>
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
              {/* {هنا راح يكون الكود تاعك يا صفدي} */}

              <StatusWrapper data={data} onEdit={handleMove} />

              <TimeLine data={data?.history} />

              <PreviewWrapper getValues={() => data} />
            </div>

            <ButtonsWrapper
              data={data}
              isOpen={isOpenRequestModal}
              closeModal={closeModalRequestModal}
              openModal={openModalRequestModal}
              closeDrawer={closeModal}
              onMoveToEdit={handleMove}
            />
          </div>
        )}
      </Card>
    </>
  );
};
export default Drawer;

/**
 * messageTitle = 'cancel the vicers'
 * messageButtons
 * mainButtons
 * function request
 */
