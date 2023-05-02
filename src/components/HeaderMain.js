import "../styles/Header.css";

function HeaderMain() {
  return (
    <div className="container">
      <div className="main_header_content">
        <div className="main_menu" style={{paddingLeft: "0px", paddingRight: "0em"}}>
          <div
            class="slide-out-widget-area-toggle mobile-icon slide-out-from-right-hover"
            data-icon-animation="simple-transform"
          >
            <div>
              {" "}
              <a
                href="#sidewidgetarea"
                aria-label="Navigation Menu"
                aria-expanded="false"
                class="closed"
              >
                <span aria-hidden="true">
                  {" "}
                  <i class="lines-button x2">
                    {" "}
                    <i class="lines"></i>{" "}
                  </i>{" "}
                </span>
              </a>
            </div>
          </div>

          <nav 
        //   style={{visibility: "visible"}}
          >
            {/* <ul class="sf-menu sf-js-enabled sf-arrows">
              <li class="no-menu-assigned">
                <a href="#">No menu assigned</a>
              </li>{" "}
            </ul> */}

            {/* <ul class="buttons sf-menu" data-user-set-ocm="1">
              <li
                class="slide-out-widget-area-toggle"
                data-icon-animation="simple-transform"
                data-custom-color="false"
              >
                <div>
                  {" "}
                  <a
                    href="#sidewidgetarea"
                    aria-label="Navigation Menu"
                    aria-expanded="false"
                    class="closed"
                  >
                    {" "}
                    <span class="screen-reader-text">Menu</span>
                    <span aria-hidden="true">
                      {" "}
                      <i class="lines-button x2">
                        {" "}
                        <i class="lines"></i>{" "}
                      </i>{" "}
                    </span>{" "}
                  </a>{" "}
                </div>
              </li>
            </ul> */}
          </nav>

          {/* <div class="logo-spacing" data-using-image="true">
            <img
              class="hidden-logo"
              alt="BANK OF AFRICA"
              width="250"
              height="43"
              src="https://bank-of-africa.net/wp-content/uploads/2020/11/Logo_Last_Gen.jpg"
            />
          </div> */}
        </div> 

        {/* <!--/span_9--> */}

        <div className="logo">
          <a
          className="logo_a"
            href="https://bank-of-africa.net/en/home/"
            data-supplied-ml-starting-dark="false"
            data-supplied-ml-starting="false"
            data-supplied-ml="false"
          >
            <img
              class="stnd skip-lazy dark-version"
              width="250"
              height="43"
              alt="BANK OF AFRICA"
              src="https://bank-of-africa.net/wp-content/uploads/2020/11/Logo_Last_Gen.jpg"
            />{" "}
          </a>
        </div>
        {/* <!--/span_3--> */}

        <div className="main_header_right">
          <a
            href="https://boaweb.of.africa/users/authentication"
            target="_blank"
            className="main_header_right_a"
          >
            My online banking
          </a>
          <a
            href="https://bank-of-africa.net/en/work-at-boa"
            className="main_header_right_a-bl"
          >
            Join BOA
          </a>
        </div>
      </div>
      {/* <!--/row--> */}
    </div>
  );
}

export default HeaderMain;

