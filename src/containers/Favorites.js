import React from "react";

const Favorites = ({ favorites }) => {
  return (
    <div className="favorites">
      {favorites.map((favorite, index) => {
        return (
          <div className="favorite_sheet">
            <img
              alt={favorite.name ? favorite.name : favorite.title}
              src={favorite.picture}
            />
            <div>
              <div>
                {favorite.name ? (
                  <div>{favorite.name}</div>
                ) : (
                  <div>{favorite.title}</div>
                )}
              </div>
              <div>{favorite.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
