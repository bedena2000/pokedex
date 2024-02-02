import { FC } from "react";
import { PokemonEvolutionItemProps } from "./PokemonEvolutionItemTypes";
import "./PokemonEvolutionItemStyle.scss";
import LineArrowIcon from "../../assets/img/lineArrow.png";
import PokemonBackgroundIcon from "../../assets/img/pokemonEvolutionIcon.png";

const PokemonEvolutionItem: FC<PokemonEvolutionItemProps> = ({
  pokemonLevel,
  pokemonPictures,
}) => {
  return (
    <div className="pokemonEvolutionItem">
      <div className="pokemonEvolutionItem-pictureWrapper">
        <img src={pokemonPictures[0]} alt="pokemonEvolutionIcon" />
        <img src={PokemonBackgroundIcon} alt="pokemonBackgroundCircle" />
      </div>

      <div className="pokemonEvolutionItem-arrow">
        <div>
          <img src={LineArrowIcon} alt="lineArrow" />
        </div>
        <p>lvl {pokemonLevel}</p>
      </div>

      <div className="pokemonEvolutionItem-pictureWrapper">
        <img src={pokemonPictures[1]} alt="pokemonEvolutionIcon" />
        <img src={PokemonBackgroundIcon} alt="pokemonBackgroundCircle" />
      </div>
    </div>
  );
};

export default PokemonEvolutionItem;
