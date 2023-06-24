import React from "react";
import PropTypes from "prop-types";
import { getAge } from "../../utils/getAge";
import { useNavigate } from "react-router-dom";

const UserCard = ({ name, age, nick, photo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/members/${nick}`);
  };

  return (
    <div
      className="card"
      style={{ width: "18rem" }}
      role="button"
      onClick={handleClick}
    >
      <img
        src={photo}
        className="card-img-top"
        style={{
          objectPosition: "0 0",
          objectFit: "cover",
          width: "100%",
          height: "300px"
        }}
        alt="user image"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-title">{`Возраст: ${getAge(age)}`}</h6>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  photo: PropTypes.string,
  nick: PropTypes.string
};

export default UserCard;
