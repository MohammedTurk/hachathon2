import React from "react";
import { Button, IconButton, Modal, Card, Skeleton } from "components";
import { ChevronLeftIconOutline } from "lib/@heroicons";
import { BankIcon } from "components/svg";
import { useToggle } from "hooks";
import { ButtonsWrapper } from "./ButtonsWrapper";
import Status from "./components/Status";
import JobTitle from "./components/JobTitle";
import TimeLine from "./components/TimeLine";
// import Total from "./components/Total";
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

  return (
    <>
      <Card
        className={`bg-[#F2F4F7] h-screen fixed right-0 top-0 w-[350px]    px-5  border rounded-none z-50  overflow-auto transition-transform duration-[500ms] flex flex-col    ${
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
            <div className="flex flex-col justify-between">
              {/* {هنا راح يكون الكود تاعك يا صفدي} */}
              <Status status={data?.status} date={data?.createdAt} />
              <JobTitle />
              <TimeLine data={data?.history} />
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
