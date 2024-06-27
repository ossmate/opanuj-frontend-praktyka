import "./App.css";

import { useState } from "react";
import { CountriesSearch } from "./containers/CountriesSearch";
import { CountriesGuesser } from "./containers/CountriesGuesser";

enum AppType {
  COUNTRY_SEARCH = 'COUNTRY_SEARCH',
  COUNTRY_GUESSER = 'COUNTRY_GUESSER',
}

const appTypeComponents = {
  [AppType.COUNTRY_SEARCH]: <CountriesSearch />,
  [AppType.COUNTRY_GUESSER]: <CountriesGuesser />
};

function App() {
  const [appType, setAppType] = useState(AppType.COUNTRY_SEARCH);

  return (
    <div className="p-4">
      <div className="flex gap-4">
        <button onClick={() => setAppType(AppType.COUNTRY_SEARCH)}>COUNTRY SEARCH</button>
        <button onClick={() => setAppType(AppType.COUNTRY_GUESSER)}>COUNTRY GUESSER</button>
      </div>

      <div className="mt-5">
        {appTypeComponents[appType] || <div>Error</div>}
      </div>
    </div>
  );
}

export default App;
