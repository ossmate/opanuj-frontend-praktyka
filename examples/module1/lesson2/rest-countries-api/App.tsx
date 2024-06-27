import { useState } from "react";
import "./App.css";
import { useGetCountries } from "./hooks/useGetCountries";
import { CountryCard } from "./components/CountryCard";
import { CountryFilterSelect } from "./components/CountryFilterSelect";
import { CountrySearchInput } from "./components/CountrySearchInput";
import type { FilterTypes } from "./types";
import { CountryCardContainer } from "./containers/CountryCardContainer";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [value, setValue] = useState<string>("")
  const [filterType, setFilterType] = useState<FilterTypes>("name")

  const debouncedValue = useDebounce(value, 500);

  const { countries, requestResult } = useGetCountries({ filter: filterType, value: debouncedValue })

  const onFilterTypeChange = (filterType: FilterTypes) => {
    setValue("")
    setFilterType(filterType)
  }

  return (
    <div className="p-4">

      <CountryFilterSelect
        filterType={filterType}
        onFilterTypeChange={onFilterTypeChange}
      />

      <CountrySearchInput value={value} setValue={setValue} isDisabled={filterType === "all"} />

      <CountryCardContainer requestResult={requestResult}>
        {countries.map((country) => <CountryCard key={country.population} {...country} />)}
      </CountryCardContainer>

    </div>
  );
}

export default App;
