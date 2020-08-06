import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Comics = () => {
  const { id } = useParams();
  console.log(useParams());
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3001/comics" + (id ? "/" + id : "")
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
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="comics">
      COMICS PAGE
      {/* <Search setData={setData} /> */}
      {data.data.results.map((comic, index) => {
        return (
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
            <div>{comic.title}</div>
            <div>{comic.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
