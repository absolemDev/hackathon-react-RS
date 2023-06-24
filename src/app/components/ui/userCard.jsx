import React from "react";
import PropTypes from "prop-types";
import { getAge } from "../../utils/getAge";
import Btn from "../common/btn";

const UserCard = ({ label, age, src, desc }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={src}
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
        <h5 className="card-title">{label}</h5>
        <h6 className="card-title">{`Возраст: ${getAge(age)}`}</h6>
        <div className="mt-3">
          <Btn
            color="dark"
            onClick={() => console.log("link")}
            label="Подробнее..."
          />
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  label: PropTypes.string,
  age: PropTypes.number,
  src: PropTypes.string,
  desc: PropTypes.string
};

export default UserCard;
