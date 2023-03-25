import { Button, IconButton, Input, Select, TextArea } from "components";

import { FORM_VALIDATION, currencyList, API_SERVICES_URLS } from "data";

import { CreateFormType } from "features/invoices/types";
import { useSWRMutationHook } from "hooks";
import { PlusIconMini, XCircleIconOutline } from "lib/@heroicons";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { getFieldHelperText } from "utils";
import InvoiceHeader from "../InvoiceHeader";

export const CreateLinkForm = ({
  register,
  handleSubmit,
  errors,
  clearErrorOnChange,
  fields,
  append,
  remove,
  getValues,
}: CreateFormType) => {
  const router = useRouter();

  const {
    trigger: sendLink,
    data: responseRequest,
    isMutating,
  } = useSWRMutationHook(API_SERVICES_URLS.CLIENT.CREATE_LINK, "POST", {
    data: { ...getValues() },
  });

  const onSubmit = (data: {}) => {
    console.log(data);
    sendLink();
  };

  useEffect(() => {
    if (responseRequest)
      router.push({
        pathname: "/invoices",
        query: { lastInvoiceId: responseRequest.data?._id, type: "Link" },
      });
  }, [isMutating]);

  return (
    <div className="px-8 pb-16">
      <InvoiceHeader currentPage="Create Link" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5 mb-2">
          <span className="font-semibold text-2xl">Invoice</span>
          <span className="font-normal text-sm text-gray-dark ml-3 ">
            #INV-***
          </span>
        </div>
        <div className="my-3">
          <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
            <Select
              className="w-full"
              label="Currency"
              options={currencyList}
              id="currency-select"
              placeholder="USD"
              selectSize="small"
              {...register("currency", {
                ...FORM_VALIDATION.currency,
                onChange: () => clearErrorOnChange("currency"),
              })}
              error={!!errors.currency}
              helperText={getFieldHelperText("error", errors.currency?.message)}
            />
          </div>

          <ul>
            {fields.map((item, index) => {
              return (
                <li className="" key={item.id}>
                  <div className="flex justify-between">
                    <span className="text-sm mb-2 block text-gray-dark  font-medium">
                      Job Details
                    </span>
                    {index > 0 && (
                      <IconButton onClick={() => remove(index)}>
                        <XCircleIconOutline />
                      </IconButton>
                    )}
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
                    <Input
                      id="job-details"
                      placeholder="Job title"
                      className="w-full lg:w-[70%]"
                      inputSize="small"
                      {...register(`fixed.${index}.itemName`, {
                        ...FORM_VALIDATION.itemName,
                        onChange: () =>
                          clearErrorOnChange(`fixed.${index}.itemName`),
                      })}
                      error={!!errors.fixed?.[index]?.itemName}
                      withoutHelperText
                    />

                    <Input
                      id="price"
                      placeholder="0.00"
                      className="w-full lg:w-[30%] "
                      inputSize="small"
                      type="number"
                      {...register(`fixed.${index}.price`, {
                        ...FORM_VALIDATION.price,
                        onChange: () =>
                          clearErrorOnChange(`fixed.${index}.price`),
                      })}
                      error={!!errors.fixed?.[index]?.price}
                      withoutHelperText
                    />
                  </div>
                  <TextArea
                    id={index}
                    placeholder="Description"
                    {...register(`fixed.${index}.description`, {
                      ...FORM_VALIDATION.description,
                      onChange: () =>
                        clearErrorOnChange(`fixed.${index}.description`),
                    })}
                    error={!!errors.fixed?.[index]?.description}
                    withoutHelperText
                  />
                </li>
              );
            })}
          </ul>

          <Button
            className="!bg-transparent !text-[#4375FF] hover:!bg-[#F3F6FF] flex items-center gap-1 !p-1 "
            onClick={() => append({ itemName: "", price: "", description: "" })}
          >
            <PlusIconMini className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs sm:text-sm">Add item or service</span>
          </Button>
        </div>

        <Button
          className="font-medium mb-3"
          type="submit"
          buttonSize="small"
          fullWidth
        >
          {isMutating ? "Loading..." : "Send Link"}
        </Button>
        <Button
          className="font-medium bg-white text-black !border-gray border hover:bg-gray-light"
          buttonSize="small"
          fullWidth
          onClick={() => router.back()}
        >
          Back
        </Button>
      </form>
    </div>
  );
};
export default CreateLinkForm;
