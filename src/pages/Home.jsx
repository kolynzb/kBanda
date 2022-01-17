import React from "react";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import requests from "../requests/requests";
import "../scss/pages/Home.scss";
import Row from "../components/Row";

const Home = () => {
  return (
    <motion.main className="homepg">
      <Banner />
      <div className="top-row">
        <Row fetchUrl={requests.fetchTrendingWeek} />
        <Row
          title="Kbanda top Rated"
          cardWide={true}
          fetchUrl={requests.fetchTopRated}
        />
        <Row
          title="Kbanda Action Movies"
          fetchUrl={requests.fetchActionMovies}
        />
        <Row
          title="Kbanda Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
        />
        <Row
          title="Kbanda Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
        />
        <Row
          title="Kbanda  Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
        />
      </div>
      {/* */}
    </motion.main>
  );
};

export default Home;
