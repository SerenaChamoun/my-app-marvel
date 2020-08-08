import React, { useState } from "react";
import axios from "axios";

const Search = ({ setData, route }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `http://localhost:3001/${route}/search/${searchInput}`
    );

    console.log(`http://localhost:3001/${route}/search/${searchInput}`);
    //console.log(response.data);
    setData(response.data);
  };
  return (
    <div className="search">
      <input
        type="text"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default Search;
