import { useState } from "react";
import Hero from "./Hero";
import ExploreMenu from "./Menus/ExploreMenu";
import Grid from "./Menus/Grid";

function Main() {
    const [category, setCategory] = useState("All");

    return (
        <main className="container w-full min-h-screen">
            <Hero />
            <ExploreMenu category={category} setCategory={setCategory} />
            <Grid category={category} />
        </main>
    )
}

export default Main;