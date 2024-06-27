import type { Country } from "../types";

export const CountryCard = ({
  name,
  flag,
  population,
}: Country) => (
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '200px', maxHeight: '300px'}}>
    <img src={flag} alt={name} />
    <div>
      <p>Name: {name}</p>
      <p>Population: {population}</p>
    </div>
  </div>
)