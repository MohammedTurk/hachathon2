import { Button } from "components";
import { changeInvoiceLinkURL } from "features/invoices/utils";
import { useSWRMutationHook, useToggle } from "hooks";
import React, { useEffect } from "react";
import { RequestMessage } from "../../components";

export const ButtonsWrapper = ({
  data,
  onMoveToEdit,
  isInvoice = true,
  onChange,
  optionsButtons,
}) => {
  const { isOpen, closeModal, openModal } = useToggle();

  const { trigger, data: response } = useSWRMutationHook(
    changeInvoiceLinkURL(data?._id, isInvoice),
    "POST",
    {
      data: optionsButtons?.requestData,
    }
  );

  function handleRequest() {
    //  هنا راح يكون ال
    // check message
    console.log("Truk Pop here.");
    trigger(optionsButtons?.requestData);
    closeModal();
  }

  useEffect(() => {
    if (response) {
      onChange();
    }
  }, [response]);

  return (
    <>
      {!optionsButtons?.withoutButtons && (
        <div className="py-2 flex gap-2 	">
          <Button
            onClick={openModal}
            className="  text-black !text-base  bg-white shadow-md font-semibold whitespace-nowrap text-center	w-full hover:!bg-gray-50 hover:disabled:cursor-not-allowed "
          >
            {optionsButtons?.buttonText || "not handle yet!"}
          </Button>

          <Button
            onClick={onMoveToEdit}
            className=" text-blue-500 !text-base  bg-white shadow-md font-semibold whitespace-nowrap text-center	w-full hover:!bg-gray-50 hover:disabled:cursor-not-allowed "
          >
            Edit
          </Button>

          {optionsButtons?.hasSendReminderButton && (
            <Button
              className="  text-blue-500 !text-base  bg-white shadow-md font-semibold whitespace-nowrap text-center	w-full hover:!bg-gray-50  "
              onClick={() => console.log("Send Reminder")}
            >
              Send Reminder
            </Button>
          )}
        </div>
      )}

      <RequestMessage
        isOpen={isOpen}
        closeModal={closeModal}
        message={optionsButtons?.message}
      >
        <div className=" mt-[35px] flex gap-2">
          <Button
            onClick={closeModal}
            className="w-full border !p-2 text-black bg-white hover:bg-gray-100 "
          >
            {optionsButtons?.optionsMessage?.[0]}
          </Button>
          <Button
            onClick={handleRequest}
            className="w-full border !p-2 text-white bg-[#D84242] hover:bg-[#b60a0a]"
          >
            {optionsButtons?.optionsMessage?.[1]}
          </Button>
        </div>
      </RequestMessage>
    </>
  );
};

export default ButtonsWrapper;
