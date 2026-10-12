import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (id) =>
    setCartItems((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

  const removeFromCart = (id) =>
    setCartItems((prev) => {
      const next = { ...prev };
      next[id] = (next[id] || 0) - 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });

  const totalCartItems = Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);

  return (
    <>
      <Header
        cartCount={totalCartItems}
        onOpenCart={() => setShowCart(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Main
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        searchTerm={searchTerm}
      />
      {showCart && (
        <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          onClose={() => setShowCart(false)}
        />
      )}
      <Footer />
    </>
  );
}

export default App;