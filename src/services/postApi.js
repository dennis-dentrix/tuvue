import supabase from "./Supabase";

export async function createPost(newPost) {
  const { data, error } = await supabase
    .from("post")
    .insert([newPost])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Post could not be created");
  }
  return data;
}

export async function getPosts() {
  let { data, error } = await supabase.from("post").select("*");

  if (error) {
    console.error(error);
    throw new Error("Post could not be loaded");
  }
  return data;
}
