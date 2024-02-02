import "./PokemonItemStyle.scss";
import { FC } from "react";

// Types
import { PokemonItemProps } from "./PokemonItemTypes";

// Assets
import pokemonBackground from "../../assets/img/pokemonBack.svg";

// Redux
import { changeDescribePokemon } from "../../store/slices/pokemonDescribe";
import { useDispatch } from "react-redux";

const PokemonItem: FC<PokemonItemProps> = ({
  name,
  pokemonNumber,
  pokemonIcon,
}) => {
  const dispatch = useDispatch();

  const handlePokemonClick = () => {
    dispatch(
      changeDescribePokemon({
        name: name,
        pokemonId: Number(pokemonNumber.slice(3)),
      })
    );
  };

  return (
    <div className="pokemonItem-wrapper" onClick={() => handlePokemonClick()}>
      <p className="pokemonItem-wrapper__name">{name}</p>
      <p className="pokemonItem-wrapper__number">{pokemonNumber}</p>

      <div className="pokemonItem-wrapper__pokemonIcon">
        <img
          src={pokemonIcon}
          alt="pokemonIcon"
          className="pokemonItem-wrapper__pokemonIcon__icon"
        />
      </div>

      <img
        className="pokemonItem-wrapper__pokemonBackground__icon"
        src={pokemonBackground}
        alt="pokemonBackground"
      />
    </div>
  );
};

export default PokemonItem;
