import { Card, ArrowFilter } from "components";
import { useEffect, useState } from "react";
import Th from "./Th";

export const Table = ({
  headers = [],
  onSort,

  className = "",
  children,
  classNameActive = "text-black",

  thClassName = "",

  pagination = "",

  tabs = [],
  onChangeTab = console.log,
}) => {
  const [sortBaseOn, setSortBaseOn] = useState(null);

  function handleSortBaseOn(name) {
    setSortBaseOn(name != sortBaseOn ? name : "");
  }

  useEffect(() => {
    onSort(sortBaseOn);
  }, [sortBaseOn]);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  function handleSelectActiveTab(tab) {
    setActiveTab(tab);
  }

  useEffect(() => {
    onChangeTab(activeTab);
  }, [activeTab]);

  return (
    <Card className={` text-gray-400 !p-0   ${className}`}>
      <div className="flex gap-3 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleSelectActiveTab(tab)}
            className={`
            px-4 py-2
            ${
              activeTab == tab
                ? "text-blue-400 border-b-4 border-blue-400 font-semibold transition-colors "
                : ""
            }`}
          >
            <span className="capitalize">{tab}</span>
          </button>
        ))}
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-300 ">
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
                    {head.map((subhead, index) => (
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
        <tbody>{children}</tbody>
      </table>
      {pagination}
    </Card>
  );
};

export default Table;
