import React, { useEffect } from "react";
import useForm, { useFieldArray } from "lib/react-hook-form";
import { CreateInvoiceFormInputsTypes } from "features/invoices/types";
import Preview from "../Preview";
import { Button, Modal } from "components";
import { useSWRMutationHook, useToggle } from "hooks";
import { API_SERVICES_URLS } from "data";
import { useRouter } from "next/router";

export const CreateWrapper = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrorOnChange,
    getValues,
    control,
  } = useForm<CreateInvoiceFormInputsTypes>({
    defaultValues: {
      fixed: [
        {
          itemName: "",
          price: undefined,
          description: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "fixed",
    control,
  });



  const onSubmit = handleSubmit((data,makeRequest) => {
    makeRequest()
  });

  const { isOpen, closeModal, openModal } = useToggle();

  return (
    <div className="  ">
      <div className="lg:w-[40%] px-10  py-5 bg-white lg:h-screen lg:fixed left-0 mt-[53.6px] lg:mt-0 top-[61.64px] lg:overflow-auto  scrollbar-track-gray-200 scrollbar-thumb-gray-300 scrollbar-thin scrollbar-thumb-rounded-lg">
        {React.cloneElement(children, {
          ...{
            register,
            onSubmit,
            errors,
            clearErrorOnChange,
            fields,
            append,
            remove,
            control,
            getValues
          },
        })}
      </div>
      <div className="lg:ml-[46%] hidden lg:block  lg:mt-[100px]">
        <span className="text-md mb-2 block text-gray-dark font-medium">
          Preview
        </span>
        <Preview getValues={getValues} />
        
      </div>
      <Button onClick={openModal} className="lg:hidden fixed top-3 right-4  z-50 rounded-full bg-white hover:bg-gray-light !text-gray-dark border border-gray" buttonSize="small">Show Preview</Button>
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <Preview getValues={getValues} />
        </Modal>
    </div>
  );
};
export default CreateWrapper;
