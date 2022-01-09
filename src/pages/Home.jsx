import React from "react";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import Card from "../components/movieCards/Card";
import CardSearch from "../components/movieCards/CardSearch";
import CardWide from "../components/movieCards/CardWide";
import DownloadPopUp from "../components/popups/DownloadPopUp";
const Home = () => {
  return (
    <motion.main>
      <Banner />
      <Card />
      <CardWide />
      <div>skdjhlkdhfslkduhfs;iudhf;siuh;</div>
      <CardSearch />
      {/* <DownloadPopUp /> */}
    </motion.main>
  );
};

export default Home;
