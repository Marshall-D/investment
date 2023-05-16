
import { Link } from "react-router-dom";
import "../styles/Home.css";
  function Home() {
    return (
      <div>
        <div style={{position:"relative"}}>
          <img
            src="
            https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD          "
            className="bg_img"
          />
          <div className="text-on-image">
            <p style={{ fontSize: "0.6em" }}>
              {" "}
              Invest and get returns as early as a week{" "}
            </p>
            <Link to="/tesla">

            <p className="text-on-image_div"> Find out More </p></Link>
            <Link to="https://form.jotform.com/231312771736252" >
            <h3 className="text-on-image_div"> Invest in Cars </h3>

            </Link>
          </div>
        </div>
        <div style={{position:"relative"}}>
          <img
            src="
            https://sxcontent9668.azureedge.us/cms-assets/assets/Haven1_Hero_5_2600x1400_a23f540f5f.jpg            "
            className="bg_img"
          />
          <div className="text-on-image2">
            <p style={{ fontSize: "0.6em" }}>
              {" "}
              Invest and get returns as early as a week{" "}
            </p>
            <Link to="/spacex">

            <p className="text-on-image_div2"> Find out More </p>
            </Link>
            <Link to="https://form.jotform.com/231312771736252" >
            <h3 className="text-on-image_div2"> Invest in Rockets </h3>

            </Link>
          </div>
        </div>

        <div style={{position:"relative"}}>
          <img
            src="
          https://d33wubrfki0l68.cloudfront.net/2ee43d22ee90a88ffe3a36a6ace4c7f36835b52e/fe18d/images/pages/green-mobile-hero.png          "
            className="bg_img"
          />
          <div className="text-on-image3">
            <p style={{ fontSize: "0.6em" }}>
              {" "}
              Invest and get returns as early as a week{" "}
            </p>
            <Link to="/openai">
            <p className="text-on-image_div3"> Find out More </p>
            </Link>
         
            <Link to="https://form.jotform.com/231312771736252" >
            <h3 className="text-on-image_div3">
              {" "}
              Invest  AI{" "}
            </h3>
            </Link>
          </div>
        </div>
        <div style={{position:"relative"}}>
          <img
            src="
          https://images.squarespace-cdn.com/content/v1/6063b0835f68896079d7d643/1617908516380-MGDSF238F46LA8HAN8ZQ/LVCC%2BLoop%2BHero%2B2_April%2B2021.jpg?format=2500w"
            className="bg_img"
          />
          <div className="text-on-image4">
            <p style={{ fontSize: "0.6em" }}>
              {" "}
              Invest and get returns as early as a week{" "}
            </p>
            <Link to="/theboringcompany">

            <p className="text-on-image_div4"> Find out More </p>
            </Link>
           
            <Link to="https://form.jotform.com/231312771736252" >
            <h3 className="text-on-image_div4">
              {" "}
              Invest in The Boring Company{" "}
            </h3>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;