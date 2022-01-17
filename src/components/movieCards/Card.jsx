import React, { useEffect, useState } from "react";
import "../../scss/components/card.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
// import image from "../../assets/GridItem.png";

const Card = ({ image, title, id }) => {
  const [watchlist, setWatchlist] = useState([1, 2, 3]);

  return (
    <figure className="card">
      <Link to={`movies/${id}`}>
        <img src={image} alt="" />
      </Link>
      <button className="addtoWatchlist">
        <div
          className={"icon" + " " + `${watchlist.includes(id) && "iconRotate"}`}
        >
          <AiOutlinePlus />
        </div>
      </button>

      <Link to={`movies/${id}`}>
        <figcaption className="caption">{title}</figcaption>{" "}
      </Link>
    </figure>
  );
};

export default Card;
