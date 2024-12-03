import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FilterUIProps } from "./types";
// Design pattern Container/presentational - component presentational
  export const SearchBar = ({ filter, onFilterChange, onSearch }: FilterUIProps) => {
    return (
      <div className="flex items-center">
        <input
          type="text"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearch();
            }
          }}
          className="flex-grow mx-2 py-1 px-2 border border-slate-400 rounded mr-2"
        />
        <div className="flex space-x-2 ml-auto mr-2">
          <button onClick={onSearch}>
            <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </div>
    );
  };
  