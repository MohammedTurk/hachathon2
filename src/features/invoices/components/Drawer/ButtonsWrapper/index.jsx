import { Button, Link } from "components";
import { API_SERVICES_URLS } from "data";
import React from "react";
import { RequestMessage } from "../RequestMessage";

export const ButtonsWrapper = ({ options, isOpen, closeModal, openModal }) => {
  const { trigger, data, isMutating } = useSWRMutationHook(
    API_SERVICES_URLS.INVOICE.CHANGESTATUS(id),
    { method: "GET", headers: {} }
  );
  return (
    <>
      <div className="p-2 flex gap-2 	">
        <Button
          onClick={openModal}
          className="  text-black text-xl  bg-white shadow-md font-[500] text-[17px] text-center	w-full hover:bg-gray-50"
        >
          {options?.buttonText || "not handle yet!"}
        </Button>

        <Link
          href={"/invoices/edit-link"}
          className="block  transition-colors  rounded-md text-blue-500 bg-white 
            shadow-md font-[500]  text-center w-full hover:bg-gray-50 py-3 px-4 text-base"
        >
          Edit
        </Link>
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
