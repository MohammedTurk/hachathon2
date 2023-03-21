import React from "react";
import useForm, { useFieldArray } from "lib/react-hook-form";
import { CreateInvoiceFormInputsTypes } from "features/invoices/types";
import Preview from "../Preview";
 
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

  const onSubmit = handleSubmit((data) => {
    console.log("submitted");
  });

  return (
    <div className="flex gap-12">
      <div className="w-[45%]">
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
          },
        })}
      </div>
      <div>
        <span className="text-md mb-2 block text-gray-dark font-medium">
          Preview
        </span>
        <Preview getValues={getValues} />
      </div>
    </div>
  );
};
export default CreateWrapper;
