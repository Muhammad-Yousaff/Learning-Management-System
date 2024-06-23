import { createContext } from "react";

export const AppContext = createContext();


export const AppContextProvider = (props) => {
  const value = {
    // You can add global states or functions here
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
