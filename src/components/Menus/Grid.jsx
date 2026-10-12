import FoodDisplay from "./FoodDisplay";

function Grid({ category, cartItems, addToCart, removeFromCart, searchTerm }) {
  return (
    <section className="grid">
      <FoodDisplay
        category={category}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        searchTerm={searchTerm}
      />
    </section>
  );
}

export default Grid;