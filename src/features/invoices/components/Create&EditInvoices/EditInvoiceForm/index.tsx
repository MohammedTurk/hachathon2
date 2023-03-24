import {
  Button,
  IconButton,
  Input,
  Select,
  TextArea,
  Skeleton,
} from "components";

import {
  countriesList,
  FORM_VALIDATION,
  currencyList,
  API_SERVICES_URLS,
} from "data";

import { CreateFormType } from "features/invoices/types";
import { setValuesForEditInvoice } from "features/invoices/utils";
import { useSWRMutationHook } from "hooks";
import { PlusIconMini, XCircleIconOutline } from "lib/@heroicons";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { getFieldHelperText } from "utils";
import InvoiceHeader from "../InvoiceHeader";

export const EditInvoiceForm = ({
  register,
  handleSubmit,
  errors,
  clearErrorOnChange,
  fields,
  append,
  remove,
  getValues,
  setValue,
}: CreateFormType) => {
  const router = useRouter();
  const { InvoiceId } = router.query;
  console.log(router.query);

  const {
    trigger: GetInvoiceDetails,
    data: InvoiceDetails,
    isMutating: isMutatingInvoiceDetails,
  } = useSWRMutationHook(
    API_SERVICES_URLS.CLIENT.GET_INVOICE(
      InvoiceId || "641cc1674a984c6dd37301b8"
    ),
    "GET"
  );

  const {
    trigger: editInvoice,
    data: responseRequest,
    isMutating,
  } = useSWRMutationHook(
    API_SERVICES_URLS.CLIENT.EDIT_INVOICE(
      InvoiceId || "641cc1674a984c6dd37301b8"
    ),
    "PUT",
    {
      data: { ...getValues() },
    }
  );

  useEffect(() => {
    GetInvoiceDetails();
  }, []);


  useEffect(() => {
    if (InvoiceDetails) {
    setValuesForEditInvoice(setValue,InvoiceDetails.data,append)
    }
  }, [isMutatingInvoiceDetails]);

  const onSubmit = (data: {}) => {
    editInvoice();
  };

  useEffect(() => {
    if (responseRequest)
      router.push({
        pathname: "/invoices",
      });
  }, [isMutating]);

  return (
    <div className="px-8 pb-16">
      <InvoiceHeader currentPage="Edit Invoice" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5 mb-2">
          <span className="font-semibold text-2xl">Invoice</span>
          <span className="font-normal text-sm text-gray-dark ml-3 ">
            #INV-***
          </span>
        </div>
        <div className="my-3">
          <span className="text-sm mb-2 block text-gray-dark  font-medium">
            Client Information
          </span>

          {isMutatingInvoiceDetails ? (
            <>
              <Skeleton height={35} className="mb-5" />
              <Skeleton height={35} className="mb-5" />
              <Skeleton height={35} className="mb-5" />
              <div className="flex gap-3">
                <Skeleton height={35} className="mb-5 w-[50%]" />
                <Skeleton height={35} className="mb-5 w-[50%]" />
              </div>
            </>
          ) : (
            <>
              <Input
                id="full-name-input"
                placeholder="full name"
                className="flex-1 basis-full"
                inputSize="small"
                {...register("client.fullName", {
                  ...FORM_VALIDATION.fullName,
                  onChange: () => clearErrorOnChange("client.fullName"),
                })}
                error={!!errors.client?.fullName}
                helperText={getFieldHelperText(
                  "error",
                  errors.client?.fullName?.message
                )}
              />
              <Input
                id="email-input"
                placeholder="Enter Email"
                inputSize="small"
                {...register("client.email", {
                  ...FORM_VALIDATION.email,
                  onChange: () => clearErrorOnChange("client.email"),
                })}
                error={!!errors.client?.email}
                helperText={getFieldHelperText(
                  "error",
                  errors.client?.email?.message
                )}
              />
              <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
                <Select
                  className="w-full lg:w-[70%]"
                  options={countriesList}
                  id="country-select"
                  placeholder="Enter Country"
                  selectSize="small"
                  {...register("client.address.country", {
                    ...FORM_VALIDATION.country,
                    onChange: () =>
                      clearErrorOnChange("client.address.country"),
                  })}
                  error={!!errors.client?.address?.country}
                  helperText={getFieldHelperText(
                    "error",
                    errors.client?.address?.country?.message
                  )}
                />
                <Select
                  className="w-full lg:w-[30%]"
                  options={currencyList}
                  id="currency-select"
                  placeholder="USD"
                  selectSize="small"
                  {...register("currency", {
                    ...FORM_VALIDATION.currency,
                    onChange: () => clearErrorOnChange("currency"),
                  })}
                  error={!!errors.currency}
                  helperText={getFieldHelperText(
                    "error",
                    errors.currency?.message
                  )}
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
                onClick={() =>
                  append({ itemName: "", price: "", description: "" })
                }
              >
                <PlusIconMini className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm">Add item or service</span>
              </Button>
            </>
          )}
        </div>

        <Button
          className="font-medium mb-3"
          type="submit"
          buttonSize="small"
          fullWidth
        >
          {isMutating ? "Loading..." : "Edit Invoice"}
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
export default EditInvoiceForm;
