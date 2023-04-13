import React from "react";
import Search from "./Search";
import PopoverMenu from "components/PopoverMenu";
import { Filter } from "../../svg";
import InvoiceStatus from "data/json/InvoiceStatus.json";

export const TableTools = ({
  children,
  onSearch,
  type = "all",
  handleSelectedOptions,
  selectedOptions,
  ...rest
}) => {
  console.log("selectedOptions", selectedOptions);
  return (
    <div className="flex justify-between p-2" {...rest}>
      <Search setSearch={onSearch} />
      {children}
      <div>Filter</div>
      <PopoverMenu
        title="filter"
        butClassName="h-full !bg-white !shadow-md !text-gray-dark rounded-lg"
        Icon={<Filter className="self-center w-4 h-4 ml-1 mr-2 font-bold" />}
      >
        {InvoiceStatus[type].map((item, i) => (
          <div className="p-2 mb-2 hover:bg-gray " key={i}>
            <label
              htmlFor={item.label}
              className="flex items-center content-center justify-start gap-2 px-3 pt-1"
              onChange={handleSelectedOptions}
            >
              <input
                value={item.value}
                id={item.label}
                name={item.label}
                type="checkbox"
                className="mb-2 accent-blue"
                checked={Boolean(selectedOptions?.indexOf(item.value) != -1)}
              />
              <span className="self-center"> {item.label}</span>
            </label>
          </div>
        ))}
      </PopoverMenu>
    </div>
  );
};

export default TableTools;
