import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    if (!name) return;
    const getPokemon = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setPokemon(response.data);
    };
    getPokemon();
  }, [name]);
  return (
    <div>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites?.front_default} alt="" />
      <ul>
        <li>Altura: {pokemon?.height}</li>
        <li>Peso: {pokemon?.weight}</li>
        <li>Tipo: {pokemon?.types?.[0]?.type?.name}</li>
        <li>Elemento: {pokemon?.types?.[1]?.type?.name}</li>
        <li>HP: {pokemon?.stats?.[0]?.base_stat}</li>
        <li>Ataque: {pokemon?.stats?.[1]?.base_stat}</li>
        <li>Defensa: {pokemon?.stats?.[2]?.base_stat}</li>
        <li>Abilidad 1: {pokemon?.abilities?.[0]?.ability?.name}</li>
        <li>Abilidad 2: {pokemon?.abilities?.[1]?.ability?.name}</li>
      </ul>
      <button onClick={() => window.history.back()}>Volver</button>
    </div>
  );
};
export default PokemonDetails;
