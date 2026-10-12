import Logo from "./Logo";
import Navbar from "./Navbar";
import Navbtn from "./Navbtn";

function Header() {
  return (
    <header
      className="header flex justify-between items-center py-4 border-b-accent-foreground bg-background border-b-1 sticky top-0 left-0 z-50"
    >
      <Logo />
      <Navbar />
      <Navbtn />
    </header>
  );
}

export default Header;
