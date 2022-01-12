import React from "react";
import { motion } from "framer-motion";
import Banner from "../components/Banner";

import "../scss/pages/Home.scss";
import Row from "../components/Row";
const Home = () => {
  return (
    <motion.main className="homepg">
      <Banner />
      <div className="top-row">
        <Row />
        <Row title="Kbanda top Rated" cardWide={true} />
        <Row title="Kbanda Orignals" />
      </div>
    </motion.main>
  );
};

export default Home;
