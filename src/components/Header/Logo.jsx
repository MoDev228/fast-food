import { assets } from "@/assets/admin_assets/assets";

function Logo() {
  return (
    <div className="logo">
      <img src={assets.logo} alt="Logo" className="w-40" />
    </div>
  );
}

export default Logo;
