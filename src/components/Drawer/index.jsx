import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { ChevronLeftIconMini } from "lib/@heroicons";
import { IconButton } from "components";

export const Drawer = ({
  isShow = false,
  setIsShow,
  children,
  title = "",
  className = "",
}) => {
  function handleClose() {
    setIsShow(false);
  }

  return (
    <Transition
      as={Fragment}
      show={isShow}
      enter="transform transition linear duration-[600ms]"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transform  transition linear duration-[600ms]"
      leaveFrom=" translate-x-0   "
      leaveTo=" translate-x-full "
    >
      <div
        className={`fixed top-0 right-0 h-screen w-[320px] sm:w-[350px]  bg-gray-light border-2 border-[#D4D4D4] overflow-y-auto px-2 py-5 flex flex-col gap-2 z-[2000] ${className}`}
      >
        <div className="flex items-center ">
          <IconButton
            className="top-0 rounded-full hover:bg-gray-200"
            onClick={handleClose}
          >
            <ChevronLeftIconMini />
          </IconButton>
          <h3 className="pr-2 m-auto">{title}</h3>
        </div>
        {children}
      </div>
    </Transition>
  );
};
export default Drawer;
