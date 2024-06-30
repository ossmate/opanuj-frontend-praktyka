import type { Country } from "../types";

type Props = {
  country: Country;
  showName?: boolean;
}

export const CountryCard = ({
  country: { name, flag, population},
  showName = true,
}: Props) => (
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '200px', maxHeight: '300px'}}>
    <img src={flag} alt={name} />
    <div>
      {showName && <p>Name: {name}</p>}
      <p>Population: {population}</p>
    </div>
  </div>
)