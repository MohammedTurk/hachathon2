import React from "react";

export const JobTitle = ({ jobs = [], currency }) => {
  console.log("jobs ", jobs);
  // console.log("currency ", currency);
  return (
    <div className="flex flex-col gap-2 ">
      {jobs.map((job) => {
        return (
          <div className="flex justify-between ">
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
    </div>
  );
};

export default JobTitle;
