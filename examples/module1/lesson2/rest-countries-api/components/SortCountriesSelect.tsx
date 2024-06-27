import type { Dispatch, SetStateAction } from "react"
import type { SortByTypes } from "../types"

type Props = {
  sortBy: SortByTypes;
  setSortBy: Dispatch<SetStateAction<SortByTypes>>;
  isDisabled: boolean;
}

export const SortCountriesSelect = ({ sortBy, setSortBy, isDisabled }: Props) =>  (
  <label className="px-2">
    <select
      value={sortBy}
      onChange={(event) => setSortBy(event?.target?.value as SortByTypes) }
      disabled={isDisabled}
    >
      <option value="default" >Default</option>
      <option value="alphabetical-asc" >A-Z</option>
      <option value="alphabetical-desc" >Z-A</option>
      <option value="population-asc">Population \/</option>
      <option value="population-desc">Population /\</option>
    </select>
  </label>
)
