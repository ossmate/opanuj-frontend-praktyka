import type { FilterTypes } from "../types";

type Props = {
  filterType: FilterTypes;
  handleSetFilterType: (value: FilterTypes) => void;
}

export const CountryFilterSelect = ({ filterType, handleSetFilterType }: Props) => (
  <label className="px-2">
    <select
      value={filterType}
      onChange={(event) => handleSetFilterType(event?.target?.value as FilterTypes) }
    >
      <option value="all" >All</option>
      <option value="name" >Country</option>
      <option value="currency">Currency</option>
      <option value="capital">Capital</option>
      <option value="lang">Language</option>
    </select>
  </label>
)
