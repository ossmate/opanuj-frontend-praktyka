import { useState } from "react";

import { useGetCountries } from "../hooks/useGetCountries";
import { CountryCard } from "../components/CountryCard";
import { CountryFilterSelect } from "../components/CountryFilterSelect";
import { CountrySearchInput } from "../components/CountrySearchInput";
import type { FilterTypes, SortByTypes } from "../types";
import { CountryCardContainer } from "../containers/CountryCardContainer";
import { useDebounce } from "../hooks/useDebounce";
import { SortCountriesSelect } from "../components/SortCountriesSelect";

export const CountriesSearch = () => {
  const [value, setValue] = useState<string>("")
  const [filterType, setFilterType] = useState<FilterTypes>("name")
  const [sortBy, setSortBy] = useState<SortByTypes>("default")

  const debouncedValue = useDebounce(value, 500);

  const { countries, requestResult } = useGetCountries({ filter: filterType, value: debouncedValue, sortBy })

  const handleSetFilterType = (newFilterType: FilterTypes) => {
    if (newFilterType === "all") {
      setValue("");
    }
    setFilterType(newFilterType);
  };

  return (
    <>
      <CountryFilterSelect
        filterType={filterType}
        handleSetFilterType={handleSetFilterType}
      />

      <CountrySearchInput
        value={value}
        setValue={setValue}
        isDisabled={filterType === "all"}
      />

      <SortCountriesSelect
        sortBy={sortBy}
        setSortBy={setSortBy}
        isDisabled={requestResult.status !== "resolved"}
      />

      <CountryCardContainer requestResult={requestResult}>
        {countries.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </CountryCardContainer>
    </>
  )
}
