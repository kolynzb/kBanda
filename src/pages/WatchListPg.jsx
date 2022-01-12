import React, { useEffect, useState } from "react";
import "../scss/pages/Watchlist.scss";
const WatchListPg = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const info = await fetch(
        "https://api.themoviedb.org/3/trending/all/week?api_key=1b26809a9f6f50bf9da2b56a2234c3ab&language=en-US"
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error));
    }
    fetchData();
    console.log(data);
  }, []);
  const img_url = "https://image.tmdb.org/t/p/original/";
  return (
    <section className="watchlistpg">
      <header>
        <h1 className="title">WatchList</h1>
        <div className="navv">
          <p>Movies</p>
          <div className="lineV"></div>
          <p>Series</p>
        </div>
      </header>
      <main>
        {data.results.map((item, i) => (
          <div key={i}>
            <p>{item.title}</p>
            <p>{item.overview}</p>
            <img src={img_url + item.poster_path} alt="yo maza" />
          </div>
        ))}
      </main>
    </section>
  );
};

export default WatchListPg;
