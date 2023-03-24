import { Button } from "components";
import { API_SERVICES_URLS } from "data";
import { getOptionsButton } from "features/invoices/utils";
import { useSWRMutationHook } from "hooks";
import React, { useEffect } from "react";
import { RequestMessage } from "../../components";

export const ButtonsWrapper = ({
  isOpen,
  closeModal,
  openModal,
  data,
  closeDrawer,
  onMoveToEdit,
}) => {
  const options = data && getOptionsButton(data?.status);

  const {
    trigger,
    data: response,
    isMutating,
  } = useSWRMutationHook(
    API_SERVICES_URLS.INVOICE.CHANGESTATUS(data?._id),
    "POST",
    {
      data: options?.requestData,
    }
  );

  useEffect(() => {
    if (response) {
      console.log("response ===> :", response);
    }
  }, [isMutating]);

  function handleRequest() {
    //  هنا راح يكون ال
    // check message
    console.log("Truk Pop here.");
    console.log(options?.requestData);
    trigger(options?.requestData);
    closeModal();

    // closeDrawer();
  }

  return (
    <>
      {!options?.withoutButtons && (
        <div className="p-2 flex gap-2 	">
          <Button
            disabled={options?.isDisabled.CancelDelete}
            onClick={openModal}
            className="  text-black !text-base  bg-white shadow-md font-semibold whitespace-nowrap text-center	w-full hover:!bg-gray-50 hover:disabled:cursor-not-allowed "
          >
            {options?.buttonText || "not handle yet!"}
          </Button>

          <Button
            disabled={options?.isDisabled.Edit}
            onClick={onMoveToEdit}
            className=" text-blue-500 !text-base  bg-white shadow-md font-semibold whitespace-nowrap text-center	w-full hover:!bg-gray-50 hover:disabled:cursor-not-allowed "
          >
            Edit
          </Button>

          {options?.hasSendReminderButton && (
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
            onClick={handleRequest}
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
