import "../styles/pages.css";
import { Link } from "react-router-dom";

function Tesla() {
    return (
      <div>
        <div className="adjust_view">
          <div>
            <img
              src="
              https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Model-S-homepage-desktop                
               "
              className="div_container"
            />
          </div>
          <div className="div_container">
            <div className="div_text">
              <div class="row">
                <div class="hidden-sm hidden-md col-7"></div>
                <div class="col-12-sm col-8-md md-center col-5">
                  <h2>INVEST IN CARS </h2>
                  <p>
                    Interior of the Future.A 17” touchscreen with left-right
                    tilt offers 2200 x 1300 resolution, true colors and
                    exceptional responsiveness for gaming, movies and more. A
                    17” touchscreen with left-right tilt offers 2200 x 1300
                    resolution, true colors and exceptional responsiveness for
                    gaming, movies and more.
                  </p>
                  <p>
                    Invest as low as $600 and be a part of this great vision and
                    opportunity to get rich and make some money.
                  </p>
                  <div className="link-container">
                    <Link
                      to="https://form.jotform.com/231312771736252"
                      className="invest_text"
                    >
                      INVEST NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="adjust_view">
          <div>
            <img
              src="
              https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD          "
              className="div_container"
            />
          </div>
          <div className="div_container">
            <div className="div_text">
              <div class="row">
                <div class="hidden-sm hidden-md col-7"></div>
                <div class="col-12-sm col-8-md md-center col-5">
                  <h2>INVEST IN CARS </h2>
                  <p>
                    Model S Plaid has the quickest acceleration of any vehicle
                    in production. Updated battery architecture for all Model S
                    trims enables back-to-back track runs without performance
                    degradation. Model S platforms unite powertrain and battery
                    technologies for unrivaled performance, range and
                    efficiency. New module and pack thermal architecture allows
                    faster charging and gives you more power and endurance in
                    all conditions.
                  </p>
                  <p>
                    Invest as low as $600 and be a part of this great vision and
                    opportunity to get rich and make some money.
                  </p>
                  <div className="link-container">
                    <Link
                      to="https://form.jotform.com/231312771736252"
                      className="invest_text"
                    >
                      INVEST NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Tesla;