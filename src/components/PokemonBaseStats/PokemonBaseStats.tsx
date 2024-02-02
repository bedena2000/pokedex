import { FC } from "react";

import "./PokemonBaseStatsStyle.scss";

// Components
import PokemonStatSlider from "../pokemonStatsSlider/PokemonStatSlider";

// types
import { pokemonBaseStatsProps } from "./PokemonBaseStatsType";

const PokemonBaseStats: FC<pokemonBaseStatsProps> = ({ listOfStats }) => {
  return (
    <div className="pokemonBaseStats-box">
      {listOfStats
        ? listOfStats.map((item) => {
            return (
              <div key={item.stat.name} className="pokemonBaseStats-wrapper">
                <div className='pokemonBaseStats-wrapper__name'>{item.stat.name}</div>
                <div className="pokemonBaseStats-wrapper__number">{item.base_stat}</div>
                <PokemonStatSlider pokemonStat={item.base_stat} />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default PokemonBaseStats;
