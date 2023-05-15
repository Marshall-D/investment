
import Mobile from './Mobile';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'
import FooterMain from './FooterMain';


function Formatter() {
  return (
    <body >
      <Mobile/>
      <Outlet />
      <div style={{backgroundColor:"white"}}>
      <Footer/>

      </div>
      <FooterMain/>

    </body>
  );
}

export default Formatter;
