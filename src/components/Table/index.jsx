import { Card, ArrowFilter } from "components";
import { useEffect, useState } from "react";

export const Table = ({
  headers = [],
  onSort,

  className = "",
  children,

  thClassName = "",
  thClassNameActive = "text-black",

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

  function getTh(head, key) {
    return (
      <div
        className={` flex gap-2 px-5 py-3  text-sm  capitalize text-inherit  font-medium  ${thClassName}`}
        key={key}
      >
        <span>{head}</span>
        <div className="flex flex-col justify-center gap-[2px]">
          <button onClick={() => handleSortBaseOn(head)}>
            <ArrowFilter
              className={`w-3 h-2 ${
                head == sortBaseOn ? thClassNameActive : ""
              }`}
            />
          </button>
          <button onClick={() => handleSortBaseOn(`-${head}`)}>
            <ArrowFilter
              className={`w-3 h-2  rotate-180 ${
                `-${head}` == sortBaseOn ? thClassNameActive : ""
              }`}
            />
          </button>
        </div>
      </div>
    );
  }

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
                <th key={head}>{getTh(head)}</th>
              ) : (
                <th key={head}>
                  <div className="flex ">
                    {head.map((subhead, index) => getTh(subhead, index))}
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
