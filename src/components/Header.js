import TopHeader from "./TopHeader";
import "../styles/Header.css";
import HeaderMain from "./HeaderMain";
import CarouselHandler from "./CarouselHandler";

function Header() {
  return (
    <header className="header">
      <TopHeader/>
      <HeaderMain/>
      <div style={{paddingTop:"2em"}}>
      <CarouselHandler/>
      </div>

    </header>
  );
}

export default Header;