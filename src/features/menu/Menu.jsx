import { Common, Aquarium } from "./Categories";
import Cta from "../../ui/Cta";
function Menu() {
  return (
    <div>
      <Cta />
      {/* FILTER FISH OBJECT ACCORDING TO CATEGORY */}
      {/* {fish.map(fish => 
      <Common title="Lake fish" fish={fish} key={fish.id}  />
        )} */}
      <Common />
      <Aquarium />

      {/* {fish.map(fish => 
      <Common title="Lake fish" fish={fish} key={fish.id}  />
        )} */}
      <Common />
    </div>
  );
}

export default Menu;
