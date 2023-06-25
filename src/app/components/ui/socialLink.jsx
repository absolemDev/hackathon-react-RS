import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTeamMember } from "../../store/team";

const SocialLink = ({ nick, social, width }) => {
  const member = useSelector(getTeamMember(nick));
  if (!member) return "Loading...";

  return (
    <>
      <Link to={member.social[social]}>
        <img
          className="mx-2"
          src={`/assets/img/${social}.svg`}
          width={width}
          alt={`${social} link`}
        />
      </Link>
    </>
  );
};

SocialLink.propTypes = {
  nick: PropTypes.string,
  social: PropTypes.string,
  width: PropTypes.string
};

export default SocialLink;
