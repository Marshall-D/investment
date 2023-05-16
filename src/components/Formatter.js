
import Mobile from './Mobile';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'
import FooterMain from './FooterMain';


function Formatter() {
  return (
    <body >
      <div>
      <Mobile/>

      </div>
     <div style={{paddingTop:"200px"}}>
     <Outlet />
      </div>
      <div style={{backgroundColor:"white"}}>
      <Footer/>

      </div>
      <FooterMain/>

    </body>
  );
}

export default Formatter;
