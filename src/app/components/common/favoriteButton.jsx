import React from "react";
import PropTypes from "prop-types";

const FavoriteButton = ({ status, ...rest }) => {
  return (
    <button className="ms-3 btn btn-outline-light" {...rest}>
      <i className={"bi bi-star" + (status ? "-fill" : "")}></i>
    </button>
  );
};
FavoriteButton.propTypes = {
  status: PropTypes.bool
};

export default FavoriteButton;
