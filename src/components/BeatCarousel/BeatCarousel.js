import React from "react";
import { Carousel } from "react-bootstrap";
import Track from "../Track/Track";

function BeatCarousel(props) {
  return (
    <Carousel>
      {props.top5.map(track => {
        return (
          <Carousel.Item style={{ width: "80%" }}>
            <Track
              producerName={track.producerName}
              trackTitle={track.trackTitle}
              basePrice={track.basePrice}
              exclusivePrice={track.exclusivePrice}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default BeatCarousel;
