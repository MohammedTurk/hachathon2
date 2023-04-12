import { ChevronLeftIconMini } from "../../lib/@heroicons";
import { IconButton } from "components";

export const Pagination = ({
  className = "",
  decrement,
  increment,
  getString,
  pageNumber,
  totalNumber,
  hasPrev = false,
  hasNext = false,
}) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 p-3 transition-all 
      ${className}`}
    >
      {hasPrev && (
        <IconButton
          size="large"
          onClick={decrement}
          className="px-3 py-2 text-gray-500 transition-colors rounded-none rounded-l-lg hover:text-gray-700 hover:bg-gray-100 "
        >
          <ChevronLeftIconMini className="" />
        </IconButton>
      )}
      <span>{getString(pageNumber, totalNumber)}</span>
      {hasNext && (
        <IconButton
          size="large"
          onClick={increment}
          className="px-3 py-2 text-gray-500 transition-colors rounded-none rounded-r-lg hover:text-gray-700 hover:bg-gray-100 "
        >
          <ChevronLeftIconMini className="rotate-180 " />
        </IconButton>
      )}
    </div>
  );
};

export default Pagination;
