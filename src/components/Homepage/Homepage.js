import React from "react";
import "./Homepage.scss";
import djImage from "../../images/dj-sound-mixer.jpg";
import SampleTrack from "../SampleTrack/SampleTrack";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import { toggleLoginModal } from "../../redux/reducers/authReducer";

function Homepage(props) {
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
            <p>
              A marketplace dedicated to connecting skilled producers with
              talented vocal artists.
            </p>
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
        <div id="samples">
          <SampleTrack coverImage={djImage} />
          <SampleTrack coverImage={djImage} />
          <SampleTrack coverImage={djImage} />
          <SampleTrack coverImage={djImage} />
          <SampleTrack coverImage={djImage} />
<<<<<<< HEAD
          <div id="samples-browse">Browse Tracks</div>
=======
          <button>Browse Beats</button>
>>>>>>> bd88e5cadd0d50dd3a1fb3e6dde7bf5dd223a66f
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
              <h3>Producers</h3>
              <div id="directions-text">
                <p>
                  To upload a beat that you have created simply login and go to
                  your Dashboard. We make it very easy to set your price and
                  give details about the beat that you created. After you have
                  made some sales remember to check out which beats are being
                  sold the most on your Dashboard.
                </p>
              </div>
            </div>
            <button onClick={() => props.toggleLoginModal("login")}>
              Login
            </button>
          </div>
          <div id="directions-artist">
            <div id="artist-info">
              <h3>Vocal Artists</h3>
              <div id="directions-text">
                <p>
                  If you are looking for that beat that feels special we have a
                  great variety of beats to browse. You can search by genre,
                  price, or producer. Remember to register or login first so you
                  can keep track of beats that you purchase. This also allows
                  you to re-download if something happens to your downloaded
                  audio file.
                </p>
              </div>
            </div>
            <button>Browse Beats</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    // loggedIn: reduxState.auth.loggedIn
  };
}

export default connect(
  mapStateToProps,
  { toggleLoginModal }
)(Homepage);
