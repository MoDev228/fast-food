import { menu_list } from "../../assets/frontend_assets/assets";
import { Button } from "../ui/button";

function ExploreMenu({ category, setCategory }) {
  return (
    <section
      id="explore-menu"
      className="mt-12 flex flex-col gap-5"
      aria-labelledby="explore-menu-title"
    >
      <h2
        id="explore-menu-title"
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Explore our menu
      </h2>

      <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
        Discover our selection of delicious dishes.
      </p>

      <nav aria-label="Food categories" className="w-full overflow-x-auto pb-3">
        <div className="flex min-w-max items-center gap-3">
          <Button
            type="button"
            variant={category === "All" ? "default" : "outline"}
            onClick={() => setCategory("All")}
            aria-pressed={category === "All"}
            className="shrink-0 rounded-full px-5 cursor-pointer"
          >
            All
          </Button>

          {menu_list.map((item) => (
            <Button
              type="button"
              key={item.menu_name}
              variant={category === item.menu_name ? "default" : "outline"}
              onClick={() => setCategory(item.menu_name)}
              aria-pressed={category === item.menu_name}
              className="shrink-0 rounded-full px-5 cursor-pointer"
            >
              {item.menu_name}
            </Button>
          ))}
        </div>
      </nav>
    </section>
  );
}

export default ExploreMenu;
