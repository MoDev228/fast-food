import { assets } from "@/assets/frontend_assets/assets";
import { Button } from "../ui/button";

function Navbtn() {
  return (
    <div className="navbar-rigth flex items-center gap-8 relative">
      <div className="search cursor-not-allowed">
        <img src={assets.search_icon} alt="Search Icon" />
      </div>

      <div className="basket cursor-not-allowed">
        <div className="dot"></div>
        <img src={assets.basket_icon} alt="Basket" />
      </div>

      <Button
        className={
          "py-5 px-8 text-md cursor-pointer shadow-[5px_5px_0] shadow-accent-foreground hover:shadow-accent-foreground active:shadow-none active:translate-y-4"
        }
      >
        Se connect
      </Button>
    </div>
  );
}

export default Navbtn;
