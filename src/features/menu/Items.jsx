import ItemCard from "./ItemCard";

function Items() {
  return (
    <ul className="pt-10 flex justify-center space-x-11 items-center overflow-x-scroll">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </ul>
  );
}

export default Items;
