import { Button, Link } from "components";
import { URL_PATHS } from "data";
import React from "react";
import { RequestMessage } from "../RequestMessage";

export const ButtonsWrapper = ({ options, isOpen, closeModal, openModal }) => {
  return (
    <>
      <div className="p-2 flex gap-2 	">
        <Button
          onClick={openModal}
          className="  text-black text-xl  bg-white shadow-md font-[500] text-[17px] text-center	w-full hover:bg-gray-50"
        >
          {options?.buttonText || "not handle yet!"}
        </Button>

        <Button className="  text-blue-500 text-xl   bg-white shadow-md font-[500] text-[17px] text-center	w-full hover:bg-gray-50">
          <Link href={"/invoices/edit-link"}>Edit</Link>
        </Button>
      </div>
      <RequestMessage
        isOpen={isOpen}
        closeModal={closeModal}
        message={options?.message}
      >
        <div className=" mt-[35px] flex gap-2">
          <Button
            onClick={closeModal}
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

export default ButtonsWrapper;
