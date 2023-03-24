import React from "react";

export const JobTitle = ({ jobs = [], currency }) => {
  console.log("jobs ", jobs);
  // console.log("currency ", currency);
  return (
    <div className="flex flex-col gap-2 ">
      {jobs.map((job, index) => {
        return (
          <div className="flex justify-between " key={index}>
            <div>
              <p className="text-sm font-semibold capitalize">{job.itemName}</p>
              <p className="text-xs text-[#656565]">{job.description}</p>
            </div>
            <h3 className="font-semibold whitespace-nowrap">
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
