import { useState } from "react";

export const usePagination = (i = 0, step = 5, length = 0) => {
  const [index, setIndex] = useState(i);

  const totalNumber = Math.ceil(length / step);
  const pageNumber = Math.floor(index / step) + 1;

  const prev = index - step > 0 ? index - step : 0;
  const next = index + step >= length ? index : index + step;

  const hasPrev = prev != index;
  const hasNext = next != index;

  const increment = () => setIndex(next);
  const decrement = () => setIndex(prev);
  const getRange = (array = []) => array.slice(index, index + step);
  const goTo = (pageNumber) => {
    if (0 <= pageNumber && pageNumber <= totalNumber) {
      setIndex((pageNumber - 1) * step);
    }
  };

  const clear = () => setIndex(0);

  return {
    index,
    pageNumber,
    totalNumber,
    increment,
    decrement,
    getRange,
    length,
    hasPrev,
    hasNext,
    goTo,
    step,
    clear,
  };
};

export default usePagination;
