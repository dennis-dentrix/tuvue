import { Common, Aquarium } from "./Categories";
import Cta from "../../ui/Cta";

function Menu() {
  return (
    <div className="h-full">
      <div>
        <Common />

        <Aquarium />

        <Common />
      </div>
    </div>
  );
}

////////////////////////////////
{
  /* FILTER FISH OBJECT ACCORDING TO CATEGORY */
}
{
  /* {fish.map(fish => 
<Common title="Lake fish" fish={fish} key={fish.id}  />
)} */
}

{
  /* {fish.map(fish => 
  <Common title="Lake fish" fish={fish} key={fish.id}  />
)} */
}

export default Menu;
