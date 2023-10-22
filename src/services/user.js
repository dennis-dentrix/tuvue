import supabase from "./Supabase";

export async function createUser({
  email,
  password,
  firstName,
  lastName,
  location,
}) {
  const { data: userData, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        firstName,
        lastName,
        location,
      },
    },
  });

  return userData;
}
