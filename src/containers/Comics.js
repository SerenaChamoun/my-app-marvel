import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Search from "../components/Search";
import ButtonFav from "../components/ButtonFav";
import Pagination from "../components/Pagination";

const Comics = ({ route, setRoute, favoriteItems, setFavoriteItems }) => {
  setRoute("comics");
  const { id } = useParams();
  console.log(useParams());
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // state to manipulate pages
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3001/comics" + (id ? "/" + id : "") + `?page=${page}`
      );

      // let res;
      // if (id) {
      //   res = `http://localhost:3001/comics/${id}`;
      // } else {
      //   res = "http://localhost:3001/comics";
      // }
      // const response = await axios.get(res);

      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [page]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="comics">
      <Search setData={setData} route={route} />
      {data.data.results.map((comic, index) => {
        return (
          <div className="comic_sheet">
            <div className="comic">
              <div>
                <img
                  src={
                    comic.thumbnail.path +
                    "/portrait_xlarge." +
                    comic.thumbnail.extension
                  }
                  alt={comic.title}
                />
              </div>
              <div>
                <div>{comic.title}</div>
                <div>{comic.description}</div>
              </div>
            </div>
            <ButtonFav
              favoriteItems={favoriteItems}
              setFavoriteItems={setFavoriteItems}
              obj={{
                title: comic.title,
                description: comic.description,
                picture:
                  comic.thumbnail.path +
                  "/portrait_xlarge." +
                  comic.thumbnail.extension,
              }}
            />
          </div>
        );
      })}
      <Pagination page={page} setPage={setPage} setIsLoading={setIsLoading} />
    </div>
  );
};

export default Comics;
