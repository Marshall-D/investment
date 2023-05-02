import TopHeader from "./TopHeader";
import "../styles/Header.css";
import HeaderMain from "./HeaderMain";

function Header() {
  return (
    <header className="header">
      <TopHeader/>
      <HeaderMain/>

    </header>
  );
}

export default Header;