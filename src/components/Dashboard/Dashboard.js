import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import UploadBeat from "../UploadBeat/UploadBeat";

function Dashboard(props) {
  const [upload, setUpload] = useState(false);
  const { loggedIn, getTracksByUser, history } = props;
  useEffect(() => {
    if (loggedIn) {
      getTracksByUser();
    } else {
      history.push("/");
    }
  }, [loggedIn, getTracksByUser, history]);

  return (
    <div id="dashboard">
      <Sidebar />
      <UploadBeat show={upload} onHide={() => setUpload(false)} />
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
              <div onClick={() => setUpload(true)}>
                <img src={uploadIcon} alt="" id="cloud-upload-icon" />
                Upload New Beat
              </div>
            </div>
            <div id="uploaded-beats">
              {props.userUploaded[0] ? (
                props.userUploaded.map((e, i) => {
                  let excl =
                    e.exclusive_price
                      .split("")
                      .slice(1, e.exclusive_price.length)
                      .join("")
                      .split(",")
                      .join("") * 1;
                  let base =
                    e.base_price
                      .split("")
                      .slice(1, e.base_price.length)
                      .join("") * 1;
                  console.log(excl, base, base + excl);
                  return (
                    <div key={i}>
                      <p>{e.track_name}</p>
                      <p>uploaded on {e.upload_date.split("T")[0]}</p>
                      <p>sold {e.sell_count} times</p>
                      <p>
                        profits: $
                        {e.exclusive
                          ? excl + base * (e.sell_count - 1)
                          : base * e.sell_count}
                      </p>
                    </div>
                  );
                })
              ) : (
                <h3>
                  You haven't uploaded any beats yet. When you do they will show
                  up here!
                </h3>
              )}
            </div>
          </div>
          <div id="purchased-beats">
            <div id="purchased-header">
              <h3>
                <img src={musicLibrary} alt="" id="purchased-icon" /> Purchased
                Beats
              </h3>
            </div>
            {props.userBought[0] ? (
              props.userBought.map((e, i) => {
                return (
                  <Track
                    key={i}
                    purchased={true}
                    producerName={e.username}
                    trackTitle={e.track_name}
                    trackUrl={e.track_url}
                    basePrice={e.base_price}
                    exclusivePrice={e.exclusive_price}
                  />
                );
              })
            ) : (
              <h2>
                Go to <Link to="/Browse">Browse</Link> to purchase your first
                beat!
              </h2>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    loggedIn: reduxState.auth.loggedIn,
    userBought: reduxState.track.userBought,
    userUploaded: reduxState.track.userUploaded,
    userSales: reduxState.track.userSales,
    username: reduxState.auth.username,
    email: reduxState.auth.email
  };
}

export default connect(
  mapStateToProps,
  { getTracksByUser }
)(Dashboard);
