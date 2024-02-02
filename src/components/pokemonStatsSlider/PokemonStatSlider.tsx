import { FC } from "react";
import "./PokemonStatSliderStyle.scss";
import { PokemonStatSliderProps } from "./PokemonStatSliderTypes";
import axios from "axios";

const PokemonStatSlider: FC<PokemonStatSliderProps> = ({ pokemonStat }) => {
  return (
    <div className="pokemonStatSlider-wrapper">
      <div
        style={{
          width: `${pokemonStat}%`,
        }}
        className="pokemonStatSlider-wrapper__number"
      ></div>
    </div>
  );
};

export default PokemonStatSlider;
