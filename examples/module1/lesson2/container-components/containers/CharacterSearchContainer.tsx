import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchTitle from '../components/SearchTitle';
import { useSearchCharacter } from '../hooks/useSearchCharacter';
import { useSortCharacters } from '../hooks/useSortCharacters';
import { NameField } from '../components/NameField';
import { GenderField } from '../components/GenderFields';
import { SortBySelect } from '../components/SortBySelect';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [sortOption, setSortOption] = useState('');

  const { characters } = useSearchCharacter({ name, gender })
  const { sortedCharacters } = useSortCharacters({ characters, sortOption  })

  return (
    <>
      <div className="pt-20" />
      <SearchTitle searchTitle="Rick and Morty" />
      <div className="pt-8" />

      <form className="space-x-4 flex items-end justify-center">
        <NameField name={name} setName={setName} />
        <GenderField gender={gender} setGender={setGender} />
        <SortBySelect sortOption={sortOption} setSortOption={setSortOption} />
      </form>

      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
