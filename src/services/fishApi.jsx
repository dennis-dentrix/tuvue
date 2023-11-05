import PageNotFound from "../pages/PageNotFound";
import supabase from "./Supabase";

export async function getFish() {
  const { data: fishSpicies, error } = await supabase
    .from("fishSpicies")
    .select("*");
  if (error) {
    <h1>{error.message}</h1>;
    console.error(error.message);
    throw new Error("Could not get the fish data");
  }
  return fishSpicies;
}
