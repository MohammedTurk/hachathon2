import React from "react";
import useForm, { useFieldArray } from "lib/react-hook-form";
import { CreateInvoiceFormInputsTypes } from "features/invoices/types";
import Preview from "../Preview";
import { Button, Modal } from "components";
import { useToggle } from "hooks";
import { Footer } from "layouts/MainLayout/components";

export const CreateWrapper = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrorOnChange,
    getValues,
    control,
    setValue,
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

  const { isOpen, closeModal, openModal } = useToggle();

  return (
    <div className="">
      <div className="lg:w-[40%] px-10  py-5 bg-white lg:h-screen lg:fixed left-0 mt-[53.6px] lg:mt-0 top-[61.64px] lg:overflow-auto  scrollbar-track-gray-200 scrollbar-thumb-gray-300 scrollbar-thin scrollbar-thumb-rounded-lg">
        {React.cloneElement(children, {
          ...{
            register,
            handleSubmit,
            errors,
            clearErrorOnChange,
            fields,
            append,
            remove,
            control,
            getValues,
            setValue,
          },
        })}
      </div>
      <div className="lg:ml-[46%] hidden lg:block  lg:mt-[100px]">
        <span className="text-md mb-2 block text-gray-dark font-medium">
          Preview
        </span>
        <Preview getValues={getValues} />
      
      </div>
      <div className="hidden lg:block fixed  bottom-0  left-[50%]">
          <Footer />
      </div>
      <Button
        onClick={openModal}
        className="lg:hidden fixed top-3 right-4  z-50 rounded-full bg-white hover:bg-gray-light !text-gray-dark border border-gray"
        buttonSize="small"
      >
        Show Preview
      </Button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Preview getValues={getValues} />
      </Modal>
      <div className="lg:hidden">
      <Footer />

      </div>
    </div>
  );
};
export default CreateWrapper;
