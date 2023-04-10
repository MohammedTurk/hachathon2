import { ChevronLeftIconMini } from "../../lib/@heroicons";
import { IconButton } from "components";

export const Pagination = ({
  className = "",
  decrement,
  increment,
  getString,
  pageNumber,
  totalNumber,
}) => {
  return (
    <div className={`flex items-center justify-center gap-2 pt-3 ${className}`}>
      <IconButton
        size="large"
        onClick={decrement}
        className="flex items-center justify-center text-inherit"
      >
        <ChevronLeftIconMini className="" />
      </IconButton>
      <span>{getString(pageNumber, totalNumber)}</span>
      <IconButton size="large" onClick={increment} className=" text-inherit">
        <ChevronLeftIconMini className="rotate-180 " />
      </IconButton>
    </div>
  );
};

export default Pagination;
