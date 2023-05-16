import "../styles/pages.css";
import { Link } from "react-router-dom";

function Theboringcompany() {
    return (
      <div>
        {/* <div style={{ width: "100%", display: "flex", flexDirection: "column" }}> */}
        <div className="adjust_view">
          <div>
            <img
              src="
              https://images.squarespace-cdn.com/content/v1/6063b0835f68896079d7d643/1617556988937-1YD9MUPINA2MX9D9KAE1/20210108_185830.jpg?format=2500w                    "
              className="div_container"
            />
          </div>
          <div className="div_container">
            <div className="div_text">
              <div class="row">
                <div class="hidden-sm hidden-md col-7"></div>
                <div class="col-12-sm col-8-md md-center col-5">
                  <h2>INVEST IN THE BORING COMPANY </h2>
                  <p>
                    To solve the problem of soul-destroying traffic, roads must
                    go 3D, which means either flying cars or tunnels are needed.
                    Unlike flying cars, tunnels are weatherproof, out of sight,
                    and won't fall on your head. Tunnels minimize usage of
                    valuable surface land and do not conflict with existing
                    transportation systems. A large network of tunnels can
                    alleviate congestion in any city; no matter how large a city
                    grows, more levels of tunnels can be added.
                  </p>
                  <p>
                    Invest as low as $600 and be a part of this great vision and
                    opportunity to get rich and make some money.
                  </p>
                  <div className="link-container">
                    <Link
                      to="https://form.jotform.com/231312771736252"
                      className="invest_text"
                      style={{zIndex:"200"}}
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
              https://images.squarespace-cdn.com/content/v1/6063b0835f68896079d7d643/1617516361165-UQK7W8R80GXTQQ1YBUP9/car%25252Bin%25252Btunnel.jpg?format=2500w              
              "
              className="div_container"
            />
          </div>
          <div className="div_container">
            <div className="div_text">
              <div class="row">
                <div class="hidden-sm hidden-md col-7"></div>
                <div class="col-12-sm col-8-md md-center col-5">
                  <h2>INVEST IN THE BORING COMPANY </h2>
                  <p>
                    Loop is an all-electric, zero-emissions, underground public
                    transportation system in which passengers are transported
                    directly to their final destination with no stops along the
                    way. Located at the Las Vegas Convention Center, LVCC Loop
                    is the first commercially operating Loop system.
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
              https://images.squarespace-cdn.com/content/v1/6063b0835f68896079d7d643/1618426023431-JY0VJ7XCQUYY76QO9D1H/9af6c204fe596ec3bfe3cdeeb7294f56.jpg?format=2500w              
              "
              className="div_container"
            />
          </div>
          <div className="div_container">
            <div className="div_text">
              <div class="row">
                <div class="hidden-sm hidden-md col-7"></div>
                <div class="col-12-sm col-8-md md-center col-5">
                  <h2>INVEST IN THE BORING COMPANY </h2>
                  <p>
                    Prufrock is designed to construct mega-infrastructure
                    projects in a matter of weeks instead of years Prufrock is
                    designed to tunnel at a speed of 1 mile per week, which is 6
                    times faster than The Boring Company’s previous generation
                    TBM (Godot-Plus). This is still 4-5 times slower than a
                    garden snail...but Prufrock is catching up!
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

      // </div>
    );
  }
  
  export default Theboringcompany;