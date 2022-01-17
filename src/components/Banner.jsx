import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import eternalImg from "../assets/eternalspic.png";
import "../scss/components/banner.scss";
import Watchbtn from "./buttons/Watchbtn";
const Banner = () => {
  const [showVideo, setShowVideo] = useState(true);
  const categories = ["action", "adventure", "thriller"];
  const rating = 4;
  useEffect(() => {
    setTimeout(() => setShowVideo(false), 6000);
  }, []);
  return (
    <section className="banner">
      <div className="overlay"></div>
      <figure className="motioncontent">
        {showVideo ? (
          <img src={eternalImg} alt="" />
        ) : (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0WVDKZJkGlY?autoplay=1&loop=1&mute=1&controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop;"
            allowfullscreen
          ></iframe>
        )}
      </figure>
      <div className="bannercontent">
        <div className="bannerContentrating">
          <div className="bannerContentcategories">
            {categories.map((category, i) => (
              <span className="bannerContentcategory" key={i}>
                {category}
              </span>
            ))}
          </div>
          <div className="rating">
            <div className="stars ">
              {[...Array(rating)].map((e, i) => (
                <AiFillStar key={i} />
              ))}
              {[...Array(5 - rating)].map((e, i) => (
                <span className="whitesTar" key={i}>
                  <AiOutlineStar />
                </span>
              ))}
            </div>
            <p>2021</p>
          </div>
        </div>
        <h1 className="bannerDetstitle">Eternals</h1>
        <div className="bannerContentCtas">
          <Watchbtn />
          <div className="circularbtns">
            <div className="circular-btn">
              <BiChevronDown />
            </div>
            <div className="circular-btn">
              <AiOutlinePlus />
            </div>
          </div>
        </div>
        <div className="bannerContentDescription">
          The Eternals, a race of immortal beings with superhuman powers who
          have secretly lived on Earth for thousands of years, reunite to battle
          the evil Deviants.
        </div>
      </div>
    </section>
  );
};

export default Banner;
