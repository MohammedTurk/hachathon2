import React from "react";
import Total from "./Total";

const JobTitle = () => {
  return (
    <div>
      <div className="flex justify-between my-5">
        <div>
          <p className="text-sm font-bold">
            UI/UX Design for Talents Valley LLC
          </p>
          <p className="text-xs text-[#656565]">
            Design UI/UX App & web for Talents Valley
          </p>
        </div>
        <h3 className="font-bold">$450</h3>
      </div>
      <hr />
      <Total />
    </div>
  );
};

export default JobTitle;
