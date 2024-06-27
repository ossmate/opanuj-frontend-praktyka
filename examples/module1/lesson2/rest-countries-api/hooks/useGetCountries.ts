import { useEffect, useMemo, useState } from "react";
import type { Country, FilterTypes, SortByTypes, StatusState } from "../types";

type CountryAPIResponse = {
  flags: { png: string };
  name: { common: string };
  population: number;
}

type UseGetCountriesParams = {
  filter: FilterTypes,
  value: string,
  sortBy: SortByTypes
}

export const useGetCountries = ({ filter, value, sortBy }: UseGetCountriesParams) => {
  const [countries, setCountries] = useState<Country[]>([])
  const [requestResult, setRequestResult] = useState<StatusState>({ status: "idle", error: null });

  useEffect(() => {
    const fetchCountries = async () => {
      const apiURL = "https://restcountries.com/v3.1"

      if (filter !== "all" && value === "") return

      if (filter === "all" && value) return

      try {
        setRequestResult({ status: "loading", error: null });
        const response = await fetch(`${apiURL}${`/${filter}/${value}`}`);

        if (!response.ok) {
          const error = new Error(`Error: ${response.statusText}`);
          error.message = response.statusText;
          throw error;
        }

        const data: CountryAPIResponse[] = await response.json()

        const mappedCountries = data?.map(({ flags, name, population }) => ({
          id: crypto.randomUUID(),
          flag: flags.png,
          name: name.common,
          population
        }))

        setCountries(mappedCountries)
        setRequestResult({ status: "resolved", error: null });
      } catch (error: any) {
        setRequestResult({ status: "rejected", error: error?.message });
      }
    }

    fetchCountries()
  }, [filter, value])

    const sortedCountries = useMemo(() => {
    if (!countries) return [];

    const sorted = [...countries];

    switch (sortBy) {
      case "alphabetical-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "alphabetical-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "population-asc":
        sorted.sort((a, b) => a.population - b.population);
        break;
      case "population-desc":
        sorted.sort((a, b) => b.population - a.population);
        break;
      default:
        break;
    }

    return sorted;
  }, [countries, sortBy]);

  return { countries: sortedCountries, requestResult }
}