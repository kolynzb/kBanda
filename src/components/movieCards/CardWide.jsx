import React, { useState } from "react";
import "../../scss/components/cardWide.scss";
import { AiFillStar, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import image from "../../assets/GridItem.png";
import { Link } from "react-router-dom";

const CardWide = (props) => {
  const [watchlist, setWatchlist] = useState([1, 2, 3]);
  const rating = Math.floor(props.rating);
  return (
    <figure className="cardWide">
      <Link to={`movies/${props.id}`}>
        {" "}
        <img src={props.image} alt="" />
      </Link>
      <button className="addtoWatchlist">
        <div
          className={"icon" + " " + `${watchlist.includes(4) && "iconRotate"}`}
        >
          <AiOutlinePlus />
        </div>
      </button>
      <section className="contents">
        <Link to={`movies/${props.id}`}>
          {" "}
          <figcaption className="caption">{props.title}</figcaption>
        </Link>
        <div className="rating">
          <div className="stars ">
            {[...Array(rating)].map((e, i) => (
              <AiFillStar key={i} />
            ))}
            {[...Array(5 - rating)].map((e, i) => (
              <span key={i}>
                <AiOutlineStar />
              </span>
            ))}
          </div>
          <div className="timeNyear">
            <span>{props.watchtime}</span>
            <span>{props.year}</span>
          </div>
        </div>
      </section>
    </figure>
  );
};

export default CardWide;
