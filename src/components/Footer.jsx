import { assets } from "../assets/frontend_assets/images";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const currentYear = new Date().getFullYear();

function Footer() {
  const socials = [
    { label: "Facebook", Icon: FaFacebookF },
    { label: "Twitter", Icon: FaTwitter },
    { label: "LinkedIn", Icon: FaLinkedinIn },
  ];

  return (
    <footer className="mt-24 border-t border-border bg-muted/50">
      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <img src={assets.logo} alt="FastFood" className="w-40" />
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            Des plats savoureux livrés rapidement, directement chez vous.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full bg-background shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Entreprise">
          <h3 className="mb-4 font-semibold">Entreprise</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#home" className="transition-colors hover:text-foreground">Accueil</a></li>
            <li><a href="#food-display" className="transition-colors hover:text-foreground">Menu</a></li>
            <li><a href="#mobile-app" className="transition-colors hover:text-foreground">Application</a></li>
            <li><a href="#contact" className="transition-colors hover:text-foreground">Contact</a></li>
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 font-semibold">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>123 Avenue des Saveurs, Gbadago</li>
            <li>modev228@gmail.com</li>
            <li>+228 71 50 16 60</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Téléchargez l'app</h3>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="#"
              aria-label="Télécharger sur l'App Store"
              className="transition-transform hover:scale-105"
            >
              <img src={assets.app_store} alt="App Store" className="w-32 rounded-lg" />
            </a>
            <a
              href="#"
              aria-label="Télécharger sur Google Play"
              className="transition-transform hover:scale-105"
            >
              <img src={assets.play_store} alt="Google Play" className="w-32 rounded-lg" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © {currentYear} FastFood. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;