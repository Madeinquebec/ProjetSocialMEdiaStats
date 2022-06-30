import React from "react";
import { useState } from "react";

const SmallCard = ({ title, socialNetworkIcon, number, arrowIcon, tendancyNumber, tendancyColor, toggle }) => {
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
      className={`${toggle ? "smallCardBlue" : "smallCardLight"} ${mouseHover ? "" : "smallCardRed"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <h5 className="text--grey display--inline">{title}</h5>
        <img src={socialNetworkIcon} className="float--right" alt="Social Network Icon" />
      </div>
      <div className={tendancyColor}>
        <h2 className={`${toggle ? "text--white display--inline" : "text--black display--inline"}`}>{number}</h2>
        <div className="float--right">
          <img src={arrowIcon} className="display--inline" alt="Arrow Icon" />
          <h5 className="display--inline paddingLeft--03">{tendancyNumber}</h5>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
