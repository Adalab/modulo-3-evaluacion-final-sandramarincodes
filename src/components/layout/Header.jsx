import logo from "../../assets/harry-potter-logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="harry potter logo" className="logo"/>
    </header>
  );
}

export default Header;
