import { ReactNode, createContext, useContext, useState } from "react";

import { CountriesSearch } from "../containers/CountriesSearch";
import { CountriesGuesser } from "../containers/CountriesGuesser";

enum AppType {
  COUNTRY_SEARCH = 'COUNTRY_SEARCH',
  COUNTRY_GUESSER = 'COUNTRY_GUESSER',
}

type AppSwitcherContextType = {
  appType: AppType;
  setAppType: (appType: AppType) => void;
};

type ProviderProps = {
  children: ReactNode;
}

const AppSwitcherContext = createContext<AppSwitcherContextType | undefined>(undefined);

const AppSwitcherProvider = ({ children }: ProviderProps) => {
  const [appType, setAppType] = useState<AppType>(AppType.COUNTRY_SEARCH);

  const appTypes = {
    [AppType.COUNTRY_SEARCH]: <CountriesSearch />,
    [AppType.COUNTRY_GUESSER]: <CountriesGuesser />
  };

  return (
    <AppSwitcherContext.Provider value={{ appType, setAppType }}>
      <>
        <div className="flex gap-4">
          <button onClick={() => setAppType(AppType.COUNTRY_SEARCH)}>COUNTRY SEARCH</button>
          <button onClick={() => setAppType(AppType.COUNTRY_GUESSER)}>COUNTRY GUESSER</button>
        </div>

        <div className="mt-5">
          {appTypes[appType] || <div>Error</div>}
        </div>
      </>
      {children}
    </AppSwitcherContext.Provider>
  );
};

const useAppSwitcher = () => {
  const context = useContext(AppSwitcherContext);

  if (!context) {
    throw new Error("useAppSwitcher must be used within an AppSwitcherProvider");
  }

  return context;
};

export { AppSwitcherProvider, useAppSwitcher, AppType };
