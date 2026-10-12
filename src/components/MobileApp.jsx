import { assets } from "../assets/frontend_assets/images";
import { LuPackage, LuStar } from "react-icons/lu";

function MobileApp() {
  return (
    <section
      id="mobile-app"
      className="mt-24 mb-24 flex flex-col-reverse items-center gap-10 lg:flex-row"
    >
      <div className="flex-1">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Mobile App
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Téléchargez notre application
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
          Commandez vos plats préférés n'importe où, n'importe quand.
          Disponible sur iOS et Android.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#"
            aria-label="Télécharger sur l'App Store"
            className="transition-transform hover:scale-105"
          >
            <img
              src={assets.app_store}
              alt="App Store"
              className="w-36 rounded-lg"
            />
          </a>
          <a
            href="#"
            aria-label="Télécharger sur Google Play"
            className="transition-transform hover:scale-105"
          >
            <img
              src={assets.play_store}
              alt="Google Play"
              className="w-36 rounded-lg"
            />
          </a>
        </div>
        <div className="mt-10 flex items-center gap-6">
          <span className="flex items-center gap-2">
            <LuPackage className="w-6 h-6 text-primary" aria-hidden="true" />
            Livraison rapide
          </span>
          <span className="flex items-center gap-2">
            <LuStar className="w-6 h-6 text-primary" aria-hidden="true" />
            Paiement sécurisé
          </span>
        </div>
      </div>

      <div className="flex-1">
        <img
          src={assets.header_img}
          alt="Aperçu de l'application"
          className="w-full rounded-2xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}

export default MobileApp;