import { useState } from "react";
// Icons
import { IoSearch } from "react-icons/io5";
// Style
import "./SearchStyle.scss";

// Redux
import { changeSearch } from "../../store/slices/SearchSlice";

import { useDispatch } from "react-redux";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(changeSearch(inputValue));
  };

  return (
    <div className="Search-searchBar">
      <div className="Search-left">
        <IoSearch className="Search-icon" color="blue" size={24} />
        <input
          className="Search-placeholder"
          placeholder="Pokemon name, number or type"
          onChange={(event) => {
            event.preventDefault();
            setInputValue(event.target.value);
          }}
          value={inputValue}
        />
      </div>
      <div className="Search-right" onClick={handleSearch}>
        <button className="Search-btn">Search</button>
      </div>
    </div>
  );
};

export default Search;
