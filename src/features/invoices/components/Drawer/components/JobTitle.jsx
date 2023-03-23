import React from "react";
import Total from "./Total";

export const JobTitle = ({ jobs = [], currency }) => {
  console.log("jobs ", jobs);
  // console.log("currency ", currency);
  return (
    <div>
      {jobs.map((job) => {
        return (
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-sm font-semibold capitalize">{job.itemName}</p>
              <p className="text-xs text-[#656565]">{job.description}</p>
            </div>
            <h3 className="font-semibold">
              {`${currency} `}
              {job.price}
            </h3>
          </div>
        );
      })}
      <hr />
    </div>
  );
};

export default JobTitle;
