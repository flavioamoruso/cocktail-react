import { useState, useContext, createContext } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [query, setQuery] = useState("negroni");
  const { isLoading, data, isError, count } = useFetch(`s=${query}`);
  //SIDEBAR FUNCTIONS
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  //END SIDEBAR FUNCTION

  //Cerca cocktail: Quando cambia Query, ho un nuovo rendere di useFetch
  const searchCocktail = (input) => {
    setQuery(input);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        searchCocktail,
        isLoading,
        isError,
        count,
        query,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
