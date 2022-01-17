import React from "react";
import "../../scss/components/DownloadPopup.scss";
const DownloadPopUp = () => {
  return (
    <section className="downloadPopup">
      <div className="overlay"></div>
      <div className="downloadContents">
        <h2>
          Download <span>Movie Title</span>
        </h2>
        <div className="cards">
          <Cardd resolution="1080" format="video" size="1.2 GB" />
          <Cardd resolution="720" format="video" size="900MBs" />
          <Cardd resolution="480" format="video" size="600MBs" />
          <Cardd resolution="SUBS" format="subtitle" size="2kBs" />
        </div>
        <button className="back-btn ">Back</button>
      </div>
    </section>
  );
};

export default DownloadPopUp;

const Cardd = (props) => {
  return (
    <div className="downloadcard">
      <h1 className="resolution">{props.resolution}</h1>
      <p className="format">{props.format}</p>
      <p className="format"> Size: {props.size}</p>
      <button className="downloadbtn">Download</button>
    </div>
  );
};
