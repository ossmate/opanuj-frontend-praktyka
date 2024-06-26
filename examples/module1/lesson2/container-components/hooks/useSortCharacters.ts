import { useMemo, useState } from "react";
import { Character } from "../types/Character";

type UseSortCharacters = {
  characters: Character[];
  sortOption: string;
}

export const useSortCharacters = ({ characters, sortOption }: UseSortCharacters) => {
  const sortedCharacters = useMemo(() => {
    return [...characters].sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'created') {
        return new Date(a.created).getTime() - new Date(b.created).getTime();
      }
      return 0;
    });
  }, [characters, sortOption]);


  return { sortedCharacters }
}