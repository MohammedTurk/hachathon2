import { Link } from "components";
import { InvoiceHeaderType } from "features/invoices/types";
import {
  ChevronLeftIconMini,
  ChevronRightIconOutline,
  XCircleIconOutline,
} from "lib/@heroicons";
import React from "react";



export const InvoiceHeader = ({ currentPage }: InvoiceHeaderType) => {
  return (
    <div className="flex justify-between ">
      <ChevronLeftIconMini className="h-6 w-6 absolute left-5 top-5" />
      <div className="flex gap-1 items-center text-gray-dark">
        <Link href="/invoices" className="underline font-medium">
          invoices
        </Link>
        <ChevronRightIconOutline className="hidden lg:block h-4 w-4" />
        <span>{currentPage}</span>
      </div>
      <XCircleIconOutline className="h-6 w-6" />
    </div>
  );
};
export default InvoiceHeader;
