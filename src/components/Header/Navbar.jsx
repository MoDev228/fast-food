import { useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const links = [
    { label: "Home", href: "#home" },
    { label: "Menus", href: "#explore-menu" },
    { label: "Mobile App", href: "#mobile-app" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <ul className="navList flex items-center gap-8">
        {links.map((link) => (
          <li className="navLink" key={link.label}>
            <a
              href={link.href}
              className={activeLink === link.label ? "active" : ""}
              onClick={() => setActiveLink(link.label)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
