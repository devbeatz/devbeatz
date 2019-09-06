import React, { useEffect } from "react";
import "./Homepage.scss";
import { Link } from "react-router-dom";
import djImage from "../../images/dj-sound-mixer.jpg";
import SampleTrack from "../SampleTrack/SampleTrack";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import { toggleLoginModal } from "../../redux/reducers/authReducer";
import { getTopFiveTracks } from "../../redux/reducers/trackReducer";
import Sidebar from "../Sidebar/Sidebar";
import BeatCarousel from "../BeatCarousel/BeatCarousel";
import Track from "../Track/Track";

function Homepage(props) {
  useEffect(() => {
    props.getTopFiveTracks();
  }, []);
  console.log(props.top5);
  return (
    <div id="homepage">
      {/* everything on the homepage */}
      <div id="homepage-header">
        {/* the main 'hero' image with logo and register/login buttons */}
        <div id="call-to-action">
          {/* logo, about, and login/register buttons */}
          <div id="homepage-title">BEATZ</div>
          {/* <h3>About</h3> */}
          <div id="homepage-about">
            {/* <p> */}A marketplace dedicated to connecting skilled producers
            with talented vocal artists.
            {/* </p> */}
          </div>
          <div id="login-register-buttons">
            <button onClick={() => props.toggleLoginModal("register")}>
              Register
            </button>
            <button onClick={() => props.toggleLoginModal("login")}>
              Login
            </button>
          </div>
        </div>
        {/* <div id="hero-image">
          {/* homepage artist image with fancy outline */}
        {/* <img src={heroIMG} alt="" />
        </div> */}
      </div>
      <div id="homepage-samples">
        {/* samples section */}
        <div id="homepage-samples-text">Samples</div>
        {/* <div id="samples-box"> */}
        {/* <BeatCarousel top5={props.sampleTop5} /> */}
        <div id="samples">
          {props.top5[0] && (
            <Track
              trackUrl={props.top5[0].track_url}
              basePrice={props.top5[0].base_price}
              exclusivePrice={props.top5[0].exclusive_price}
              trackTitle={props.top5[0].track_name}
              exclusive={props.top5[0].exclusive}
            />
          )}
          <Link to="/Browse">
            <button>Browse Beats</button>
          </Link>
        </div>
        {/* </div> */}
      </div>
      <div id="homepage-directions">
        <div id="directions-header">
          <h2>Lets Get You Started!</h2>
        </div>
        <div id="directions-columns">
          <div id="directions-producer">
            <div id="producer-info">
              <div className="headline">
                <h3>Producers</h3>
              </div>
              <div id="directions-text">
                <p>
                  Login to your dashboard and upload your latest beat. Add a
                  description and set your prices: base for everyone and
                  exclusive for single-buy. Once you begin selling, you'll see
                  which beats have sold the most.
                  {/* To upload a beat that you have created simply login and go to
                  your Dashboard. We make it very easy to set your price and
                  give details about the beat that you created. After you have
                  made some sales remember to check out which beats are being
                  sold the most on your Dashboard. */}
                </p>
              </div>
            </div>
            <button onClick={() => props.toggleLoginModal("login")}>
              Login
            </button>
          </div>
          <div id="directions-artist">
            <div id="artist-info">
              <div className="headline">
                <h3>Vocal Artists</h3>
              </div>
              <div id="directions-text">
                <p>
                  Browse by genre, price, or producer to pick the fire beat for
                  your vocals. Register or login first in order to redownload
                  and keep track of the beats you have purchased. If you do not
                  create an account with us, you can still browse and purchase
                  beats, but you will not be able to keep track or re-download.
                  {/* If you are looking for that beat that feels special we have a
                  great variety of beats to browse. You can search by genre,
                  price, or producer. Remember to register or login first so you
                  can keep track of beats that you purchase. This also allows
                  you to re-download if something happens to your downloaded
                  audio file. */}
                </p>
              </div>
            </div>
            <Link to="/Browse">
              <button>Browse Beats</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    loggedIn: reduxState.auth.loggedIn,
    top5: reduxState.track.top5
  };
}

export default connect(
  mapStateToProps,
  { toggleLoginModal, getTopFiveTracks }
)(Homepage);
