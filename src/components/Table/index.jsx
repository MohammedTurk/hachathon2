import { Card, Triangle, IconButton, Divider } from "components";
import { useState } from "react";

export const Table = ({
  headers = [],
  onSort,
  data = [],
  renderRow,
  className = "",
  thClassName = "",
}) => {
  const [sortBaseOn, setSortBaseOn] = useState([null, false]);

  function handleSortBaseOn(name) {
    setSortBaseOn(name);
    onSort(name);
  }

  const dividerTable = (
    <tr>
      <td colSpan={data[0].length}>
        <Divider className="w-full !mb-0" />
      </td>
    </tr>
  );

  function getTh(head) {
    return (
      <div className="flex gap-3">
        <span>{head}</span>
        <span className="flex flex-col gap-[2px]">
          <button onClick={() => handleSortBaseOn(head)}>
            <Triangle
              className={`w-3 h-3 ${head == sortBaseOn ? "text-black" : ""}`}
            />
          </button>
          <button onClick={() => handleSortBaseOn(`-${head}`)}>
            <Triangle
              className={`w-3 h-3 rotate-180 ${
                `-${head}` == sortBaseOn ? "text-black" : ""
              }`}
            />
          </button>
        </span>
      </div>
    );
  }

  return (
    <Card className={`   ${className}`}>
      <table className="w-full">
        <thead>
          <tr>
            {headers.map((head) =>
              typeof head == "string" ? (
                <th
                  key={head}
                  className={`text-gray-400 font-medium  ${thClassName}`}
                >
                  {getTh(head)}
                </th>
              ) : (
                <th
                  key={head}
                  className={`text-gray-400 flex gap-4 font-medium ${thClassName}`}
                >
                  {head.map((subhead) => getTh(subhead))}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {/* {data.map((row) => {
            return (
              <tr
                onClick={rowOnClick}
                role="button"
                className="w-full pt-2 border-b cursor-pointer border-gray hover:bg-gray-light"
              >
                {renderRow(row)}
              </tr>
            );
          })} */}
          {/* w-full xl:w-[1000px] order-2 xl:order-1 h-[calc(100vh-190px)] ml-0  */}
          {dividerTable}
          {data.map((row) => renderRow(row))}
        </tbody>
      </table>
    </Card>
  );
};

export default Table;
