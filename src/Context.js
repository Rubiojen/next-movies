import React, { createContext, useReducer } from "react";

let reducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
    case "SET_FILTERED_MOVIES":
      return { ...state, filteredMovies: action.payload };
    default:
      return;
  }
};
const initialState = { movies: [], filteredMovies: [] };
const DataContext = createContext(initialState);
function DataProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DataContext.Provider>
  );
}
export { DataContext, DataProvider };
