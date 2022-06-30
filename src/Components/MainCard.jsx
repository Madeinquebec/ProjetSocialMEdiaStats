import React from "react";
import { useState } from "react";

const MainCard = ({ socialNetworkIcon, name, followersNumber, arrowIcon, tendancyNumber, tendancyColor, toggle }) => {
  // Mouse Event
  const [mouseHover, setMouseHover] = useState(true);
  function handleMouseEnter(e) {
    setMouseHover(false);
  }

  function handleMouseLeave(e) {
    setMouseHover(true);
  }

  return (
    <div
      className={`${toggle ? "mainCardBlue" : "mainCardLight"} ${mouseHover ? "" : "mainCardRed"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={socialNetworkIcon} alt="Social Network Icon" />
      <h5 className="text--grey display--inline paddingLeft--07">{name}</h5>
      <h1 className={`${toggle ? "text--white marginTop--neg10" : "text--black marginTop--neg10"}`}>{followersNumber}</h1>
      <h5 className="text--grey marginTop--neg20 text--thin">FOLLOWERS</h5>
      <div className="marginTop--neg20">
        <div className={tendancyColor}>
          <img src={arrowIcon} alt="Arrow Icon" />
          <h5 className="display--inline paddingLeft--03">{tendancyNumber} today</h5>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
