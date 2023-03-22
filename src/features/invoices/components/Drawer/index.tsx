import React from "react";
import { Button, IconButton, Modal, Card, Skeleton } from "components";
import { ChevronLeftIconOutline } from "lib/@heroicons";
import { BankIcon } from "components/svg";
import { useToggle } from "hooks";
import { RequestMessage } from "./RequestMessage";
import Status from './components/Status'
import JobTitle from './components/JobTitle'
import Total from './components/Total'

function getOptions(status) {
  switch (status) {
    case "pending_verification":
    case "pending_approval":
      return {
        buttonText: ["Cancel", "Edit"],
        optionsMessage: ["No", "Yes"],
        message: "cancel your invoice?",
      };
    case "disapproved":
    case "cancelled":
    case "canceled":
      return {
        buttonText: [<p className="text-red-500">Delete</p>, "Edit"],
        optionsMessage: ["Cancel", "Delete"],
        message: "delete your invoice?",
      };
    case "unpaid":
      return {
        edit: true,
        cancel: true,
      };
    case "paid":
      return {
        edit: true,
        cancel: true,
      };
    case "sent":
      return {
        edit: true,
        cancel: true,
      };

    default:
      break;
  }
}

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

  const options = data && getOptions(data?.status);

  return (
    <>
      <Card
        className={`bg-[#F2F4F7] h-screen fixed right-0 top-0 w-[400px]    px-5 border-solid border z-50  overflow-auto transition-transform flex flex-col justify-between   ${
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
          <>
            {/* {هنا راح يكون الكود تاعك يا صفدي} */}
            <Status />
            <JobTitle />
            <hr />
            <Total />

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
                <span className="text-base text-[#8C8C8C]">Expected Date</span>

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
                    <li className="mb-[6px]">Confirm receiving your payment</li>
                    <li className="mb-[6px]">{data?.withdraw?.office?.fees}</li>
                  </>
                )}
              </ul>
            </Card>

            <div className="p-2 flex gap-2 	">
              <Button
                onClick={openModalRequestModal}
                className="  text-black text-xl  bg-white shadow-md font-[500] text-[17px] text-center	w-full hover:bg-gray-50"
              >
                {options?.buttonText?.[0] || "not handle yet!"}
              </Button>
              <Button
                onClick={() => console.log("move to edit")}
                className="  text-blue-500 text-xl   bg-white shadow-md font-[500] text-[17px] text-center	w-full hover:bg-gray-50"
              >
                {options?.buttonText?.[1] || "not handle yet!"}
              </Button>
            </div>
          </>
        )}
      </Card>

      <RequestMessage
        isOpen={isOpenRequestModal}
        closeModal={closeModalRequestModal}
        message={options?.message}
      >
        <div className=" mt-[35px] flex gap-2">
          <Button
            onClick={closeModalRequestModal}
            className="w-full border !p-2 text-black bg-white hover:bg-gray-100 "
          >
            {options?.optionsMessage?.[0]}
          </Button>
          <Button
            onClick={() => console.log(options?.message)}
            className="w-full border !p-2 text-white bg-[#D84242] hover:bg-[#b60a0a]"
          >
            {options?.optionsMessage?.[1]}
          </Button>
        </div>
      </RequestMessage>
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
