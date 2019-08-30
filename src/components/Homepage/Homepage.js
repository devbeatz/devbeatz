import React from "react";
import "./Homepage.scss";
import djImage from "../../images/dj-sound-mixer.jpg";
import SampleTrack from "../SampleTrack/SampleTrack";
import Footer from "../Footer/Footer";

function Homepage(props) {
  return (
    <div id="homepage">
      {/* everything on the homepage */}
      <div id="homepage-header">
        {/* the main 'hero' image with logo and register/login buttons */}
        <div id="call-to-action">
          {/* logo, about, and login/register buttons */}
          <h1>BEATZ</h1>
          {/* <h3>About</h3> */}
          <p>
            Here at BEATZ Marketplace, we are dedicated to connecting skilled
            producers with talented vocal artists. Start paroozing now to find
            that perfect beat, or login to go to your Dashboard and upload a
            beat that you've created.
          </p>
          <div id="login-register-buttons">
            <button>Register</button>
            <button>Login</button>
          </div>
        </div>
        <div id="hero-image">
          {/* homepage artist image with fancy outline */}
          <img src={djImage} alt="" />
        </div>
      </div>
      <div id="homepage-samples">
        {/* samples section */}
        <h2>Samples</h2>
        <div id="samples">
          <SampleTrack coverImage={djImage} />
          <SampleTrack coverImage={djImage} />
          <SampleTrack coverImage={djImage} />
          <SampleTrack coverImage={djImage} />
          <SampleTrack coverImage={djImage} />
        </div>
      </div>
      <div id="homepage-directions">
        <h2>Lets Get You Started!</h2>
        <div id="directions-columns">
          <div id="directions-producer">
            <div id="producer-info">
              <h3>Producers</h3>
              <p>
                To upload a beat that you have created simply login and go to
                your Dashboard. We make it very easy to set your price and give
                details about the beat that you created. After you have made
                some sales remember to check out which beats are being sold the
                most on your Dashboard.
              </p>
            </div>
            <button>Login</button>
          </div>
          <div id="directions-artist">
            <div id="artist-info">
              <h3>Vocal Artists</h3>
              <p>
                If you are looking for that beat that feels special we have a
                great variety of beats to browse. You can search by genre,
                price, or producer. Remember to register or login first so you
                can keep track of beats that you purchase. This also allows you
                to re-download if something happens to your downloaded audio
                file.
              </p>
            </div>
            <button>Browse Beats</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
