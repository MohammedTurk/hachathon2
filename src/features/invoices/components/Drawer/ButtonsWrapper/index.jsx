import { Button, Link } from "components";
import { API_SERVICES_URLS } from "data";
import { useSWRMutationHook } from "hooks";
import React, { useEffect } from "react";
import { RequestMessage } from "../RequestMessage";
function getOptions(status) {
  switch (status) {
    case "pending_verification":
    case "pending_approval":
      return {
        buttonText: "Cancel",
        optionsMessage: ["No", "Yes"],
        message: "cancel your invoice?",
        requestData: {
          status: "cancelled",
        },
        isDisabled: {
          Cancel: false,
          Edit: false,
        },
      };
    case "disapproved":
    case "cancelled":
    case "canceled":
      return {
        buttonText: <span className="text-red-500">Delete</span>,
        optionsMessage: ["Cancel", "Delete"],
        message: "delete your invoice?",
        isDisabled: {
          CancelDelete: false,
          Edit: false,
        },
      };
    case "unpaid":
      return {
        isDisabled: {
          CancelDelete: true,
          Edit: true,
        },
      };
    case "paid":
      return {
        isDisabled: {
          CancelDelete: true,
          Edit: true,
        },
      };
    case "sent":
      return {
        isDisabled: {
          CancelDelete: true,
          Edit: true,
        },
      };

    default:
      return {
        isDisabled: {
          CancelDelete: true,
          Edit: true,
        },
      };
  }
}

export const ButtonsWrapper = ({
  isOpen,
  closeModal,
  openModal,
  data,
  closeDrawer,
}) => {
  const options = data && getOptions(data?.status);
  // data?._id
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
      <div className="p-2 flex gap-2 	">
        <Button
          disabled={options?.isDisabled.CancelDelete}
          onClick={openModal}
          className="  text-black text-xl  bg-white shadow-md font-[500] text-[17px] text-center	w-full hover:!bg-gray-50 hover:disabled:cursor-not-allowed "
        >
          {options?.buttonText || "not handle yet!"}
        </Button>

        {options?.isDisabled?.Edit ? (
          <Link
            href={"/invoices/edit-link"}
            onClick={(e) => e.preventDefault()}
            className="block  transition-colors  rounded-md shadow-md w-full  py-3 px-4   !bg-gray-50 text-gray-400
            font-[500]  text-center text-base hover:cursor-not-allowed grayscale "
          >
            Edits
          </Link>
        ) : (
          <Link
            href={"/invoices/edit-link"}
            className="block  transition-colors  rounded-md text-blue-500 bg-white 
              shadow-md font-[500]  text-center w-full hover:bg-gray-50 py-3 px-4 text-base"
          >
            Edit
          </Link>
        )}
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
