import React, { useState } from "react";
import "../../scss/components/card.scss";
import { AiOutlinePlus } from "react-icons/ai";
import image from "../../assets/GridItem.png";
const Card = () => {
  const [watchlist, setWatchlist] = useState([1, 2, 3]);
  return (
    <figure className="card">
      <img src={image} alt="" />
      <button className="addtoWatchlist">
        <div
          className={"icon" + " " + `${watchlist.includes(4) && "iconRotate"}`}
        >
          <AiOutlinePlus />
        </div>
      </button>

      <figcaption className="caption">movie title</figcaption>
    </figure>
  );
};

export default Card;
