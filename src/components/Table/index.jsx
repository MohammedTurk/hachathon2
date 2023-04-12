import { Card } from "components";
import React, { useEffect, useState } from "react";
import Th from "./Th";
import { Tab } from "@headlessui/react";
import TablePanel from "./TablePanel";

export const Table = ({
  headers = [],
  onSort,

  className = "",
  children,
  classNameActive = "text-black",

  thClassName = "",

  downSide = "",

  tabs = [],
  onChangeTab = console.log,
}) => {
  const [sortBaseOn, setSortBaseOn] = useState(null);

  function handleSortBaseOn(name) {
    setSortBaseOn(name == sortBaseOn ? "" : name);
  }

  useEffect(() => {
    onSort(sortBaseOn);
  }, [sortBaseOn]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    onChangeTab(selectedIndex);
  }, [selectedIndex]);

  return (
    <Card className={` text-gray-400 px-5   ${className}`}>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="mb-1 border-b">
          {tabs.map((tab, index) => {
            return (
              <Tab
                className={`px-4 py-2 text-inherit transition-colors  ${
                  selectedIndex == index
                    ? "text-blue-400   border-b-4 border-blue-400 font-semibold "
                    : ""
                }`}
              >
                {tab}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels>
          <table className="w-full">
            <thead>
              <tr className="border-b border-inherit ">
                {headers.map((head) =>
                  typeof head == "string" ? (
                    <th key={head}>
                      <Th
                        className={thClassName}
                        head={head}
                        onClick={handleSortBaseOn}
                        isActive={(name) => name == sortBaseOn}
                        classNameActive={classNameActive}
                      />
                    </th>
                  ) : (
                    <th key={head}>
                      <div className="flex ">
                        {head.map((subhead) => (
                          <Th
                            className={thClassName}
                            key={subhead}
                            head={subhead}
                            onClick={handleSortBaseOn}
                            isActive={(name) => name == sortBaseOn}
                            classNameActive={classNameActive}
                          />
                        ))}
                      </div>
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {tabs.length == 0 ? (
                <TablePanel>{children}</TablePanel>
              ) : (
                children
              )}
            </tbody>
          </table>
        </Tab.Panels>
      </Tab.Group>
      {downSide}
    </Card>
  );
};

export default Table;
