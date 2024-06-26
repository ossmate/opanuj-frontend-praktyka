import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useSearchCharacter } from '../hooks/useSearchCharacter';
import { useSortCharacters } from '../hooks/useSortCharacters';

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
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} />
      <div className="pt-16" />
    </>
  );
}

export default CharacterSearchContainer;
