import { Link } from 'react-router-dom';
import "../styles/Mobile.css";
// import "../styles/animation.css";

function Mobile() {
    return (
      <div>

        <div className="content2">
          {/* <div 
      className="phone"
      > */}
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>

              <ul id="menu">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/spacex">SpaceX</Link>
                </li>
                <li>
                <Link to="/tesla">Tesla</Link>
                </li>
                <li>
                <Link to="/openai">Openai & NeuraLink</Link>
                </li>
              
                <li>
                <Link to="/theboringcompany">Theboringcompany</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                <li>
                <Link to="https://form.jotform.com/231312771736252">Invest</Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* </div> */}
          <div >
            <p className="texts"> Elon Investments</p>
          </div>
        </div>
        
      </div>
    );
  }
  export default Mobile;