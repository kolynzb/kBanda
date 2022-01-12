import React from "react";
import "../App.scss";
import Card from "./movieCards/Card";
import CardWide from "./movieCards/CardWide";

const Row = ({ title, cardWide }) => {
  return (
    <div className="row">
      <h1 className="section-title">{title}</h1>
      <div className="moviesContanier">
        {!cardWide ? (
          <>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        ) : (
          <>
            <CardWide />
            <CardWide />
            <CardWide />
            <CardWide />
            <CardWide />
            <CardWide />
            <CardWide />
            <CardWide />
            <CardWide />
            <CardWide />
            <CardWide />
            <CardWide />
          </>
        )}
      </div>
    </div>
  );
};

export default Row;
