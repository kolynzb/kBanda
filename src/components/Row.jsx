import React, { useEffect, useState } from "react";
import "../App.scss";
import Card from "./movieCards/Card";
import CardWide from "./movieCards/CardWide";
import { img_url } from "../requests/requests";
import axios from "../requests/axios";
const Row = ({ title, cardWide, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    const data = await axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
    // return data;
  }
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return (
    <div className="row">
      <h1 className="section-title">{title}</h1>
      <div className="moviesContanier">
        {!cardWide ? (
          <>
            {movies.map((movie, i) => (
              <Card
                key={i}
                title={movie.title}
                image={img_url + movie.poster_path}
                id={movie.id}
              />
            ))}
          </>
        ) : (
          <>
            {movies.map((movie, i) => (
              <CardWide
                key={i}
                title={movie.title}
                image={img_url + movie.poster_path}
                id={movie.id}
                rating={movie.vote_average / 2}
                watchtime="1H 37MIN"
                year={movie.release_date.split("-")[0]}
                genre={movie.genre_ids}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Row;
