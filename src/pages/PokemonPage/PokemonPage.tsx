// Components
import Search from "../../components/Search/Search";
import PokemonLogo from "../../components/PokemonLogo/PokemonLogo";
import Order from "../../components/Order/Order";
import Filter from "../../components/Filter/Filter";
import FilterModal from "../../components/FilterModal/FilterModal";
import Background from "../../components/Background/Background";
import PokemonList from "../../components/PokemonList/PokemonList";
import PokemonDescribe from "../../components/PokemonDescribe/PokemonDescribe";
// Styles
import "./PokemonPageStyle.scss";
import "../../global.scss";

// Types
import { dataType } from "../../types/data";

// Redux
import { useSelector } from "react-redux";

const PokemonPage = () => {
  const modalState = useSelector((state: dataType) => state.modal);
  const pokemonDescribeModal = useSelector(
    (state: dataType) => state.pokemonDescribe
  );

  return (
    <div className="prime-container pokemonPage-wrapper">
      {modalState ? <FilterModal /> : null}
      {modalState ? <Background /> : null}
      {pokemonDescribeModal.pokemonDescribeModal ? <Background /> : null}
      {pokemonDescribeModal.pokemonDescribeModal ? <PokemonDescribe /> : null}
      <PokemonLogo />
      <Search />
      <div className="pokemonPage-filters">
        <Order />
      </div>
      <PokemonList />
    </div>
  );
};

export default PokemonPage;
