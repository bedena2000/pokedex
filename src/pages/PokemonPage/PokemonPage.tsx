// Components
import Search from "../../components/Search/Search";
import PokemonLogo from "../../components/PokemonLogo/PokemonLogo";
import Order from "../../components/Order/Order";
import Filter from "../../components/Filter/Filter";
import FilterModal from "../../components/FilterModal/FilterModal";
import Background from "../../components/Background/Background";
// Styles
import "./PokemonPageStyle.scss";
import "../../global.scss";

// Redux
import { useSelector } from "react-redux";

const PokemonPage = () => {
  const modalState = useSelector((state: { modal: boolean }) => state.modal);

  return (
    <div className="prime-container pokemonPage-wrapper">
      {modalState ? <FilterModal /> : null}
      {modalState ? <Background /> : null}
      <PokemonLogo />
      <Search />
      <div className="pokemonPage-filters">
        <Order />
        <Filter />
      </div>
    </div>
  );
};

export default PokemonPage;
