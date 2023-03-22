import { useRouter } from "next/router";
import { useState } from "react";
import useForm, { Controller } from "lib/react-hook-form";
import useFieldArray  from "lib/react-hook-form";
import { Input, Button, Select, PhoneInput, HelperText } from "components";
import { useAxios } from "hooks";
import {
  countriesList,
  API_SERVICES_URLS,
  URL_PATHS,
  FORM_VALIDATION,
} from "data";
export const JobDetails = () => {
    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
          fixed: [{ itemName: "itemName", price: "price", description:"description" }]
        }
    });
    const { fields, append, remove} = useFieldArray(
        {
          control,
          name: "fixed"
        }
      );

// const[data,setData]=useState([{itemName: "Job title", price: "price", description:"description" }])
// const handle=()=>{
//     setData([...data,{itemName: "Job title", price: "price", description:"description" }])
// }

  return (
    <>
      {fields && fields.map((item, index) => {
        return (
       <div key={item.id}>
        <h1 className="text-base  tracking-wider ">
            Job Details
        </h1>
        <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
        <Input
          id="itemName"
          placeholder="Job title"
          inputSize="small"
          defaultValue={`${item.itemName}`}
        // defaultValue={item.itemName}
          {...register(`fixed.${index}.itemName`)}
        /> 
        <Input
          id="price"
          placeholder="0.00"
          inputSize="small"
          className="w-2/5"
          defaultValue={`${item.price}`}
        // defaultValue={item.price}
          {...register(`fixed.${index}.price`)}
        /> 
        </div>
        <textarea 
            placeholder="Describtion" 
            defaultValue={`${item.description}`} 
            // defaultValue={item.description}
            {...register(`fixed.${index}.description`)}
            className="w-full text-gray-dark text-xs h-20 px-4 border-gray focus:ring-0 focus:border-blue rounded-md">
        </textarea>
          <button type="button" onClick={() => remove(index)}>Delete</button>
      </div>
      );})}
      <button
          type="button"
          onClick={() => {
            append({ itemName: "ll",price: "0.020", description: "lll"});
          }}
        >
        +Add item or service
      </button>




{/* <div>
        { data.map((item, index) => 
       <div >
            <div className="flex justify-between">
                <h1 className="text-base  tracking-wider ">
                    Job Details
                </h1>
                <button type="button" onClick={() => remove(index)}>*</button>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap sm:gap-3">
            <Input
            id="itemName"
            placeholder="Job title"
            inputSize="small"
            /> 
            <Input
            id="price"
            placeholder="0.00"
            inputSize="small"
            className="w-2/5"
            /> 
            </div>
            <textarea 
                placeholder="Describtion" 
                className="w-full text-gray-dark text-xs h-20 px-4 border-gray focus:ring-0 focus:border-blue rounded-md">
            </textarea>
        </div>
        )}
        <button
            type="button"
            onClick={handle}
            >
            +Add item or service
        </button>

    </div> */}

  
    </>
  );
};

export default JobDetails;