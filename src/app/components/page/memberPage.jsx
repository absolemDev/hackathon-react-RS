import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getTeamLoadingStatus, getTeamMember } from "../../store/team";
import ProgressBar from "../common/progressBar";
import SocialLink from "../ui/socialLink";
import { getAge } from "../../utils/getAge";
import FavoriteButton from "../common/favoriteButton";
import Badge from "../common/badge";

function MemberPage() {
  const { nick } = useParams();
  const member = useSelector(getTeamMember(nick));
  const isLoading = useSelector(getTeamLoadingStatus());

  if (isLoading) return "Loading...";
  if (!isLoading && !member) return <Navigate to="/members" />;

  return (
    <div className="container text-light">
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
            alt="..."
          />
          <div className="text-center py-2 mb-3">
            {member.social.map((s) => (
              <SocialLink
                key={s.name}
                name={s.name}
                link={s.link}
                width="35px"
              />
            ))}
          </div>
        </div>
        <div className="col">
          <div>
            <div className="d-flex">
              <div className="fs-2">{member.name}</div>
              <FavoriteButton nick={nick} />
            </div>
            <div className="fs-5 mb-3">{`${getAge(member.age)}`}</div>
            <div>
              {member.badges.map((b, i) => (
                <Badge key={i} color={b.color} content={b.label} />
              ))}
            </div>
            <div className="fs-5 my-3 text-justify">{member.about}</div>
            <div>
              <p className="fs-5 fw-bold m-0">Владение технологиями:</p>
              {member.technologies.map((t) => (
                <ProgressBar key={t.name} label={t.name} percent={t.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="fs-5 mt-4">
        <p className="p-0">
          При работе над данным проектом принимал участие в разработке следующих
          компонентов и модулей:
        </p>
        {member.components.map((m) => (
          <p key={m.name}>
            <i className="bi bi-check"></i>
            <span className="fw-bold mx-2">{m.name}</span>-{" "}
            <span>{m.text}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default MemberPage;
