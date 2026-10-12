import { food_list } from "../assets/frontend_assets/food";
import { LuMinus, LuPlus, LuX } from "react-icons/lu";
import { Button } from "./ui/button";

function Cart({ cartItems, addToCart, removeFromCart, onClose }) {
  const items = food_list.filter((food) => (cartItems[food._id] || 0) > 0);
  const totalAmount = items.reduce(
    (sum, food) => sum + cartItems[food._id] * food.price,
    0
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-label="Panier"
      onClick={onClose}
    >
      <aside
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Mon panier</h2>
          <button
            type="button"
            aria-label="Fermer le panier"
            className="cursor-pointer"
            onClick={onClose}
          >
            <LuX className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="mt-6 text-center text-muted-foreground">
            Votre panier est vide.
          </p>
        ) : (
          <ul className="flex-1 space-y-4 overflow-y-auto">
            {items.map((food) => {
              const qty = cartItems[food._id];
              return (
                <li
                  key={food._id}
                  className="flex items-center gap-4 rounded-xl border border-border p-3"
                >
                  <img
                    src={food.image}
                    alt={food.name}
                    loading="lazy"
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{food.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {food.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-border px-2 py-1">
                    <button
                      type="button"
                      aria-label={`Retirer ${food.name}`}
                      className="cursor-pointer"
                      onClick={() => removeFromCart(food._id)}
                    >
                      <LuMinus className="w-4 h-4 text-destructive" aria-hidden="true" />
                    </button>
                    <span className="min-w-5 text-center font-semibold">
                      {qty}
                    </span>
                    <button
                      type="button"
                      aria-label={`Ajouter ${food.name}`}
                      className="cursor-pointer"
                      onClick={() => addToCart(food._id)}
                    >
                      <LuPlus className="w-4 h-4 text-primary" aria-hidden="true" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        <div className="mt-4 border-t border-border pt-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-lg">Total</span>
            <span className="text-lg font-bold">{totalAmount.toFixed(2)}</span>
          </div>
          <Button
            type="button"
            disabled={items.length === 0}
            className="w-full py-5 text-md cursor-pointer disabled:cursor-not-allowed"
          >
            Procéder au paiement
          </Button>
        </div>
      </aside>
    </div>
  );
}

export default Cart;