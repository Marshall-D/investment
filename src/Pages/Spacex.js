
import "../styles/pages.css";
import { Link } from "react-router-dom";

  function Spacex() {
    return (
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <div>
          <div>
            <img
              src="
              https://www.spacex.com/static/images/falcon-9/F9_3_mobile.jpg"
              className="div_container"
            />
          </div>
          <div className="div_container">
            <div className="div_text">
              <div class="row">
                <div class="hidden-sm hidden-md col-7"></div>
                <div class="col-12-sm col-8-md md-center col-5">
                  <h2>INVEST IN SPACEX </h2>
                  <p>
                    With Starlink, users can engage in activities that
                    historically have not been possible with satellite internet.
                  </p>
                  <p>
                    Starlink’s high-speed, low-latency service is made possible
                    via the world’s largest constellation of highly advanced
                    satellites operating in a low orbit around the Earth.
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
        <div>
          <div>
            <img
              src="
              https://www.spacex.com/static/images/falcon-9/F9_2_mobile.jpg
              
              "
              className="div_container"
            />
          </div>
          <div className="div_container">
            <div className="div_text">
              <div class="row">
                <div class="hidden-sm hidden-md col-7"></div>
                <div class="col-12-sm col-8-md md-center col-5">
                  <h2>INVEST IN SPACEX </h2>
                  <p>
                    With Starlink, users can engage in activities that
                    historically have not been possible with satellite internet.
                  </p>
                  <p>
                    Starlink’s high-speed, low-latency service is made possible
                    via the world’s largest constellation of highly advanced
                    satellites operating in a low orbit around the Earth.
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

        <div>
          <div>
            <img
              src="
              https://www.spacex.com/static/images/falcon-9/F9_5_mobile.jpg
              
              "
              className="div_container"
            />
          </div>
          <div className="div_container">
            <div className="div_text">
              <div class="row">
                <div class="hidden-sm hidden-md col-7"></div>
                <div class="col-12-sm col-8-md md-center col-5">
                  <h2>INVEST IN SPACEX </h2>
                  <p>
                    With Starlink, users can engage in activities that
                    historically have not been possible with satellite internet.
                  </p>
                  <p>
                    Starlink’s high-speed, low-latency service is made possible
                    via the world’s largest constellation of highly advanced
                    satellites operating in a low orbit around the Earth.
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
  
  export default Spacex;