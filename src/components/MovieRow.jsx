import React from "react";
import "../../App.scss";
import CardWide from "./movieCards/CardWide";
import Card from "../movieCards/Card";
const MovieRow = ({ wide }) => {
  return (
    <div className="movie-row">
      {wide ? (
        <>
          <CardWide />
        </>
      ) : (
        <>
          <Card />
        </>
      )}
    </div>
  );
};

export default MovieRow;
