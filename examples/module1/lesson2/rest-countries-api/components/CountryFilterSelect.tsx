import type { FilterTypes } from "../types";

type Props = {
  filterType: FilterTypes;
  onFilterTypeChange: (filterType: FilterTypes) => void;
}

export const CountryFilterSelect = ({ filterType, onFilterTypeChange }: Props) => (
  <label className="px-2">
    <select
      value={filterType}
      onChange={(event) => onFilterTypeChange(event?.target?.value as FilterTypes) }
    >
      <option value="all" >All</option>
      <option value="name" >Country</option>
      <option value="currency">Currency</option>
      <option value="capitol">Capitol</option>
      <option value="lang">Language</option>
    </select>
  </label>
)
