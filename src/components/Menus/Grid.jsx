import FoodDisplay from "./FoodDisplay";

function Grid({ category }) {
  return (
    <section className="grid">
      <FoodDisplay category={category} />
    </section>
  );
}

export default Grid;
