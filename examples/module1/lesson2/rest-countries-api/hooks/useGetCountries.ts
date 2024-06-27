import { useEffect, useState } from "react";
import type { Country, FilterTypes, StatusState } from "../types";

type CountryAPIResponse = {
  flags: { png: string };
  name: { common: string };
  population: number;
}

export const useGetCountries = ({ filter, value }: { filter: FilterTypes, value: string }) => {
  const [countries, setCountries] = useState<Country[]>([])
  const [requestResult, setRequestResult] = useState<StatusState>({ status: "idle", error: null });

  useEffect(() => {
    const fetchCountries = async () => {
      const apiURL = "https://restcountries.com/v3.1"

      if (filter !== "all" && value === "") return

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

  return { countries, requestResult }
}