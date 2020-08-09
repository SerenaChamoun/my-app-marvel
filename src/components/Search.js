import React, { useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ setData, route }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + `${route}/search/${searchInput}`
    );

    //console.log(response.data);
    setData(response.data);
  };
  return (
    <div className="search" style={{ position: "relative" }}>
      <input
        placeholder="SEARCH"
        type="text"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <FontAwesomeIcon
        style={{
          color: "black",
          fontSize: "25px",
          position: "absolute",
          top: "10px",
          left: "50px",
        }}
        icon="search"
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default Search;
