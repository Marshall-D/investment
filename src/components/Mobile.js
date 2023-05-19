import { Link } from 'react-router-dom';
import "../styles/Mobile.css";
// import "../styles/animation.css";

function Mobile() {
  
const reload = () =>{
  window.location.reload(false);


}
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

              <ul id="menu" onClick={reload}>
                <li  >
                <Link  to="/"> Home</Link>
                </li>
                <li >
            
                <Link  to="/spacex">Rockets  </Link>
                </li>
                <li>
                <Link to="/tesla">Cars</Link>
                </li>
                <li>
                <Link to="/openai">AI</Link>
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
            <p className="texts"> My Investments</p>
          </div>
        </div>
        
      </div>
    );
  }
  export default Mobile;