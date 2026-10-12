import React from "react";
import { food_list } from "../../assets/frontend_assets/assets";

function FoodDisplay({ category }) {
  const filteredFoods =
    category === "All"
      ? food_list
      : food_list.filter((food) => food.category === category);

  return (
    <section
      id="food-display"
      className="mt-10"
      aria-labelledby="food-display-title"
    >
      <h2 id="food-display-title" className="text-2xl font-bold">
        Our dishes
      </h2>

      {filteredFoods.length === 0 ? (
        <p className="mt-6 text-muted-foreground">
          No dishes found in this category.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredFoods.map((food) => (
            <article
              key={food._id}
              className="overflow-hidden rounded-xl border bg-card text-card-foreground"
            >
              <img
                src={food.image}
                alt={food.name}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />

              <div className="w-full space-y-2 p-4 flex flex-col justify-between">
                <h3 className="font-semibold">{food.name}</h3>

                <div className="w-full h-15">
                  <p className="text-sm text-muted-foreground">
                    {food.description}
                  </p>
                </div>

                <p className="font-bold text-xl">
                  {food.price.toFixed(2)} <b className="text-ring">$</b>
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default FoodDisplay;
