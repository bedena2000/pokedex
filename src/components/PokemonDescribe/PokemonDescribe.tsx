import { useState, useEffect } from "react";
import "./PokemonDescribe.scss";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Types

import { dataType } from "../../types/data";
import axios from "axios";
import { PokemonType } from "../../types/pokemonType";
import { pokemonChosePage } from "../../types/pokemonType";

// icons
import { FaArrowLeft } from "react-icons/fa";

// Helpers
import pokemonDescribe, {
  closePokemonDescribeModal,
} from "../../store/slices/pokemonDescribe";

// Hooks
import useOutsideClick from "../../hooks/useOutsideClick";

// Animation
import { motion } from "framer-motion";

// Components
import PokemonAbout from "../PokemonAbout/PokemonAbout";
import PokemonBaseStats from "../PokemonBaseStats/PokemonBaseStats";
import PokemonEvolution from "../PokemonEvolution/PokemonEvolution";

const PokemonDescribe = () => {
  const [pokemonInfo, setPokemonInfo] = useState<PokemonType>();
  const pokemonDescribe = useSelector(
    (state: dataType) => state.pokemonDescribe
  );
  const dispatch = useDispatch();
  const modalRef = useOutsideClick(() => {
    dispatch(closePokemonDescribeModal());
  });
  const [chosePokemonPage, setChosePokemonPage] =
    useState<pokemonChosePage>("about");


  useEffect(() => {
    const getPokemon = async (pokemonName: string) => {
      return await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((result) => result);
    };
    if (pokemonDescribe.chosePokemon) {
      getPokemon(pokemonDescribe.chosePokemon).then((result) =>
        setPokemonInfo(result.data)
      );
    }
  }, [pokemonDescribe.chosePokemon]);

  const handleIcon = () => {
    if (chosePokemonPage === "about") {
      dispatch(closePokemonDescribeModal());
    } else if (chosePokemonPage === "base stats") {
      setChosePokemonPage("about");
    } else if (chosePokemonPage === "evolution") {
      setChosePokemonPage("base stats");
    }
  };

  const handleDescribeChange = (chosePage: pokemonChosePage) => {
    setChosePokemonPage(chosePage);
  };

  if (pokemonDescribe.chosePokemon === null) {
    return null;
  }


  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      className="pokemonDescribe-wrapper"
      ref={modalRef}
    >
      <div className="pokemonDescribe-wrapper-top">
        <div className="pokemonDescribe-wrapper-top__icon">
          <FaArrowLeft color="white" onClick={handleIcon} />
        </div>

        <div className="pokemonDescribe-wrapper-top__info">
          <div className="pokemonDescribe-wrapper-top__info__image">
            <img
              src={`${pokemonInfo?.sprites?.other?.dream_world?.front_default}`}
              alt="pokemonInfoPicture"
            />
          </div>

          <div className="pokemonDescribe-wrapper-top__info__data">
            <p>#00{pokemonInfo?.id}</p>
            <h2>
              {pokemonInfo?.name
                ? pokemonInfo?.name.charAt(0).toUpperCase() +
                  pokemonInfo?.name.slice(1).toLowerCase()
                : null}
            </h2>
            <div className="pokemonDescribe-wrapper-top__info__data-types">
              {pokemonInfo?.types.map((item) => {
                const type = item.type.name;
                return (
                  <div
                    key={item.type.name}
                    className="pokemonDescribe-wrapper-top__info-types__item"
                  >
                    {type}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="pokemonDescribe-wrapper-bottom">
        <div className="pokemonDescribe-wrapper-bottom-filters">
          <p
            className={`${chosePokemonPage === "about" ? "active-btn" : ""}`}
            onClick={() => handleDescribeChange("about")}
          >
            About
          </p>
          <p
            className={`${
              chosePokemonPage === "base stats" ? "active-btn" : ""
            }`}
            onClick={() => handleDescribeChange("base stats")}
          >
            Base Stats
          </p>
          <p
            className={`${
              chosePokemonPage === "evolution" ? "active-btn" : ""
            }`}
            onClick={() => handleDescribeChange("evolution")}
          >
            Evolution
          </p>
        </div>
        <div className="pokemonDescribe-wrapper-bottom-page">
          {pokemonInfo !== undefined ? (
            chosePokemonPage === "about" ? (
              <PokemonAbout
                abilities={pokemonInfo.abilities.map(
                  (item) => item.ability.name
                )}
                height={`${pokemonInfo?.height}cm`}
                species={pokemonInfo?.types.map((item) => item.type.name)}
                weight={`${pokemonInfo?.weight}kg`}
                key={pokemonInfo?.name}
              />
            ) : null
          ) : null}
          {pokemonInfo !== undefined ? (
            chosePokemonPage === "base stats" ? (
              <PokemonBaseStats listOfStats={pokemonInfo.stats} />
            ) : null
          ) : null}
          {
            pokemonInfo !== undefined ? (
              chosePokemonPage === 'evolution' ? (
                <PokemonEvolution pokemonId={pokemonDescribe.pokemonId} pokemonInfo={pokemonInfo} />
              ) : null
            ) : null
          }
        </div>
      </div>
    </motion.div>
  );
};

export default PokemonDescribe;
