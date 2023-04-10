import { Card, Triangle, IconButton } from "components";
import { useState } from "react";

export const Table = ({ className = "", headers = [], onSort }) => {
  const [sortBaseOn, setSortBaseOn] = useState([null, false]);

  function handleSortBaseOn(...rest) {
    setSortBaseOn(rest);
  }

  return (
    <Card className={`   ${className}`}>
      <table className="w-full">
        <thead>
          <tr>
            {headers.map((head) => (
              <th key={head}>
                <div className="flex justify-evenly">
                  <span>{head}</span>
                  <span className="flex flex-col gap-[2px]">
                    <button onClick={() => handleSortBaseOn(head, true)}>
                      <Triangle className="w-3 h-3" />
                    </button>
                    <button onClick={() => handleSortBaseOn(head, false)}>
                      <Triangle className="w-3 h-3 rotate-180" />
                    </button>
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </Card>
  );
};

export default Table;
