import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTeamLoadingStatus, getTeamMember } from "../../store/team";
import ProgressBar from "../common/progressBar";

function UserPage() {
  const { nick } = useParams();
  const member = useSelector(getTeamMember(nick));
  const isLoading = useSelector(getTeamLoadingStatus());

  if (isLoading) return "Loading...";

  return (
    <div className="container text-center text-light">
      <div className="row pt-3">
        <div className="col-4">
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "500px",
              borderRadius: "5%"
            }}
            src={member.photo}
            alt="..."
          />
        </div>
        <div className="col">
          <div
            className="text-end"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "500px"
            }}
          >
            <div className="fs-1">{member.name}</div>
            <div className="fs-5">{`${member.age} лет`}</div>
            <div className="fs-3 m-2">{member.about}</div>
            {Object.keys(member.technologies).map((t) => (
              <ProgressBar key={t} label={t} percent={member.technologies[t]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
