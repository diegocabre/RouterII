import { useContext, useState } from "react";
import { MyContext } from "../context/MyContext";
import { useNavigate } from "react-router";
import "./Pokemon.css";

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
      <select app
      
      className="select" name="" id="" onChange={(e) => selectPokemon(e.target.value)}>
        {pokemons.results?.map((pokemon) => (
          <option className="option" value={pokemon.name} key={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button className="btn" onClick={showDetail}>Ver Detalle</button>
    </div>
  );
};
export default Pokemon;
