export type Country = {
  name: string;
  flag: string;
  population: number;
}

export type FilterTypes = "all" | "name" | "currency" | "capitol" | "lang"

type FetchingStatuses = "idle" | "loading" | "resolved" | "rejected";

export type StatusState = {
  status: FetchingStatuses;
  error: string | null;
};