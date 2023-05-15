
import "../styles/pages.css";
import { Link } from "react-router-dom";

  function Spacex() {
    return (
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <div className="adjust_view">
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
                    STARSHIP SERVICE TO EARTH ORBIT, MOON, MARS AND
                    BEYOND.ON-ORBIT REFILLING. Starship leverages tanker
                    vehicles (essentially the Starship spacecraft minus the
                    windows) to refill the Starship spacecraft in low-Earth
                    orbit prior to departing for Mars. Refilling on-orbit
                    enables the transport of up to 100 tons all the way to Mars.
                    And if the tanker ship has high reuse capability, the
                    primary cost is just that of the oxygen and methane, which
                    is extremely low.
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
                    Falcon 9 is a reusable, two-stage rocket designed and
                    manufactured by SpaceX for the reliable and safe transport
                    of people and payloads into Earth orbit and beyond. Falcon 9
                    is the world’s first orbital class reusable rocket.
                    Reusability allows SpaceX to refly the most expensive parts
                    of the rocket, which in turn drives down the cost of space
                    access.
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
                    FALCON 9 FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT.222
                    TOTAL LAUNCHES, 180 TOTAL LANDINGS, 157 TOTAL REFLIGHTS.
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
  
  export default Spacex;