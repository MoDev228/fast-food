import { assets } from "@/assets/frontend_assets/images";

function Logo() {
  return (
    <div className="logo">
      <img src={assets.logo} alt="Logo" className="w-40" />
    </div>
  );
}

export default Logo;
