import { useState } from "react";
import Hero from "./Hero";
import ExploreMenu from "./Menus/ExploreMenu";
import Grid from "./Menus/Grid";
import MobileApp from "./MobileApp";
import Contact from "./Contact";

function Main({ cartItems, addToCart, removeFromCart, searchTerm }) {
    const [category, setCategory] = useState("All");

    return (
        <main className="container w-full min-h-screen">
            <Hero />
            <ExploreMenu category={category} setCategory={setCategory} />
            <Grid
                category={category}
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                searchTerm={searchTerm}
            />
            <MobileApp />
            <Contact />
        </main>
    )
}

export default Main;