import React, { useState } from "react";
import Input from "components/Input";
import Button from "components/Button";
import { Search, PlusIconMini } from "lib/@heroicons";
import { Send } from "components/svg";

export const NavTable = () => {
  const buttonClasses = {
    button: "!bg-gray-50 !text-[#4375FF] flex items-center gap-1 sm:gap-2	 ",
    iconButton:
      "!rounded-lg bg-[#F3F6FF] !text-[#4375FF] hover:!text-[#F3F6FF] hover:!bg-[#4375FF] ",
    buttonText: "text-sm",
  };
  const [search, setSearch] = useState();
  return (
    <>
      <div className="flex justify-between pb-4  ">
        <div className="relative ">
          <div className="py-3 pl-2 absolute text-gray-500">
            {" "}
            <Search className=" w-4 h-4 " />
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
            <Send className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm  "> Invoice</span>
          </Button>
          <Button
            className="!bg-gray-50 text-gray-500 flex items-center gap-1 sm:gap-2"
            buttonSize="small"
          >
            <Send className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm  "> Filter</span>
          </Button>
        </div>
      </div>
    </>
  );
};
