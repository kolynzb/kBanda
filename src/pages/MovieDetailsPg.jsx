import React, { useEffect, useState } from "react";
import axios from "../requests/axios";
import "../scss/pages/MovieDetailsPg.scss";
import wick from "../assets/wick.png";
import bgImage from "../assets/asset-11.png";
import Watchbtn from "../components/buttons/Watchbtn";
import { AiFillStar, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import { BiChevronDown, BiChevronLeft } from "react-icons/bi";
import CardWide from "../components/movieCards/CardWide";
const MovieDetailsPg = () => {
  const [movie, setMovie] = useState([]);
  const fetchUrl = "/movie_details.json?movie_id=13408";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.data.movie);

      return request;
    }
    fetchData();
  }, []);
  const categories = ["action", "adventure", "thriller"];
  const rating = 4;
  return (
    <main className="movieDets">
      <header className="movieDetsBanner">
        <div className="overlay"></div>
        <img className="movieDetsBannerImg" src={bgImage} alt="wickImage" />
        <button className="movieDetsback-btn">
          <BiChevronLeft /> Back
        </button>
      </header>
      <main className="movieDetsContainer">
        <section className="movieDetsContainerInner">
          <section className="moviedetsInner">
            <figure className="movieDetsPosterContainer">
              <img className="movieDetsPoster" src={wick} alt="movieposter" />
              <div className="moviedetsyear">
                <p>2021</p>
                <p>PG13</p>
              </div>
              <div className="runtime">1H 37MIN</div>
              <h1 className="movieDetstitle">
                John Wick: Chapter 3 – Parabellum
              </h1>
            </figure>
            <div className="moviedetailsSect">
              <div className="movieContent">
                <div className="movieContentcategories">
                  {categories.map((category, i) => (
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
                    Após assassinar o chefe da máfia Santino D’Antonio (Riccardo
                    Scamarcio) no Hotel Continental, John Wick (Keanu Reeves)
                    passa a ser perseguido pelos membros da Alta Cúpula sob a
                    recompensa de U$14 milhões. Agora, ele precisa unir forças
                    com antigos parceiros que o ajudaram no passado enquanto
                    luta por sua sobrevivência.
                  </div>
                </div>
              </div>
            </div>
            <div className="trailerSect">hfhfhffh</div>
          </section>
          <div className="similar-movies">
            <div className="title">More Like this</div>
            <div className="movie-suggestions">
              <CardWide />
              <CardWide />
              <CardWide />
              <CardWide />
            </div>
          </div>
        </section>
      </main>
    </main>
  );
};

export default MovieDetailsPg;
