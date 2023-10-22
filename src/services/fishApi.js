import supabase from "./Supabase";

export async function getFish() {
  const { data: fishSpicies, error } = await supabase
    .from("fishSpicies")
    .select("*");
  if (error) {
    console.error(error);
    throw new Error("Could not get the fish data");
  }
  return fishSpicies;
}
