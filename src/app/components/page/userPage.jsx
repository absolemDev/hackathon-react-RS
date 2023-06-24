import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTeamLoadingStatus, getTeamMember } from "../../store/team";
import ProgressBar from "../common/progressBar";
import SocialLink from "../common/socialLink";

function UserPage() {
  const navigate = useNavigate();
  const { nick } = useParams();
  const member = useSelector(getTeamMember(nick));
  const isLoading = useSelector(getTeamLoadingStatus());
  const handleClick = () => {
    navigate(-1);
  };

  if (isLoading) return "Loading...";

  return (
    <div className="container text-center text-light">
      <div className="row pt-3">
        <div className="col-md-4">
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "550px",
              borderRadius: "1%"
            }}
            src={member.photo}
            onClick={handleClick}
            alt="..."
          />
        </div>
        <div className="col">
          <div className="text-end">
            <div className="fs-1">{member.name}</div>
            <div className="fs-5">{`${member.age} лет`}</div>
            <div className="fs-3 m-2">{member.about}</div>

            {Object.keys(member.technologies).map((t) => (
              <ProgressBar key={t} label={t} percent={member.technologies[t]} />
            ))}
            <div className="mt-2 p-2">
              {Object.keys(member.social).map((s) => (
                <SocialLink key={s} nick={nick} name={s} width="65px" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
