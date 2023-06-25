import React from "react";
import PropTypes from "prop-types";

function Btn({ color, onClick, label, children }) {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
      {children || label}
    </button>
  );
}

Btn.defaultProps = {
  color: "primary",
  label: "Кнопка"
};

Btn.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Btn;
