import { useState } from "react";
import { LuSearch, LuShoppingBasket, LuX } from "react-icons/lu";
import { Button } from "../ui/button";

function Navbtn({ cartCount, onOpenCart, searchTerm, setSearchTerm }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="navbar-rigth flex items-center gap-4 lg:gap-8 relative">
      {searchOpen ? (
        <div className="flex items-center gap-2 border-border rounded-full border px-3 py-2">
          <LuSearch className="w-4 h-4" aria-hidden="true" />
          <input
            autoFocus
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Rechercher un plat..."
            aria-label="Rechercher un plat"
            className="bg-transparent outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            aria-label="Fermer la recherche"
            onClick={() => {
              setSearchTerm("");
              setSearchOpen(false);
            }}
          >
            <LuX className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="cursor-pointer"
          aria-label="Ouvrir la recherche"
          onClick={() => setSearchOpen(true)}
        >
          <LuSearch className="size-5" aria-hidden="true" />
        </button>
      )}

      <button
        type="button"
        className="basket cursor-pointer"
        aria-label="Ouvrir le panier"
        onClick={onOpenCart}
      >
        <span className="dot">{cartCount}</span>
        <LuShoppingBasket className="size-5" aria-hidden="true" />
      </button>

      <Button
        className={
          "py-5 px-8 text-md cursor-pointer shadow-[5px_5px_0] shadow-accent-foreground hover:shadow-accent-foreground active:shadow-none active:translate-y-4"
        }
      >
        Se connecter
      </Button>
    </div>
  );
}

export default Navbtn;