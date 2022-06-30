import React from "react";
import MainCard from "./MainCard";
import { useState } from "react";
import SmallCard from "./SmallCard";
import upIcon from "../Images/icon-up.svg";
import downIcon from "../Images/icon-down.svg";
import facebookIcon from "../Images/icon-facebook.svg";
import instagramIcon from "../Images/icon-instagram.svg";
import twitterIcon from "../Images/icon-twitter.svg";
import youtubeIcon from "../Images/icon-youtube.svg";

const Container = ({ followersTotal }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="container">
      <div className="display--flex">
        <div className="marginLeft--1">
          <h2 className={`${toggle ? "text--white" : "text--grey"}`}>Social Media Dashboard</h2>
          <h5 className="text--grey">Followers total: {followersTotal}</h5>
        </div>

        <div>
          <h4 className="display--inline paddingRight--1 text--grey">Dark Mode</h4>
          <label className="switch">
            <input type="checkbox" onClick={() => setToggle(!toggle)} />
            <span className="slider round"></span>
            {toggle ? (document.body.style.backgroundColor = "#20222e") : (document.body.style.backgroundColor = "#ffffff")}
          </label>
        </div>
      </div>

      <div className="display--flex">
        <MainCard
          socialNetworkIcon={facebookIcon}
          name="@nathanf"
          followersNumber="1987"
          arrowIcon={upIcon}
          tendancyNumber="12"
          tendancyColor="text--lightGreen"
          toggle={toggle}
        />
        <MainCard
          socialNetworkIcon={twitterIcon}
          name="@nathanf"
          followersNumber="1044"
          arrowIcon={upIcon}
          tendancyNumber="99"
          tendancyColor="text--lightGreen"
          toggle={toggle}
        />
        <MainCard
          socialNetworkIcon={instagramIcon}
          name="@realnathanf"
          followersNumber="11k"
          arrowIcon={upIcon}
          tendancyNumber="1099"
          tendancyColor="text--lightGreen"
          toggle={toggle}
        />
        <MainCard
          socialNetworkIcon={youtubeIcon}
          name="Nathan F"
          followersNumber="8239"
          arrowIcon={downIcon}
          tendancyNumber="144"
          tendancyColor="text--lightRed"
          toggle={toggle}
        />
      </div>

      <div className="marginLeft--1">
        <h3 className={`${toggle ? "text--white" : "text--grey"}`}>Overview - Today</h3>
      </div>

      <div className="display--flex">
        <SmallCard
          title="Page Views"
          socialNetworkIcon={facebookIcon}
          number="87"
          arrowIcon={upIcon}
          tendancyNumber="3%"
          tendancyColor="text--lightGreen"
          toggle={toggle}
        />
        <SmallCard
          title="Likes"
          socialNetworkIcon={facebookIcon}
          number="52"
          arrowIcon={downIcon}
          tendancyNumber="2%"
          tendancyColor="text--lightRed"
          toggle={toggle}
        />
        <SmallCard
          title="Likes"
          socialNetworkIcon={instagramIcon}
          number="5462"
          arrowIcon={upIcon}
          tendancyNumber="2257%"
          tendancyColor="text--lightGreen"
          toggle={toggle}
        />
        <SmallCard
          title="Profile Views"
          socialNetworkIcon={instagramIcon}
          number="52k"
          arrowIcon={upIcon}
          tendancyNumber="1375%"
          tendancyColor="text--lightGreen"
          toggle={toggle}
        />
      </div>

      <div className="display--flex">
        <SmallCard
          title="Retweets"
          socialNetworkIcon={twitterIcon}
          number="117"
          arrowIcon={upIcon}
          tendancyNumber="303%"
          tendancyColor="text--lightGreen"
          toggle={toggle}
        />
        <SmallCard
          title="Likes"
          socialNetworkIcon={twitterIcon}
          number="507"
          arrowIcon={upIcon}
          tendancyNumber="553%"
          tendancyColor="text--lightGreen"
          toggle={toggle}
        />
        <SmallCard
          title="Likes"
          socialNetworkIcon={youtubeIcon}
          number="107"
          arrowIcon={downIcon}
          tendancyNumber="19%"
          tendancyColor="text--lightRed"
          toggle={toggle}
        />
        <SmallCard
          title="Total Views"
          socialNetworkIcon={youtubeIcon}
          number="1407"
          arrowIcon={downIcon}
          tendancyNumber="12%"
          tendancyColor="text--lightRed"
          toggle={toggle}
        />
      </div>
    </div>
  );
};

export default Container;
