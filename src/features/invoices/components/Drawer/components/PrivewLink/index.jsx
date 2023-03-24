import { Button, Card } from "components";
import { Paypal } from "components/svg";
import { Format } from "features/invoices/utils";
import React, { useState } from "react";

export const PrivewLink = ({ invoices = [] }) => {
  const [count, setCount] = useState(3);

  function handleShow() {
    count == 3 ? setCount(invoices.length) : setCount(3);
  }

  function getIcon() {
    return <Paypal className="text-black" />;
  }
  return (
    <Card className="border shadow-sm  rounded-sm flex flex-col gap-2">
      {invoices.length !== 0 ? (
        <>
          {invoices.map((invoice, index) => {
            if (index < count) {
              return (
                <Card className="border shadow-sm p-2 flex justify-between  items-center ">
                  <p className="capitalize font-semibold text-lg">
                    {invoice.client.fullName}
                  </p>
                  <p className="flex items-center gap-1 text-gray-600">
                    By {getIcon()} {invoice.paymentMethod.name}{" "}
                  </p>
                  <p className="flex flex-col ">
                    <span>
                      {`${invoice?.curreny} ${invoice?.price}` !== " " &&
                        "$3424"}
                    </span>
                    <span className="text-xs text-gray-400">
                      {Format.date(invoice.createdAt)}
                    </span>
                  </p>
                </Card>
              );
            }
          })}
          {invoices.length > 3 && (
            <Button
              className="bg-transparent text-blue-500 w-fit hover:!bg-transparent !p-2"
              onClick={handleShow}
            >
              {count == 3 ? "View more" : "View less"}
            </Button>
          )}
        </>
      ) : (
        <p className="text-blue-500 capitalize font-semibold">
          you don't have any Inovices in this link
        </p>
      )}
    </Card>
  );
};

export default PrivewLink;
