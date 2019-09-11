import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getTracksByUser,
  updateTrack,
  deleteTrack
} from "../../redux/reducers/trackReducer";
import Sidebar from "../Sidebar/Sidebar";
import Track from "../Track/Track";
import Footer from "../Footer/Footer";
import djDashboard from "../../images/djDashboard.png";
import uploadIcon from "../../images/uploadIcon.svg";
import audioWave from "../../images/audioWave.png";
import musicLibrary from "../../images/musicLibrary.png";
import "./Dashboard.scss";
import UploadBeat from "../UploadBeat/UploadBeat";
import EditTrackModal from "../EditTrackModal/EditTrackModal";
import DeleteTrackModal from "../DeleteTrackModal/DeleteTrackModal";
import ProducerStats from "../ProducerStats/ProducerStats";

function Dashboard(props) {
  const [upload, setUpload] = useState(false);
  const [trackInfo, setTrackInfo] = useState({});
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const { loggedIn, getTracksByUser, history } = props;

  useEffect(() => {
    if (loggedIn) {
      getTracksByUser();
    } else {
      history.push("/");
    }
  }, [loggedIn, getTracksByUser, history]);

  const handleEditTrack = track => {
    setTrackInfo(track);
    setEditModal(true);
  };

  const handleDeleteTrack = id => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  return (
    <div id="dashboard">
      <Sidebar />
      <UploadBeat show={upload} onHide={() => setUpload(false)} />
      {trackInfo.track_name && (
        <EditTrackModal
          show={editModal}
          onHide={() => {
            setTrackInfo({});
            setEditModal(false);
          }}
          trackInfo={trackInfo}
        />
      )}
      {deleteId && (
        <DeleteTrackModal
          show={deleteModal}
          onHide={() => setDeleteModal(false)}
          deleteId={deleteId}
        />
      )}
      <div id="user-dashboard">
        <div id="dashboard-header">
          <h1>
            <img src={djDashboard} alt="" id="dj-icon" /> Your Dashboard
          </h1>
          <div id="user-description">
            <h3>
              {props.username} <span className="emphasis"> / </span>{" "}
              {props.email}
            </h3>
          </div>
        </div>
        <div id="producer-stats">
          <ProducerStats />
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
                  return (
                    <div key={i}>
                      <p>{e.track_name}</p>

                      <p>Uploaded on: {e.upload_date.split("T")[0]}</p>

                      <p>Sold: {e.sell_count} times</p>

                      <p>
                        Profits: $
                        {e.exclusive
                          ? excl + base * (e.sell_count - 1)
                          : base * e.sell_count}
                      </p>

                      <button
                        className="db-upload-buttons"
                        onClick={() => handleEditTrack(e)}
                      >
                        Edit
                      </button>

                      <button
                        className="db-upload-buttons"
                        onClick={() => handleDeleteTrack(e.track_id)}
                      >
                        Delete
                      </button>
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
