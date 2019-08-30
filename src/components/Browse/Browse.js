import React from "react";
import "./Browse.scss";

function Browse(props) {
  return (
    <div id="browse-beats">
      <div id="genres-cards">
        <Track
          producerName={"someDude"}
          basePrice={"15.00"}
          exclusivePrice={"100.00"}
          trackTitle={"A Really Cool Beat"}
        />
      </div>
      <div id="browse-top5">
        <Track
          producerName={"someDude"}
          basePrice={"15.00"}
          exclusivePrice={"100.00"}
          trackTitle={"A Really Cool Beat"}
        />
      </div>
      <div id="browse-all-tracks">
        <Track
          producerName={"someDude"}
          basePrice={"15.00"}
          exclusivePrice={"100.00"}
          trackTitle={"A Really Cool Beat"}
        />
      </div>
    </div>
  );
}

export default Browse;
