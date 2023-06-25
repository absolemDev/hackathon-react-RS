import React from "react";
import PropTypes from "prop-types";

function Btn({ color, onClick, label, children }) {
  const renderColor = () => {
    return `btn btn-${color}`;
  };

  return (
    <button type="button" className={renderColor()} onClick={onClick}>
      {children || label}
    </button>
  );
}

Btn.defaultProps = {
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
