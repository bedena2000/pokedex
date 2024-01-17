// Components
import Search from "../../components/Search/Search";
import PokemonLogo from "../../components/PokemonLogo/PokemonLogo";
import Order from "../../components/Order/Order";
import Filter from "../../components/Filter/Filter";
// Styles
import "./PokemonPageStyle.scss";
import "../../global.scss";

const PokemonPage = () => {
  return (
    <div className="prime-container pokemonPage-wrapper">
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
