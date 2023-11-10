import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000`
    );
    setPokemons(response.data);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <MyContext.Provider value={{ pokemons }}>{children}</MyContext.Provider>
  );
};
