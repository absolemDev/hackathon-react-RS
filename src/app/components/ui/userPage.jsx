import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "../common/progressBar";
import { useSelector } from "react-redux";
import { getTeam, getTeamMember } from "../../store/team";
function UserPage() {
  const users = useSelector(getTeam());
  const nick = useSelector(getTeamMember(users));
  console.log(nick);

  if (nick) {
    return (
      <div className="container text-center">
        <div className="row pt-3">
          <div className="col-4">
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "500px",
                borderRadius: "5%"
              }}
              src={nick.photo}
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
              <div className="fs-1">{nick.name}</div>
              <div className="fs-5">{`${nick.age} лет`}</div>
              <div className="fs-3 m-2">{nick.desk}</div>
              <ProgressBar label={"css"} percent={nick.CSS} />
              <ProgressBar label={"git"} percent={nick.Git} />
              <ProgressBar label={"html"} percent={nick.HTML} />
              <ProgressBar label={"javascript"} percent={nick.JavaScript} />
              <ProgressBar label={"react"} percent={nick.React} />
              <ProgressBar label={"redux"} percent={nick.Redux} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserPage.propTypes = {
  userId: PropTypes.string
};

export default UserPage;
