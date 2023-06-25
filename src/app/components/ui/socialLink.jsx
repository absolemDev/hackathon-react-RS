import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SocialLink = ({ name, link, width }) => {
  return (
    <>
      <Link to={link}>
        <img
          className="mx-2"
          src={`/assets/img/${name}.svg`}
          width={width}
          alt={`${name} link`}
        />
      </Link>
    </>
  );
};

SocialLink.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  width: PropTypes.string
};

export default SocialLink;
