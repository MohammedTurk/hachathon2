import React, { useState } from "react";
import { Button, Card, IconButton, Modal, Skeleton } from "components";
import { ChevronLeftIconOutline } from "lib/@heroicons";
import { useToggle } from "hooks";
import { ButtonsWrapper } from "./ButtonsWrapper";
import { TimeLine, JobTitle, Status, Total } from "./components";
import Preview from "../Create&EditInvoices/Preview";
import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/20/solid";
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
  const {
    isOpen: isOpenInvoices,
    closeModal: closeModalInvoices,
    openModal: openModalInvoices,
  } = useToggle();

  const [isShow, setIshow] = useState(true);
  function handleShowInvoice() {
    setIshow((prev) => !prev);
  }

  console.log(data);
  return (
    <>
      <Card
        className={`bg-[#F2F4F7] h-screen fixed right-0 top-0 w-[400px]    px-5  border rounded-none z-50  overflow-auto transition-transform duration-[500ms] flex flex-col    ${
          isOpen ? "-translate-x-0" : "translate-x-full"
        } `}
      >
        <div className="flex justify-center items-center pt-9 pb-4  ">
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
              <Status status={data?.status} date={data?.createdAt} />

              <div>
                <JobTitle jobs={data?.fixed} currency={data?.currency} />
                <Total
                  currency={data?.currency}
                  subTotal={data?.subTotal}
                  Fees={data?.paymentFee + data?.ourFee}
                />
              </div>

              <TimeLine date={data?.history} />

              <div>
                <Modal
                  className="rounded-sm"
                  isOpen={isOpenInvoices}
                  closeModal={closeModalInvoices}
                >
                  <Card className="flex flex-col gap-2">
                    <div className="flex justify-end items-center gap-4">
                      <Button
                        className="!p-2 flex justify-center gap-1 bg-white text-blue shadow border hover:!bg-gray-100 transition-all"
                        onClick={() => console.log("request Download")}
                      >
                        <ArrowDownTrayIcon className="h-5 w-5" />
                        Download
                      </Button>
                      <IconButton onClick={closeModalInvoices}>
                        <XMarkIcon className="h-5 w-5" />
                      </IconButton>
                    </div>
                    <Preview
                      className="h-fit max-h-[550px] select-none"
                      getValues={() => data}
                    />
                  </Card>
                </Modal>
                {data && isShow && (
                  <Preview
                    className="transition-all overflow-hidden  !text-xs !h-fit !p-4 mb-0 select-none hover:cursor-zoom-in "
                    spanClass="truncate  text-[80%]"
                    getValues={() => data}
                    onClick={openModalInvoices}
                  />
                )}
                <Button
                  className="bg-transparent text-blue-500 w-fit hover:!bg-transparent !p-2"
                  onClick={handleShowInvoice}
                >
                  {isShow ? "Hide Invoice" : "Show Invoices"}
                </Button>
              </div>
            </div>

            <ButtonsWrapper
              data={data}
              isOpen={isOpenRequestModal}
              closeModal={closeModalRequestModal}
              openModal={openModalRequestModal}
              closeDrawer={closeModal}
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
