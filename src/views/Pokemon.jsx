import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";
import { useNavigate } from "react-router";

const Pokemon = () => {
  const [selectName, setName] = useState(null);
  const { pokemons } = useContext(MyContext);
  const navigate = useNavigate();
  const selectPokemon = (name) => {
    setName(name);
  };

  const showDetail = async () => {
    if (!selectName) return;
    navigate(`/pokemon/${selectName}`);
  };

  return (
    <div>
      <select name="" id="" onChange={(e) => selectPokemon(e.target.value)}>
        {pokemons.results?.map((pokemon) => (
          <option value={pokemon.name} key={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button onClick={showDetail}>Ver Detalle</button>
    </div>
  );
};
export default Pokemon;
