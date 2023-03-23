import React from "react";
import { Card } from "components";
import Status from "./Status";
import JobTitle from "./JobTitle";

export const StatusWrapper = ({ data }) => {
  return (
    <Card className="shadow-sm rounded-sm flex flex-col gap-5">
      <Status status={data?.status} date={data?.createdAt} />
      <JobTitle jobs={data?.fixed} currency={data?.currency} />
    </Card>
  );
};

export default StatusWrapper;
