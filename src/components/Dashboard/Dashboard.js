import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTracksByUser } from "../../redux/reducers/trackReducer";
import Sidebar from "../Sidebar/Sidebar";
import Track from "../Track/Track";
import Footer from "../Footer/Footer";
import djDashboard from "../../images/djDashboard.png";
import uploadIcon from "../../images/uploadIcon.svg";
import audioWave from "../../images/audioWave.png";
import musicLibrary from "../../images/musicLibrary.png";
import "./Dashboard.scss";

function Dashboard(props) {
  useEffect(() => {
    props.getTracksByUser();
    // return () => {
    //   this.context.router.push("/");
    // };
  }, []);
  console.log(props.userTracks);
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
          <div>
            <h3>{props.username}</h3>
            <h3>{props.email}</h3>
          </div>
        </div>
        {/* <div id="dashboard-title">
          <div id="user-description">
            <h4 className="emphasis">{props.username}</h4>
            <h5 className="emphasis">{props.email}</h5>
          </div>
        </div> */}
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
                <img src={uploadIcon} alt="" id="cloud-upload-icon" />
                Upload New Beat
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
                  trackUrl={
                    "https://beatzz.s3.amazonaws.com/bensound-groovyhiphop.mp3"
                  }
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

function mapStateToProps(reduxState) {
  return {
    userTracks: reduxState.track.userTracks,
    username: reduxState.auth.username,
    email: reduxState.auth.email
  };
}

export default connect(
  mapStateToProps,
  { getTracksByUser }
)(Dashboard);
