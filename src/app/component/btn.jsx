import React from "react";
import PropTypes from "prop-types";

function Btn({ color, onClick, label }) {
  const colorArr = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "link",
    "outline-primary",
    "outline-secondary",
    "outline-success",
    "outline-danger",
    "outline-warning",
    "outline-info",
    "outline-dark"
  ];

  const renderColor = () => {
    return `btn btn-${colorArr[color]}`;
  };

  return (
    <button type="button" className={renderColor()} onClick={onClick}>
      {label}
    </button>
  );
}

Btn.propTypes = {
  color: PropTypes.number,
  onClick: PropTypes.func,
  label: PropTypes.string
};

export default Btn;
