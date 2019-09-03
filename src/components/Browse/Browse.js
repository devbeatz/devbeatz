import React from "react";
import "./Browse.scss";
import Sidebar from "../Sidebar/Sidebar";
import Track from "../Track/Track";
import BeatCarousel from "../BeatCarousel/BeatCarousel";
import Footer from "../Footer/Footer";

function Browse(props) {
  const sampleTop5 = [
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00"
    },
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00"
    },
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00"
    },
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00"
    },
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00"
    }
  ];

  return (
    <div id="browse">
      <Sidebar />
      <div id="browse-beats">
        <div id="genre-cards">
          <h1>Browse by Genre</h1>
          <div className="genre-card">Alternative</div>
          <div className="genre-card">Blues</div>
          <div className="genre-card">Freestyle</div>
          <div className="genre-card">Hip-Hop</div>
          <div className="genre-card">Old School</div>
          <div className="genre-card">Pop</div>
          <div className="genre-card">R&B</div>
          <div className="genre-card">Soul</div>
          <div className="genre-card">Trap</div>
          <div className="genre-card">Underground</div>
        </div>
        <div id="browse-top5">
          <h1>En Fuego</h1>
          <h4>Top 5 Tracks</h4>
          {sampleTop5.map((e, i) => {
            return (
              <Track
                key={i}
                producerName={"someDude"}
                trackTitle={"FireFlame"}
                basePrice={"15.00"}
                exclusivePrice={"100.00"}
              />
            );
          })}
        </div>
        <div id="browse-all-tracks"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Browse;
