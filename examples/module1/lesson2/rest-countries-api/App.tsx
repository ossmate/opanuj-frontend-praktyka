import { useMemo, useState } from "react";
import "./App.css";
import { useGetCountries } from "./hooks/useGetCountries";
import { CountryCard } from "./components/CountryCard";
import { CountryFilterSelect } from "./components/CountryFilterSelect";
import { CountrySearchInput } from "./components/CountrySearchInput";
import type { FilterTypes, SortByTypes } from "./types";
import { CountryCardContainer } from "./containers/CountryCardContainer";
import { useDebounce } from "./hooks/useDebounce";
import { SortCountriesSelect } from "./components/SortCountriesSelect";

function App() {
  const [value, setValue] = useState<string>("")
  const [filterType, setFilterType] = useState<FilterTypes>("name")
  const [sortBy, setSortBy] = useState<SortByTypes>("default")

  const debouncedValue = useDebounce(value, 500);

  const { countries, requestResult } = useGetCountries({ filter: filterType, value: debouncedValue, sortBy })

  const handleSetFilterType = (value: FilterTypes) => {
    if (value === "all") {
      setValue("")
    }

    setFilterType(value)
  }

  return (
    <div className="p-4">
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
          <CountryCard key={country.id} {...country} />
        ))}
      </CountryCardContainer>
    </div>
  );
}

export default App;
