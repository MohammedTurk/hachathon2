import { useRouter } from "next/router";
import { Link } from "components";
import { InvoiceHeaderType } from "features/invoices/types";
import {
  ChevronLeftIconMini,
  ChevronRightIconOutline,
  XCircleIconOutline,
} from "lib/@heroicons";

export const InvoiceHeader = ({ currentPage }: InvoiceHeaderType) => {
  const router = useRouter();

  const handleClose = () => {
    router.push({
      pathname: "/invoices",
    });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex justify-between ">
      <span
        className="h-6 w-6 absolute left-5 top-5 cursor-pointer hover:text-blue-dark transition-colors"
        onClick={handleBack}
        title="Back"
      >
        <ChevronLeftIconMini />
      </span>
      <div className="flex gap-1 items-center text-gray-dark">
        <Link href="/invoices" className="underline font-medium">
          invoices
        </Link>
        <ChevronRightIconOutline className="hidden lg:block h-4 w-4" />
        <span>{currentPage}</span>
      </div>
      <span
        className="h-6 w-6 cursor-pointer hover:text-blue-dark transition-colors"
        onClick={handleClose}
        title="closePage"
      >
        <XCircleIconOutline />
      </span>
    </div>
  );
};
export default InvoiceHeader;
