// Icons
import { IoSearch } from "react-icons/io5";
// Style
import "./SearchStyle.scss";

const Search = () => {
  return (
    <div className="Search-searchBar">
      <div className="Search-left">
        <IoSearch className="Search-icon" color="blue" size={24} />
        <input
          className="Search-placeholder"
          placeholder="Pokemon name, number or type"
        />
      </div>
      <div className="Search-right">
        <button className="Search-btn">Search</button>
      </div>
    </div>
  );
};

export default Search;
