import React from "react";
import { Button, IconButton, Modal, Card, Skeleton } from "components";
import { ChevronLeftIconOutline } from "lib/@heroicons";
import { BankIcon } from "components/svg";
import { useToggle } from "hooks";
import { ButtonsWrapper } from "./ButtonsWrapper";
import Status from "./components/Status";
import JobTitle from "./components/JobTitle";
// import Total from "./components/Total";
export const Drawer = ({
  isOpen,
  data,
  closeModal,
  isMutating,
  title = "Invoice",
}: any) => {
  // let ButtonTitle ="";
  // let requestPath =""
  // let confirmDescription =""

  // if(data?.withdraw?.status === "pending"){
  //   ButtonTitle="Cancel Request"
  //   // requestPath = API_SERVICES_URLS.WITHDRAW.CANCEL_WITHDRAW(data?.withdraw?._id)
  //   confirmDescription ="Are you sure you want to cancel withdrawal request ?"
  // }else if(data?.withdraw?.status === "ready" || data?.withdraw?.status === "sent"){
  //   ButtonTitle="Confirm Receipt"
  //   // requestPath = API_SERVICES_URLS.WITHDRAW.CONFIRM_WITHDRAW(data?.withdraw?._id)
  //   confirmDescription ="Are you sure you want to Confirm withdrawal request ?"

  // }else if(data?.withdraw?.status === "completed"){
  //   ButtonTitle= "Report a problem"
  // }

  const {
    isOpen: isOpenRequestModal,
    closeModal: closeModalRequestModal,
    openModal: openModalRequestModal,
  } = useToggle();

  return (
    <>
      <Card
        className={`bg-[#F2F4F7] h-screen fixed right-0 top-0 w-[400px]    px-5 border-solid border z-50  overflow-auto transition-transform flex flex-col   ${
          isOpen ? "-translate-x-0" : "-translate-x-[-600px]"
        } `}
      >
        <div className="flex justify-center items-center py-9  ">
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
            <div className="flex flex-col justify-between">
              {/* {هنا راح يكون الكود تاعك يا صفدي} */}
              <Status status={data.status} />
              <JobTitle />

              <Card className="mb-5 p-5">
                <p className="pb-4 text-base font-bold">Timeline</p>
                <div className="flex flex-start items-center">
                  <p className="text-[#656565] text-xs">7:30am</p>
                  <li className="text-[#4375FF] text-[17px]  ml-[27px] mr-[-24px]"></li>
                  <p className="pl-10">Requested</p>
                </div>
                <span className="text-[#8C8C8C] text-[10px]">Today</span>
              </Card>
              <Card className="mb-5 p-5">
                <h3 className="mb-4 text-base font-bold">Details</h3>
                <div className="flex justify-between items-center mb-4 text-[15px]">
                  <span className="text-base text-[#8C8C8C]">
                    {data?.withdraw?.bank
                      ? "Bank Account Name"
                      : "Recipient Name"}
                  </span>
                  <span className="">
                    {" "}
                    {data?.withdraw?.bank
                      ? data?.withdraw?.bank?.accountName
                      : data?.withdraw?.office?.name}{" "}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[15px]">
                  <span className="text-base text-[#8C8C8C]">
                    Expected Date
                  </span>

                  <span>Within 24 Hours (Avg: 2hrs)</span>
                </div>
              </Card>
              <Card className="mb-5 ">
                <p className="mb-4 text-base font-bold">Instructions</p>
                <ul className="list-disc pl-6">
                  {data?.withdraw?.bank ? (
                    <li className="mb-[6px]">
                      open your bank app to ensure payment deleviery
                    </li>
                  ) : (
                    <>
                      <li className="mb-[6px]">
                        Address: {data?.withdraw?.office?.Address}
                      </li>
                      <li className="mb-[6px]">
                        Working hours from 9:00 am to 7:00 pm
                      </li>
                      <li className="mb-[6px]">
                        Bring your ID for identification
                      </li>
                      <li className="mb-[6px]">
                        Confirm receiving your payment
                      </li>
                      <li className="mb-[6px]">
                        {data?.withdraw?.office?.fees}
                      </li>
                    </>
                  )}
                </ul>
              </Card>
            </div>
            <ButtonsWrapper
              data={data}
              isOpen={isOpenRequestModal}
              closeModal={closeModalRequestModal}
              openModal={openModalRequestModal}
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
