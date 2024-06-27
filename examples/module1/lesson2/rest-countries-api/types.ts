export type Country = {
  id: string;
  name: string;
  flag: string;
  population: number;
}

export type FilterTypes = "all" | "name" | "currency" | "capital" | "lang"

type FetchingStatuses = "idle" | "loading" | "resolved" | "rejected";

export type StatusState = {
  status: FetchingStatuses;
  error: string | null;
};

export type SortByTypes = "default" | "alphabetical-asc" | "alphabetical-desc" | "population-asc" | "population-desc"