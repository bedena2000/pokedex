import { FC, useEffect, useState } from "react";
import "./PokemonEvolutionStyle.scss";
import axios from "axios";
import { PokemonEvolutionProps } from "./PokemonEvolutionTypes";

// Icons
import pokemonEvolutionIcon from "../../assets/img/pokemonEvolutionIcon.png";
import PokemonArrowIcon from "../../assets/img/lineArrow.png";

// Helpers
import { objectInfo } from "../../helpers/objectInfo";

// Types
import { PokemonEvolutionType, PokemonType } from "../../types/pokemonType";

// Components
import PokemonEvolutionItem from "../PokemonEvolutionItem/PokemonEvolutionItem";

const PokemonEvolution: FC<PokemonEvolutionProps> = ({
  pokemonId,
  pokemonInfo,
}) => {
  const [pokemonEvolution, setPokemonEvolution] = useState(null);
  const [pokemonEvolutionArray, setPokemonEvolutionArray] = useState<
    PokemonEvolutionType[] | []
  >([]);
  const [pokemonInfoArray, setPokemonInfoArray] = useState<PokemonType[] | []>(
    []
  );

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}/`)
      .then((data) => {
        setPokemonEvolution(data.data.chain.evolves_to);
        const evolutionArray = objectInfo(data.data.chain.evolves_to);
        setPokemonEvolutionArray(evolutionArray);
      });
  }, [pokemonId]);

  useEffect(() => {
    if (pokemonEvolutionArray.length > 0) {
      const fetchData = async () => {
        const promises = pokemonEvolutionArray.map((item) => {
          return axios.get(
            `https://pokeapi.co/api/v2/pokemon/${item.species.name}`
          );
        });

        try {
          const dataResults = await Promise.all(promises);
          const resultArray: PokemonType[] = [];

          dataResults.map((item) => {
            resultArray.push(item.data);
          });

          setPokemonInfoArray(resultArray);
        } catch (error) {
          console.log(`Error Fetching Pokemon Info: `, error);
        }
      };

      fetchData();
    }
  }, [pokemonEvolutionArray]);

  if (
    pokemonEvolutionArray[0]?.evolution_details &&
    pokemonInfoArray.length > 0
  ) {
    return (
      <div className="pokemonEvolutionWrapper">
        {pokemonEvolutionArray[0].evolution_details && pokemonInfo ? (
          <div className="pokemonEvolutionWrapper-list">
            <div className="pokemonEvolutionItem-box">
              <div className="pokemonEvolutionItem-box__item">
                <img src={pokemonEvolutionIcon} alt="pokemonCircleIcon" />
                <img
                  src={pokemonInfo?.sprites?.other?.dream_world?.front_default}
                  alt="pokemonIcon"
                />
              </div>
              <div className="pokemonEvolution-Arrow">
                <div>
                  <img src={PokemonArrowIcon} alt="pokemonArrow" />
                </div>
                <div>
                  <p>
                    lvl{" "}
                    {pokemonEvolutionArray[0].evolution_details[0].min_level}
                  </p>
                </div>
              </div>
              <div className="pokemonEvolutionItem-box__item">
                <img src={pokemonEvolutionIcon} alt="pokemonCircleIcon" />
                <img
                  src={
                    pokemonInfoArray[0]?.sprites?.other?.dream_world
                      ?.front_default
                  }
                  alt="pokemonIcon"
                />
              </div>
            </div>

            {pokemonEvolutionArray.map((item, index) => {
              if (index % 2 === 0) {
                const firstItem = pokemonEvolutionArray[index];
                const secondItem = pokemonEvolutionArray[index + 1];
                const firstPokemonInfo = pokemonInfoArray[index];
                const secondPokemonInfo = pokemonInfoArray[index + 1];
                return (
                  <PokemonEvolutionItem
                    pokemonLevel={secondItem?.evolution_details[0]?.min_level}
                    key={firstPokemonInfo.name}
                    pokemonPictures={[
                      firstPokemonInfo?.sprites?.other?.dream_world
                        ?.front_default,
                      secondPokemonInfo?.sprites?.other?.dream_world
                        ?.front_default,
                    ]}
                  />
                );
              }
            })}
          </div>
        ) : null}
      </div>
    );
  } else {
    return (
      <div className="pokemonEvolutionWrapper">
        <div className="pokemonEvolutionDoesNotEvolve">
          <div className="pokemonEvolutionDoesNotEvolve-picture">
            <img src={pokemonEvolutionIcon} alt="pokemonEvolutionIcon" />
            <img
              src={pokemonInfo?.sprites?.other?.dream_world?.front_default}
              alt="pokemonIcon"
            />
          </div>
          <div className="pokemonEvolutionDoesNotEvolve-title">
            <p>This pokemon doesn't Evolve</p>
          </div>
        </div>
      </div>
    );
  }
};

export default PokemonEvolution;
