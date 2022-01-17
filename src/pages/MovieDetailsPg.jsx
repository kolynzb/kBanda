import React, { useEffect, useState } from "react";
import axios from "../requests/axios";
import "../scss/pages/MovieDetailsPg.scss";
import bgImage from "../assets/asset-11.png";
import Watchbtn from "../components/buttons/Watchbtn";
import { AiFillStar, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import { BiChevronDown, BiChevronLeft } from "react-icons/bi";
import CardWide from "../components/movieCards/CardWide";
import requests from "../requests/requests";
import { img_url } from "../requests/requests";
import { useParams } from "react-router-dom";
const MovieDetailsPg = () => {
  const { slug } = useParams();
  const id = slug;
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [similar, setSimilar] = useState([]);
  const [trailer, settrailer] = useState([]);
  const [genres, setGenres] = useState([]);
  const [url, setUrl] = useState(null);
  let categories = [];
  async function fetchData() {
    const similarData = await axios
      .get(requests.fetchSimilarMovies(id))
      .then((response) => {
        // console.log(response.data.results);
        setSimilar(response.data.results);
      });

    const Data = await axios
      .get(requests.fetchMovieById(id))
      .then((response) => {
        // console.log(response.data.results);
        setMovie(response.data);
        response.data.genres.map((movi) => categories.push(movi.name));
        setUrl(img_url + response.data.belongs_to_collection.backdrop_path);
        console.log(url);
        setGenres(categories);
      })
      .finally(() => setLoading(false));

    const TrailerData = await axios
      .get(requests.fetchMovieTrailersById(id))
      .then((response) => {
        // console.log(response.data);
        settrailer(response.data.results);
      });
    return Data;
  }
  useEffect(() => {
    fetchData();
  }, []);

  const rating = 4;
  // console.log(url);

  return (
    <main className="movieDets">
      <header className="movieDetsBanner">
        <div className="overlay"></div>
        <img
          className="movieDetsBannerImg"
          src={url || bgImage}
          alt="wickImage"
        />
        <button className="movieDetsback-btn">
          <BiChevronLeft /> Back
        </button>
      </header>
      <main className="movieDetsContainer">
        <section className="movieDetsContainerInner">
          <section className="moviedetsInner">
            <div className="movieDetsInnerInner">
              <figure className="movieDetsPosterContainer">
                <img
                  className="movieDetsPoster"
                  src={img_url + movie.poster_path}
                  alt="movieposter"
                />
                <div className="moviedetsyear">
                  <p>2021</p>
                  <p>PG13</p>
                </div>
                <div className="runtime">1H 37MIN</div>
                <h1 className="movieDetstitle">{movie?.original_title}</h1>
              </figure>
              <div className="moviedetailsSect">
                <div className="movieContent">
                  <div className="movieContentcategories">
                    {genres.map((category, i) => (
                      <span className="movieContentcategory" key={i}>
                        {category} |
                      </span>
                    ))}
                  </div>
                  <div className="movieContentrating">
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
                    <p>4.8 rating(s)</p>
                  </div>
                  <div className="language">
                    <p>IMDB</p>
                    <p>Language -EN</p>
                  </div>
                  <div className="movieContentCtas">
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
                  <div className="movieContentDesciptionSect">
                    <div className="movieContentTitle">Storyline</div>
                    <div className="movieContentDescription">
                      {movie.overview}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="trailerSect">
              <div className="movieContentTitle">Trailer</div>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailer[0].key}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="watchSect">
              <div className="movieContentTitle">Watch</div>
              <iframe
                title="Kband"
                src={`https://autoembed.xyz/movie/tmdb/${id}`}
                width="100%"
                height="500px"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </section>
          <div className="similar-movies">
            <div className="title">More Like this</div>
            <div className="movie-suggestions">
              {similar.map((movie, i) => (
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
            </div>
          </div>
        </section>
      </main>
    </main>
  );
};

export default MovieDetailsPg;
