import React from "react";
import UserCard from "../ui/userCard";
import { useSelector } from "react-redux";
import { getTeam } from "../../store/team";

const MainPage = () => {
  const team = useSelector(getTeam());
  if (!team) return "Loading...";
  return (
    <>
      <div className="cards-container">
        {team.map((member) => (
          <div key={member.nick} className="m-4">
            <UserCard {...member} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MainPage;
