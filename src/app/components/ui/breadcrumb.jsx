import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getTeamMember } from "../../store/team";

const Breadcrumb = () => {
  const { nick } = useParams();
  const member = useSelector(getTeamMember(nick));
  return (
    <nav aria-label="breadcrumb" className="mt-3 ps-2">
      <ol className="breadcrumb fs-5">
        <li
          className={`breadcrumb-item text-white${
            nick ? "" : " text-white-50 active"
          }`}
        >
          {nick ? (
            <Link to="/members" className="text-ligh">
              Наша команда
            </Link>
          ) : (
            "Наша команда"
          )}
        </li>
        {member && (
          <li className="breadcrumb-item text-white-50 active">
            {member.name}
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
