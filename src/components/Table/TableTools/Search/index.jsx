import { Input } from "components";
import { MagnifyingGlassIconOutline } from "lib/@heroicons";
import { useState, useEffect } from "react";
// import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "lib/@heroicons";
// import SearchFilter from "./SearchFilter";

const Search = ({ setSearch: onSearchSubmit }) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  useEffect(() => {
    const timer = setTimeout(() => setTerm(debouncedTerm), 500);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);

  useEffect(() => {
    if (term !== "") {
      onSearchSubmit(term);
    }
  }, [term]);
  return (
    <Input
      id="search"
      inputClassName="pl-10"
      inputSize="small"
      placeholder="Search"
      value={debouncedTerm}
      onChange={(e) => setDebouncedTerm(e.target.value)}
      startIcon={<MagnifyingGlassIconOutline className="w-5 h-5" />}
      withoutHelperText
      className="w-1/2"
    />
  );
};

export default Search;
