import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "../scss/pages/Searchpg.scss";
import CardSearch from "../components/movieCards/CardSearch";

const SearchPg = ({ setSearchPg }) => {
  const [results, setResults] = useState(true);
  return (
    <div className="search-page">
      <div className="overlay" onClick={() => setSearchPg(false)}></div>
      <form action="" className="search-form">
        <div className="search-input">
          <button className="search-btn" onClick="" type="submit">
            <FiSearch />
          </button>
          <input type="text" placeholder="Search" />
          <select name="" id="" className="search-dropdown">
            <option value="movies">Movies</option>
            <option value="tvshows">TV shows</option>
            <option value="all">All</option>
          </select>
        </div>
        <div className="search-results">
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
          <CardSearch />
        </div>
      </form>
    </div>
  );
};

export default SearchPg;
