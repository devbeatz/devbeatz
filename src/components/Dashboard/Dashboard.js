import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Track from "../Track/Track";
import Footer from "../Footer/Footer";
import djDashboard from "../../images/djDashboard.png";
import uploadIcon from "../../images/uploadIcon.png";
import audioWave from "../../images/audioWave.png";
import musicLibrary from "../../images/musicLibrary.png";
import "./Dashboard.scss";

function Dashboard(props) {
  const sampleBeats = [
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00",
      uploadDate: "01-10-2019",
      soldCount: 4,
      profit: "230.00"
    },
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00",
      uploadDate: "01-10-2019",
      soldCount: 4,
      profit: "230.00"
    },
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00",
      uploadDate: "01-10-2019",
      soldCount: 4,
      profit: "230.00"
    },
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00",
      uploadDate: "01-10-2019",
      soldCount: 4,
      profit: "230.00"
    },
    {
      producerName: "someDude",
      trackTitle: "A Dope Beat",
      basePrice: "15.00",
      exclusivePrice: "100.00",
      uploadDate: "01-10-2019",
      soldCount: 4,
      profit: "230.00"
    }
  ];
  return (
    <div id="dashboard">
      <Sidebar />
      <div id="user-dashboard">
        <div id="dashboard-header">
          <h1>
            <img src={djDashboard} alt="" id="dj-icon" /> Your Dashboard
          </h1>
        </div>
        <div id="dashboard-title">
          <img
            src="data:image/jpeg;base64,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"
            alt="profile"
          />
          <div id="user-description">
            <h4 className="emphasis">SomeUserName</h4>
            <p>
              This is someUserName's profile description. Pretty cool I know. No
              big deal. Just typing some words right now. Im the king of the
              world.
            </p>
          </div>
        </div>
        <div id="producer-stats">
          <h1>PLACEHOLDER FOR PRODUCER STATS</h1>
        </div>
        <div id="dashboard-main">
          <div id="uploaded-header">
            <h3>
              <img src={audioWave} alt="" id="uploaded-icon" /> Uploaded Beats
            </h3>
          </div>
          <div id="upload-section">
            <div id="dashboard-upload">
              <div>
                <img src={uploadIcon} alt="" />
              </div>
            </div>
            <div id="uploaded-beats">
              {sampleBeats.map((e, i) => {
                return (
                  <div key={i}>
                    <p>{e.trackTitle}</p>
                    <p>uploaded on {e.uploadDate}</p>
                    <p>sold {e.soldCount} times</p>
                    <p>profits: {e.profit}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div id="purchased-beats">
            <div id="purchased-header">
              <h3>
                <img src={musicLibrary} alt="" id="purchased-icon" /> Purchased
                Beats
              </h3>
            </div>
            {sampleBeats.map((e, i) => {
              return (
                <Track
                  key={i}
                  purchased={true}
                  producerName={"someDude"}
                  trackTitle={"FireFlame"}
                  basePrice={"15.00"}
                  exclusivePrice={"100.00"}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
