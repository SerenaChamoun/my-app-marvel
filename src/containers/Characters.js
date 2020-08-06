import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Search from "../components/Search";
const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/characters");
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <span>Chargement en cours ....</span>
  ) : (
    <div className="characters">
      CHARACTERS PAGE
      <Search setData={setData} />
      {data.data.results.map((character, index) => {
        return (
          <Link to={`/character/${character.id}/comics`}>
            <div className="character">
              <div className="characterPic">
                <img
                  alt={character.name}
                  src={
                    character.thumbnail.path +
                    "/portrait_xlarge." +
                    character.thumbnail.extension
                  }
                />
              </div>

              <div>
                <div>{character.name}</div>
                <div>{character.description}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Characters;
