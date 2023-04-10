import { Card, ArrowFilter, IconButton, Divider, Pagination } from "components";
import { useState } from "react";

export const Table = ({
  headers = [],
  onSort,
  children,
  className = "",
  thClassName = "",
  thClassNameActive = "text-black",
  pagination = "",
}) => {
  const [sortBaseOn, setSortBaseOn] = useState([null, false]);

  function handleSortBaseOn(name) {
    setSortBaseOn(name);
    onSort(name);
  }

  function getTh(head) {
    return (
      <div className="flex gap-2 pb-2 text-sm ">
        <span>{head}</span>
        <span className="flex flex-col gap-[2px]">
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
        </span>
      </div>
    );
  }

  return (
    <Card className={` text-gray-400   ${className}`}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-300 ">
            {headers.map((head) =>
              typeof head == "string" ? (
                <th
                  key={head}
                  className={` capitalize text-inherit font-medium  py-3  ${thClassName}`}
                >
                  {getTh(head)}
                </th>
              ) : (
                <th
                  key={head}
                  className={` capitalize text-inherit flex gap-4 font-medium  py-3 ${thClassName}`}
                >
                  {head.map((subhead) => getTh(subhead))}
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
