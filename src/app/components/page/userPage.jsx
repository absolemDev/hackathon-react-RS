import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getTeamLoadingStatus, getTeamMember } from "../../store/team";
import ProgressBar from "../common/progressBar";
import SocialLink from "../common/socialLink";
import { getAge } from "../../utils/getAge";
import localStorageService from "../../services/localStorage.service";
import FavoriteButton from "../common/favoriteButton";

function UserPage() {
  const { nick } = useParams();
  const member = useSelector(getTeamMember(nick));
  const isLoading = useSelector(getTeamLoadingStatus());
  const favorites = JSON.parse(localStorageService.getFavorites()) || [];
  const [isFavorite, setIsFavorite] = useState(favorites.includes(nick));

  const handleFavorite = () => {
    if (favorites.includes(nick)) {
      localStorageService.removeFavorite(nick);
      setIsFavorite(false);
    } else {
      localStorageService.setFavorite(nick);
      setIsFavorite(true);
    }
  };

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
          <div className="text-center py-2">
            {Object.keys(member.social).map((s) => (
              <SocialLink key={s} nick={nick} social={s} width="35px" />
            ))}
          </div>
        </div>
        <div className="col">
          <div>
            <div className="d-flex">
              <div className="fs-2">{member.name}</div>
              <FavoriteButton
                status={isFavorite}
                onClick={() => handleFavorite()}
              />
            </div>
            <div className="fs-5">{`${getAge(member.age)}`}</div>
            <div className="fs-4 my-3">{member.about}</div>
            <div>
              <p className="fs-5 fw-bold m-0">Владение технологиями:</p>
              {Object.keys(member.technologies).map((t) => (
                <ProgressBar
                  key={t}
                  label={t}
                  percent={member.technologies[t]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
