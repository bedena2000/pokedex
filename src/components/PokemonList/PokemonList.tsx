import "./PokemonListStyle.scss";
import { useEffect } from "react";
import axios from "axios";
// Redux
import { useDispatch } from "react-redux";
// Types
import { PokemonType } from "../../types/pokemonType";
// Redux Functions
import { createList } from "../../store/slices/pokemonListSlice";
import { useSelector } from "react-redux";
import PokemonItem from "../PokemonItem/PokemonItem";
import { sortType } from "../../store/slices/sortSlice";
// Components
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
// Assets
import PokemonNotFoundIcon from "../../assets/img/pokemonNotFound.svg";
import { Filters } from "../FilterModal/FilterModal";
import { PokemonTypes } from "../../types/pokemonType";

const PokemonList = () => {
  const pokemonList = useSelector(
    (state: { pokemonList: PokemonType[] }) => state.pokemonList
  );

  const sort = useSelector((state: { sort: sortType }) => state.sort);

  const searchString = useSelector(
    (state: { searchValue: string }) => state.searchValue
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const pokemonList: PokemonType[] = [];
      const fetchPokemon = async (pokemonId: number) => {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
          );
          const pokemonItem: PokemonType = response.data;
          pokemonList.push(pokemonItem);
        } catch (error) {
          console.error(`Error fething Pokemon with ID ${pokemonId};`, error);
        }
      };

      await Promise.all(
        Array.from({ length: 160 }, (_, i) => fetchPokemon(i + 1))
      );

      dispatch(createList(pokemonList));
    };

    fetchData();
  }, [dispatch]);

  let sortedArray = [];

  switch (sort) {
    case "lowest":
      sortedArray = [...pokemonList].sort((a, b) => a.id - b.id);
      break;
    case "higher":
      sortedArray = [...pokemonList].sort((a, b) => b.id - a.id);
      break;
    case "AZ":
      sortedArray = [...pokemonList].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;
    case "ZA":
      sortedArray = [...pokemonList].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      break;
    default:
      return;
  }

  if (searchString) {
    sortedArray = sortedArray.filter((item) =>
      item.name.includes(searchString)
    );
    if (sortedArray.length === 0) {
      return (
        <div className="pokemon-error">
          <div>
            <img src={PokemonNotFoundIcon} alt="pokemonNotFound" />
            <p>No pokemon matched your search!</p>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="pokemonList-wrapper">
      {sortedArray.length > 0
        ? sortedArray?.map((item) => {
            return (
              <PokemonItem
                name={item.name}
                pokemonIcon={item.sprites.other.dream_world.front_default}
                pokemonNumber={`#00${item.id}`}
                key={item.id}
                pokemonId={item.id}
              />
            );
          })
        : Array.from({ length: 3 }, (_, index) => (
            <LoadingSkeleton key={index} />
          ))}
    </div>
  );
};

export default PokemonList;
