import React from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";

const ProducerStats = props => {
  const trackNames = props.userUploaded.map(track => {
    return track.track_name;
  });
  const trackSales = props.userUploaded.map(track => {
    const base =
      track.base_price
        .split("")
        .slice(1, track.base_price.length)
        .join("") * 1;
    const exclusive =
      track.exclusive_price
        .split("")
        .slice(1, track.exclusive_price.length)
        .join("") * 1;
    return track.exclusive
      ? exclusive + base * (track.sell_count - 1)
      : base * track.sell_count;
  });

  const totalSold = trackSales.reduce((a, c) => {
    return a + c;
  }, 0);
  console.log(props.userUploaded);
  console.log(trackSales);
  console.log(trackNames);
  return (
    <div className="main">
      <div className="total-amount">${totalSold}</div>
      <div className="doughnut-chart">
        <Doughnut
          data={{
            labels: trackNames,
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: ["yellow", "red", "blue", "purple", "green"],
                borderColor: "rgb(255, 99, 132)",
                data: trackSales
              }
            ]
          }}
        />
      </div>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return { userUploaded: reduxState.track.userUploaded };
}
export default connect(mapStateToProps)(ProducerStats);
