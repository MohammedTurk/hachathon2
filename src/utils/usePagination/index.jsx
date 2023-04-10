import { useState } from "react";

export const usePagination = (i = 0, step = 5, length = 0) => {
  const [index, setIndex] = useState(i);
  const totalNumber = Math.ceil(length / step);

  const pageNumber = Math.floor(index / step) + 1;

  const prev = index - step > 0 ? index - step : 0;
  const next = index + step >= length ? length - 1 : index + step;

  const increment = () => setIndex(next);
  const decrement = () => setIndex(prev);
  const getRange = (array = []) => array.slice(index, index + step);

  return {
    index,
    pageNumber,
    totalNumber,
    increment,
    decrement,
    getRange,
    length,
  };
};

export default usePagination;
