import React, { useState } from "react";
import PropTypes from "prop-types";
import localStorageService from "../../services/localStorage.service";

const FavoriteButton = ({ nick }) => {
  const favorites = JSON.parse(localStorageService.getFavorites()) || [];
  const [isFavorite, setIsFavorite] = useState(favorites.includes(nick));
  const handleFavorite = () => {
    if (favorites.includes(nick)) {
      localStorageService.removeFavorite(nick);
      setIsFavorite(false);
    } else {
      localStorageService.setFavorite(nick);
      setIsFavorite(true);
    }
  };

  return (
    <>
      <button className="ms-3 btn btn-outline-light" onClick={handleFavorite}>
        <i className={"bi bi-star" + (isFavorite ? "-fill" : "")}></i>
      </button>
    </>
  );
};

FavoriteButton.propTypes = {
  nick: PropTypes.string
};

export default FavoriteButton;
