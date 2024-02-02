import { useState, useEffect } from "react";
import "./FilterModalStyle.scss";

// Animation
import { motion } from "framer-motion";

// Icons
import { IoMdClose } from "react-icons/io";
// import { IoIosCheckmark } from "react-icons/io";
import heightSmall from "../../assets/img/small-height.png";
import heightMedium from "../../assets/img/medium-height.png";
import heightLarge from "../../assets/img/large-height.png";

// Redux
import { useDispatch } from "react-redux";
import { changeModal } from "../../store/slices/modalSlice";
import { changeSettings } from "../../store/slices/filterSlice";

// Hooks
import useOutsideClick from "../../hooks/useOutsideClick";
import axios from "axios";

// Additionals
// const typesList = [
//   { title: "Normal", id: 0 },
//   { title: "Dragon", id: 1 },
//   { title: "Fighting", id: 2 },
//   { title: "Dark", id: 3 },
//   { title: "Flying", id: 4 },
//   { title: "Fairy", id: 5 },
//   { title: "Poison", id: 6 },
//   { title: "Electric", id: 7 },
//   { title: "Ground", id: 8 },
//   { title: "Rock", id: 9 },
//   { title: "Steel", id: 10 },
//   { title: "Bug", id: 11 },
//   { title: "Fire", id: 12 },
//   { title: "Ghost", id: 13 },
//   { title: "Water", id: 14 },
//   { title: "Psychic", id: 15 },
//   { title: "Grass", id: 16 },
//   { title: "Ice", id: 17 },
// ];

// Types
import { PokemonTypes } from "../../types/pokemonType";
export interface Filters {
  type: string;
  height: string;
}

const FilterModal = () => {
  const [filters, setFilters] = useState<Filters>({
    type: "",
    height: "",
  });
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((data) => setPokemonTypes(data.data.results));
  });

  const dispatch = useDispatch();
  const ref = useOutsideClick(() => {
    dispatch(changeModal());
  });

  const handleTypeChange = (selectedType: string) => {
    setFilters({
      ...filters,
      type: selectedType,
    });
  };

  const appleFiltersHandler = () => {
    if (filters.height && filters.type) {
      dispatch(
        changeSettings({
          height: filters.height,
          type: filters.type,
        })
      );
      dispatch(changeModal());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="filter-modal"
      ref={ref}
    >
      <div className="filter-modal-top">
        <p>Filters</p>
        <IoMdClose size={24} onClick={() => dispatch(changeModal())} />
      </div>

      <div className="filter-modal-types">
        <p className="filter-modal-types-title">Type</p>
        <div className="filter-modal-types-wrapper">
          {pokemonTypes.map((item: PokemonTypes) => {
            return (
              <div key={item.name} className="filter-modal-types-item">
                <input
                  name="types"
                  type="checkbox"
                  id={item.name}
                  checked={filters.type === item.name}
                  onChange={() => handleTypeChange(item.name)}
                />
                <label htmlFor={item.name}>{item.name}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="filter-modal-height">
        <p>Height</p>
        <div>
          <div className="filter-modal-height-top">
            <div
              className={`filter-modal-height-top-item ${
                filters.height === "small" ? "active-height" : ""
              }`}
              onClick={() => {
                setFilters((prevState) => {
                  return {
                    ...prevState,
                    height: "small",
                  };
                });
              }}
            >
              <img src={heightSmall} />
            </div>
            <div
              className={`filter-modal-height-top-item ${
                filters.height === "medium" ? "active-height" : ""
              }`}
              onClick={() => {
                setFilters((prevState) => {
                  return {
                    ...prevState,
                    height: "medium",
                  };
                });
              }}
            >
              <img src={heightMedium} />
            </div>
            <div
              className={`filter-modal-height-top-item ${
                filters.height === "large" ? "active-height" : ""
              }`}
              onClick={() => {
                setFilters((prevState) => {
                  return {
                    ...prevState,
                    height: "large",
                  };
                });
              }}
            >
              <img src={heightLarge} />
            </div>
          </div>
          <div className="filter-modal-height-bottom">
            <div
              className={`filter-modal-height-bottom-item ${
                filters.height === "small" ? "active-height" : null
              }`}
            >
              <div className="circle circle-sm"></div>
            </div>
            <div
              className={`filter-modal-height-bottom-item ${
                filters.height === "medium" ? "active-height" : null
              }`}
            >
              <div className="circle circle-md"></div>
            </div>
            <div
              className={`filter-modal-height-bottom-item ${
                filters.height === "large" ? "active-height" : null
              }`}
            >
              <div className="circle circle-lg"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="filter-modal-save">
        <button
          className="filter-modal-save__reset"
          onClick={() =>
            setFilters({
              height: "",
              type: "",
            })
          }
        >
          Reset filters
        </button>
        <button
          className="filter-modal-save__apply"
          onClick={appleFiltersHandler}
        >
          Apply filters
        </button>
      </div>
    </motion.div>
  );
};

export default FilterModal;
