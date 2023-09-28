import supabase from "./Supabase";

export async function getPosts() {
  let { data, error } = await supabase.from("post").select("*");

  if (error) {
    console.error(error);
    throw new Error("Post could not be loaded");
  }
  return data;
}
