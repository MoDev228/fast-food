import { food_list } from "../../assets/frontend_assets/food";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Button } from "../ui/button";

function FoodDisplay({
  category,
  cartItems,
  addToCart,
  removeFromCart,
  searchTerm,
}) {
  const query = searchTerm.trim().toLowerCase();

  const filteredFoods = food_list.filter(
    (food) =>
      (category === "All" || food.category === category) &&
      (query === "" || food.name.toLowerCase().includes(query))
  );

  return (
    <section
      id="food-display"
      className="mt-10"
      aria-labelledby="food-display-title"
    >
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <h2 id="food-display-title" className="text-2xl font-bold">
          Nos plats
        </h2>
        {query && (
          <p className="text-sm text-muted-foreground">
            Résultats pour «&nbsp;{searchTerm.trim()}&nbsp;» —{" "}
            {filteredFoods.length} plat{filteredFoods.length > 1 ? "s" : ""}
          </p>
        )}
      </div>

      {filteredFoods.length === 0 ? (
        <p className="mt-6 text-muted-foreground">
          Aucun plat trouvé dans cette catégorie.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredFoods.map((food) => (
            <article
              key={food._id}
              className="overflow-hidden rounded-xl border bg-card text-card-foreground flex flex-col"
            >
              <div className="relative">
                <img
                  src={food.image}
                  alt={food.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />

                {cartItems[food._id] ? (
                  <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-background px-2 py-1 shadow-md border border-border">
                    <button
                      type="button"
                      aria-label={`Retirer ${food.name} du panier`}
                      className="cursor-pointer"
                      onClick={() => removeFromCart(food._id)}
                    >
                      <LuMinus className="w-4 h-4 text-destructive" aria-hidden="true" />
                    </button>
                    <span className="min-w-5 text-center font-semibold">
                      {cartItems[food._id]}
                    </span>
                    <button
                      type="button"
                      aria-label={`Ajouter ${food.name} au panier`}
                      className="cursor-pointer"
                      onClick={() => addToCart(food._id)}
                    >
                      <LuPlus className="w-4 h-4 text-primary" aria-hidden="true" />
                    </button>
                  </div>
                ) : (
                  <Button
                    type="button"
                    aria-label={`Ajouter ${food.name} au panier`}
                    onClick={() => addToCart(food._id)}
                    className="absolute right-3 top-3 size-9 rounded-full bg-background p-0 shadow-md hover:bg-muted"
                  >
                    <LuPlus className="size-5 text-foreground" aria-hidden="true" />
                  </Button>
                )}
              </div>

              <div className="space-y-2 p-4 flex-1">
                <h3 className="font-semibold">{food.name}</h3>

                <p className="text-sm text-muted-foreground">
                  {food.description}
                </p>

                <p className="font-bold">{food.price.toFixed(2)}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default FoodDisplay;