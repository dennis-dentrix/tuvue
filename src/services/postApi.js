import supabase from "./Supabase";

export async function createPost(newPost, id) {
  let query = supabase.from("post");

  if (!id) query = query.insert([{ ...newPost }]);
  if (id) query = query.update({ newPost });

  const { data, error } = await query.select().single();

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

export async function deletePosts(id) {
  const { data, error } = await supabase.from("post").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Post could not be deleted");
  }
  return data;
}
