import { useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState("Accueil");

const links = [
    { label: "Accueil", href: "#home" },
    { label: "Menus", href: "#explore-menu" },
    { label: "Application", href: "#mobile-app" },
    { label: "Contact", href: "#contact" },
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
