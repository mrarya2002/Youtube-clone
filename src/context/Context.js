import React, { useContext, useEffect, useState } from "react";
import {fetchDataFromApi} from "../utils/FetchApi"

const AppContext = React.createContext();

// provider function
const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            setSearchResults(contents);
            setLoading(false);
        });
    };

  return (
    <AppContext.Provider value={{
        loading,
        setLoading,
        searchResults,
        selectedCategory,
        setSelectedCategory,
    }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider,useGlobalContext };