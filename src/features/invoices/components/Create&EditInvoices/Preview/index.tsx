import { Card, Divider, Logo, Skeleton } from "components";
import { CreateInvoiceFormInputsTypes } from "features/invoices/types";
import { Fragment } from "react";
import { UseFormWatch } from "react-hook-form";
import { getFullName } from "utils";

export const Preview = ({
  getValues,
  className = "",
  spanClass = "",
  ...rest
}: {
  getValues: UseFormWatch<CreateInvoiceFormInputsTypes>;
  className: string;
  spanClass: string;
}) => {
  const { client, fixed } = getValues();
  const val = getValues();

  const totalPrice = fixed.reduce(
    (accumulator, currentValue) => +accumulator + +currentValue.price,
    0
  );

  const generateDate = new Date().toDateString();
  return (
    // <div></div>
    <Card
      className={`py-8  border shadow-sm px-11 max-w-[600px] h-[500px]  overflow-auto scrollbar-track-gray-200 scrollbar-thumb-gray-300 scrollbar-thin scrollbar-thumb-rounded-lg ${className}`}
      {...rest}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold flex flex-col gap-1">
          Invoice
          <span className="text-xs font-semibold">#INV-003</span>
        </h4>

        <Logo className="cursor-pointer" />
      </div>
      <div className="flex justify-between gap-16 box-border">
        <div className="w-2/3 box-border">
          <h5 className="mt-5 mb-4 text-gray-dark">From</h5>
          <h6>Talents Valley LLC</h6>
          <p className="flex flex-col text-sm text-gray-dark">
            <span className={spanClass}>30 North Gould St.</span>
            <span className={spanClass}>Sheridan, Wyoming 82801</span>
            <span className={spanClass}>United States</span>
            <span className={spanClass}>+1 307-217-6666</span>
          </p>
        </div>
        <div className="w-1/3">
          <h5 className="mt-5 mb-4 text-gray-dark">Bill To</h5>
          <p className="truncate  ">
            {client?.fullName ? client?.fullName : <Skeleton width={150} />}
          </p>
          <span className="text-sm text-gray-dark truncate block">
            {client?.email ? (
              client.email
            ) : (
              <Skeleton width={130} className="mt-1" />
            )}
          </span>
          <p className="mt-3">Issue Date</p>
          <span className="text-sm text-gray-dark">{generateDate}</span>
        </div>
      </div>
      <div className="flex items-start justify-between mt-14">
        <p className="mb-2 text-gray-dark">Service</p>
        <p className="mb-2 text-gray-dark ">Amount</p>
      </div>

      {fixed ? (
        fixed.map((item, index) => (
          <Fragment key={index}>
            <div className="flex items-start justify-between ">
              {item.itemName ? (
                <span className="font-normal text-[125%] w-[60%] truncate">
                  {item.itemName}
                </span>
              ) : (
                <Skeleton width={60} />
              )}
              {item.price ? (
                <span className="w-[20%] break-words text-right">
                  ${item.price}
                </span>
              ) : (
                <Skeleton width={60} />
              )}
            </div>
            <span>
              {item.description ? (
                <span className="text-gray-dark text-sm break-words">
                  {item.description}
                </span>
              ) : (
                <Skeleton width={180} className="mt-1" />
              )}
              <Divider />
            </span>
          </Fragment>
        ))
      ) : (
        <div className="flex items-start justify-between ">
          <span>
            <Skeleton width={160} />
          </span>
          <span>
            <Skeleton width={60} />
          </span>
        </div>
      )}

      <div className="ml-auto max-w-max min-w-[160px] text-gray-dark text-sm">
        <span className="flex">
          Sub Total
          {totalPrice ? (
            <span className="ml-auto">${totalPrice}</span>
          ) : (
            <span className="ml-auto">
              <Skeleton width={60} />
            </span>
          )}
        </span>
        <span className="flex mt-1">
          Fees
          <span className="ml-auto">$0</span>
        </span>
        <Divider />

        <span className="flex">
          Total
          {totalPrice ? (
            <span className="ml-auto">${totalPrice}</span>
          ) : (
            <span className="ml-auto">
              <Skeleton width={60} />
            </span>
          )}
        </span>
      </div>
    </Card>
  );
};

export default Preview;
