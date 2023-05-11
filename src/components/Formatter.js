
import Mobile from './Mobile';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'


function Formatter() {
  return (
    <body >
      <Mobile/>
      <Outlet />
      <div style={{backgroundColor:"white"}}>
      <Footer/>

      </div>

    </body>
  );
}

export default Formatter;
