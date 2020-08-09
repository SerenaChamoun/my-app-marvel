import React from "react";
//Import du package Fontawesome ici pour pouvoir l'utiliser sur le composant Characters
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonFav = ({ favoriteItems, setFavoriteItems, obj }) => {
  console.log(typeof favoriteItems);
  const index = favoriteItems.findIndex((fav) =>
    fav.name ? fav.name === obj.name : fav.title === obj.title
  );

  const handleFavoriteItems = (event) => {
    const newTab = [...favoriteItems];
    if (index === -1) {
      newTab.push(obj);
    } else {
      newTab.splice(index, 1);
    }
    setFavoriteItems(newTab);
    localStorage.setItem("favorites", JSON.stringify(newTab));
  };

  return (
    <div className="buttonFav">
      <button onClick={handleFavoriteItems}>
        <FontAwesomeIcon
          style={{ color: index === -1 ? "white" : "#ec1d24" }}
          icon="heart"
        />
      </button>
    </div>
  );
};

export default ButtonFav;
