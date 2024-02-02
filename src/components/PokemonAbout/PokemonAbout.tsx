import { FC } from "react";
import "./PokemonAbout.scss";

// Types
import { pokemonAboutProps } from "./PokemonAboutType";

const PokemonAbout: FC<pokemonAboutProps> = ({
  species,
  height,
  weight,
  abilities,
}) => {
  return (
    <div className="pokemonAbout-wrapper">
      <div className="pokemonAbout-wrapper-container">
        <div className="pokemonAbout-wrapper-container__item">Species</div>
        <div className="pokemonAbout-wrapper-container__item">
          {species.join(", ")}
        </div>
        <div className="pokemonAbout-wrapper-container__item">Height</div>
        <div className="pokemonAbout-wrapper-container__item">{height}</div>
        <div className="pokemonAbout-wrapper-container__item">Weight</div>
        <div className="pokemonAbout-wrapper-container__item">{weight}</div>
        <div className="pokemonAbout-wrapper-container__item">Abilities</div>
        <div className="pokemonAbout-wrapper-container__item">
          {abilities.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default PokemonAbout;
