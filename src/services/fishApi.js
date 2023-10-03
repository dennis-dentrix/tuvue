import supabase from "./Supabase";

export async function getFish() {
  const { data: fishSpicies, error } = await supabase
    .from("fishSpicies")
    .select("*");
  if (error) {
    console.error(error);
    throw new Error("Post could not be created");
  }
  return fishSpicies;
}
