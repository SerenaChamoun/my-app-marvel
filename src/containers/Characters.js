import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Search from "../components/Search";
import ButtonFav from "../components/ButtonFav";
import Pagination from "../components/Pagination";

const Characters = ({ favoriteItems, setFavoriteItems, route, setRoute }) => {
  setRoute("characters");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // state to manipulate pages
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3001/characters/?page=${page}`
      );
      console.log(`http://localhost:3001/characters/?page=${page}`);
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [page]);

  return isLoading ? (
    <span>Chargement en cours ....</span>
  ) : (
    <div className="characters">
      <Search setData={setData} route={route} />
      {data.data.results.map((character, index) => {
        return (
          <div className="character_sheet">
            <Link to={`/character/${character.id}/comics`}>
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
                <div style={{ textTransform: "uppercase" }}>
                  {character.name}
                </div>
                <br />
                <div style={{ textTransform: "uppercase" }}>
                  {character.description}
                </div>
              </div>
            </Link>
            <ButtonFav
              favoriteItems={favoriteItems}
              setFavoriteItems={setFavoriteItems}
              obj={{
                name: character.name,
                description: character.description,
                picture:
                  character.thumbnail.path +
                  "/portrait_xlarge." +
                  character.thumbnail.extension,
              }}
            />
          </div>
        );
      })}
      <Pagination page={page} setPage={setPage} setIsLoading={setIsLoading} />
    </div>
  );
};

export default Characters;
