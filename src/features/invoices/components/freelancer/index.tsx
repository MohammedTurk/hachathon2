import { useRouter } from "next/router";
import useForm, { Controller } from "lib/react-hook-form";
import { useSWRMutationHook } from "hooks";
import useFieldArray  from "lib/react-hook-form";
import { Input, Button, Select, PhoneInput, HelperText, JobDetails } from "components";
import { useAxios } from "hooks";
import {
  countriesList,
  API_SERVICES_URLS,
  URL_PATHS,
  FORM_VALIDATION,
} from "data";
import { getCookie } from "lib/js-cookie";
import { COOKIES_KEYS } from "data";
import { ErrorIconMini } from "lib/@heroicons";
import { getFieldHelperText } from "utils";

export const SendInvoiceForm = () => {
  const router = useRouter();
  const CurrentUser = getCookie(COOKIES_KEYS.currentUser);
  const headers = { 'Authorization': `Bearer ${CurrentUser?.accessToken || ""}`}    

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset, setError,
    clearErrorOnChange,
  } = useForm();

  const {trigger ,data ,isMutating } = useSWRMutationHook(API_SERVICES_URLS.INVOICE.CREATE_INVOICE,
    {method: "POST",headers:{headers}})

  const onSubmit = handleSubmit((data) => {
    SendInvoice(data);
  });


  return (
    <form onSubmit={onSubmit}>
      <div>
        <h1 className="text-base  tracking-wider ">
          Client Information
        </h1>
        <Input
          id="fullName-input"
          placeholder="Full name"
          inputSize="small"
          {...register("fullName", {
            ...FORM_VALIDATION.fullName,
          })}
        />
        <Input
          id="email-input"
          placeholder=" Email"
          inputSize="small"
          {...register("email", {
            ...FORM_VALIDATION.email,
          })}
        />
        
        <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
        <Select
          options={countriesList}
          id="country-select"
          placeholder="Country"
          className="flex-1 basis-full"
          selectSize="small"
          {...register("country", {
            ...FORM_VALIDATION.country,
          })}
        />
        <select className=" text-gray-dark w-2/5 text-xs h-[37px] px-4 border-gray focus:ring-0 focus:border-blue rounded-md">
          <option value="USD">USD</option>
        </select>
        </div>
      </div>
      <JobDetails/>
      <Button type="submit" buttonSize="small" fullWidth className="mb-5">
        {"Send Invoice"}
      </Button>
      <Button type="button" className="bg-white text-black border hover:bg-white"buttonSize="small" fullWidth>
        Back
      </Button>
    </form>
  );
};

export default SendInvoiceForm;
