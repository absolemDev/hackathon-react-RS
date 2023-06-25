import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTeamMember } from "../../store/team";

const SocialLink = ({ nick, name, width }) => {
  const member = useSelector(getTeamMember(nick));
  if (!member) return "Loading...";

  return (
    <>
      <Link to={member.social[name]}>
        <img
          className="mx-4"
          src={`/assets/img/${name}.svg`}
          width={width}
          alt={`${name} link`}
        />
      </Link>
    </>
  );
};

SocialLink.propTypes = {
  nick: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string
};

export default SocialLink;
