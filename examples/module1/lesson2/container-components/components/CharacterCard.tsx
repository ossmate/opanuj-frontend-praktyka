
import { Character } from '../types/Character'

type Props = {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => (
  <li key={character.id} className="flex flex-col items-center">
    <h3>{character.name}</h3>
    <img src={character.image} alt={character.name} />
  </li>
)
