import React from "react";
import { Card } from "components";
import { ErrorMessage, JobTitle, Status } from "../../components";

export const StatusWrapper = ({ data, onEdit, StatusOptions }) => {
  return (
    <>
      {StatusOptions?.hasError && <ErrorMessage onEdit={onEdit} />}
      <Card className="shadow-sm rounded-sm flex flex-col gap-5">
        <Status StatusOptions={StatusOptions} date={data?.createdAt} />
        <JobTitle jobs={data?.fixed} currency={data?.currency} />
      </Card>
    </>
  );
};

export default StatusWrapper;
