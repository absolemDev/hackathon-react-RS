import React from "react";
import PropTypes from "prop-types";

const UserCard = ({ label, age, src, desk }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={src} className="card-img-top" alt="user image" />
      <div className="card-body">
        <h5 className="card-title">{label}</h5>
        <h6 className="card-title">{`Возраст: ${age} лет`}</h6>
        <div className="card-text">{desk}</div>
      </div>

      <div className="card-body"></div>
    </div>
  );
};

UserCard.propTypes = {
  label: PropTypes.string,
  age: PropTypes.number,
  src: PropTypes.string,
  desk: PropTypes.string
};

export default UserCard;
