import { useState } from "react";
import { FilterProps } from "./types";
import { SearchBar } from "../SearchBar";
// Design pattern Container/presentational - component container

export const Filter = ({ filter, updateFilter }: FilterProps) => {
  const [currentFilter, setCurrentFilter] = useState(filter);

  const handleFilterProducts = () => {
    updateFilter(currentFilter);
  };

  return (
    <SearchBar
      filter={currentFilter}
      onFilterChange={setCurrentFilter}
      onSearch={handleFilterProducts}
    />
  );
};
