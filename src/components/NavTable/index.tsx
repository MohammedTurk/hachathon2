import React, { useState } from "react";
import Button from "components/Button";
import { Card , Checkbox } from 'components'
import { MagnifyingGlassIconOutline, PlusIconMini } from "lib/@heroicons";
import { Send } from "components/svg";
import { Filter } from 'components/svg';
import { COOKIES_KEYS} from 'data';
import { getCookie } from "lib/js-cookie";
import useForm from "lib/react-hook-form";
import { useSWR } from "lib/swr";
import axios from "axios";

export const NavTable = () => {
  const buttonClasses = {
    button: "!bg-gray-50 !text-[#4375FF] flex items-center gap-1 sm:gap-2	h-9 ",
    iconButton:
      "!rounded-lg bg-[#F3F6FF] !text-[#4375FF] hover:!text-[#F3F6FF] hover:!bg-[#4375FF] ",
    buttonText: "text-sm",
  };
  const endpoint = "https://talents-valley-backend.herokuapp.com/api/transactions/invoice-service-listing";
  const { register } = useForm();
  const [search, setSearch] = useState();
  const [open, setOpen] = useState(false);
  const [invoiceList, setinvoiceList] = useState([]);
  const currentUser = getCookie(COOKIES_KEYS.currentUser);
  const headers = { 'Content-Type': 'application/json',
                     Authorization: `Bearer ${currentUser?.accessToken}`
                  };   

//   const fetcheStatus = (filterStatus: string) => {
//     axios.get(`https://talents-valley-backend.herokuapp.com/api/transactions/invoice-service-listing${filteredValue}`
//       ,{headers}).then((res) => {
//           console.log(res); 
//           setinvoiceList(res.data.Transactions)
//       })
//       .catch((err) => {
//         console.log("AXIOS ERROR: ", err);
//       })
// }
// const {data, error} = useSWR(endpoint,fetcheStatus);

// if(error)console.log("error");
// if(!data)console.log("....loading");

// console.log("hhh"+transactions);



  return (
    <>
      <div className="flex justify-between pb-4  ">
        <div className="relative ">
          <div className="py-3 pl-2 absolute text-gray-500">
            {" "}
            <MagnifyingGlassIconOutline className=" w-4 h-4 " />
          </div>
          <input
            className="p-3 pl-8 block w-full border-gray focus:ring-0 focus:border-blue rounded-md text-sm "
            placeholder="Search for invoice, title, client or description"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-row sm:gap-1 ">
          <Button className={buttonClasses.button} buttonSize="small">
            <PlusIconMini className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs  sm:text-sm"> Link</span>
          </Button>
          <Button className={buttonClasses.button} buttonSize="small">
            <Send className=" sm:w-4" />
            <span className="text-xs sm:text-sm  "> Invoice</span>
          </Button>
            <Button className="!bg-white p-9 h-fit !text-gray-dark flex items-center gap-2" buttonSize="small"
              onClick={() => setOpen(!open)}
             >
              <Filter />
              Filter
              </Button>
              {open && (
                <Card className='z-10 absolute px-6 py-3 mt-10 ml-11'>
                  <Checkbox id="Paid" label="Paid" onClick={() => fetcheStatus('?&type=paid')} {...register("Paid")} />
                  <Checkbox id="Sent" label="Sent" onClick={() => fetcheStatus(`?&type=sent`)} {...register("sent")} />
                  <Checkbox id="Pending" label="Pending" onClick={() => fetcheStatus('?&type=pending')}{...register("Pending")} />
                  <Checkbox id="Canceled" label="Canceled" onClick={() => fetcheStatus('?&type=cancelled')} {...register("Canceled")} />
                  <Checkbox id="Active" label="Active" onClick={() => fetcheStatus('?&type=active')} {...register("Active")} />
                  <Checkbox id="InActive" label="InActive" onClick={() => fetcheStatus('?&type=inactive')} {...register("InActive")} />
                  <Checkbox id="Disapproved" label="Disapproved" onClick={() => fetcheStatus('?&type=disapproved')}{...register("Disapproved")} />
                  <Checkbox id="Refunded" label="Refunded" onClick={() => fetcheStatus('?&type=refunded')} {...register("Refunded")} />
                </Card>                      
              )}                     
        </div>
      </div>
    </>
  );
};




// {(() => {
//   if (someCase) {
//     return (
    // <Card className='z-10 absolute px-6 py-3 mt-10 ml-11'>
    //    <Checkbox id="Paid" label="Paid" onClick={() => fetcheStatus('?&type=paid')} {...register("Paid")} />
    //    <Checkbox id="Sent" label="Sent" onClick={() => fetcheStatus(`?&type=sent`)} {...register("sent")} />
    //    <Checkbox id="Pending" label="Pending" onClick={() => fetcheStatus('?&type=pending')}{...register("Pending")} />
    //    <Checkbox id="Canceled" label="Canceled" onClick={() => fetcheStatus('?&type=cancelled')} {...register("Canceled")} />
    //    <Checkbox id="Disapproved" label="Disapproved" onClick={() => fetcheStatus('?&type=disapproved')}{...register("Disapproved")} />
    //    <Checkbox id="Refunded" label="Refunded" onClick={() => fetcheStatus('?&type=refunded')} {...register("Refunded")} />
    // </Card>
//     )
//   } else if (otherCase) {
//     return (
    //   <Card className='z-10 absolute px-6 py-3 mt-10 ml-11'>
    //     <Checkbox id="Active" label="Active" onClick={() => fetcheStatus('?&type=active')} {...register("Active")} />
    //     <Checkbox id="InActive" label="InActive" onClick={() => fetcheStatus('?&type=inactive')} {...register("InActive")} />
    //     <Checkbox id="Disapproved" label="Disapproved" onClick={() => fetcheStatus('?&type=disapproved')}{...register("Disapproved")} />
    //     <Checkbox id="Refunded" label="Refunded" onClick={() => fetcheStatus('?&type=refunded')} {...register("Refunded")} />
    // </Card>
//     )
//   } else {
//     return (
//       <div>catch all</div>
//     )
//   }
// })()}




