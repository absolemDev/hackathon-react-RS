import React from "react";
import Slider from "../common/slider";
import { aboutTeam } from "../../content/aboutTeam";
import UserCard from "../ui/userCard";
import { useSelector } from "react-redux";
import { getTeam } from "../../store/team";

const MainPage = () => {
  const team = useSelector(getTeam());
  if (!team) return "Loading...";
  return (
    <>
      <Slider sliders={aboutTeam} />

      <ul className="cards-container">
        {team.map((member) => (
          <li key={member.nick} className="m-4">
            <UserCard
              nick={member.nick}
              label={member.name}
              age={member.age}
              src={member.photo}
              // desk={"Люблю кодить"}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainPage;
