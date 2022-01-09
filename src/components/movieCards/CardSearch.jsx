import React, { useState } from "react";
import "../../scss/components/cardSearch.scss";
import { AiFillStar, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import image from "../../assets/GridItem.png";
const CardSearch = () => {
  const [watchlist, setWatchlist] = useState([1, 2, 3]);
  const categories = ["Action", "Adventure", "Thriller"];
  const rating = 4;
  return (
    <figure className="cardSearch">
      <img src={image} alt="" />
      <button className="addtoWatchlist">
        <div
          className={"icon" + " " + `${watchlist.includes(4) && "iconRotate"}`}
        >
          <AiOutlinePlus />
        </div>
      </button>
      <section className="contents">
        <figcaption className="caption">the man from U.N.C.L.E</figcaption>
        <div className="rating">
          <div className="stars ">
            {[...Array(rating)].map((e, i) => (
              <AiFillStar key={i} />
            ))}
            {[...Array(5 - rating)].map((e, i) => (
              <span key={i}>
                {" "}
                <AiOutlineStar />{" "}
              </span>
            ))}
          </div>
          <div className="category">
            {categories.map((category, i) => (
              <span key={i}>{category} | </span>
            ))}
          </div>
          <div className="timeNyear">
            <span>1H 37MIN</span>
            <span>2021</span>
          </div>
        </div>
      </section>
    </figure>
  );
};

export default CardSearch;
