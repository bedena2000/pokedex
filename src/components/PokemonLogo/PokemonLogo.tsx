import "./PokemonLogoStyle.scss";
// Assets
import pokemonLogo from "../../assets/img/pokedex-logo.png";


const PokemonLogo = () => {
  return (
    <div className="pokemonPage-logo">
      <img src={pokemonLogo} alt="mainLogo" />
    </div>
  );
};

export default PokemonLogo;
