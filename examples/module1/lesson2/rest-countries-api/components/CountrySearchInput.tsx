import type { Dispatch, SetStateAction } from "react";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  isDisabled: boolean;
}

export const CountrySearchInput = ({ value, setValue, isDisabled }: Props) => (
  <label className="px-2">
    <input
      type="text"
      value={value}
      disabled={isDisabled}
      onChange={(event) => setValue(event.target.value)}
    />
  </label>
)