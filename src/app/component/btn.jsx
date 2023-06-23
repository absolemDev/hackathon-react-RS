import React from "react";
import PropTypes from "prop-types";

function Btn({ color, onClick, label }) {
  const renderColor = () => {
    return `btn btn-${color}`;
  };

  return (
    <button type="button" className={renderColor()} onClick={onClick}>
      {label}
    </button>
  );
}

Btn.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string
};

export default Btn;
