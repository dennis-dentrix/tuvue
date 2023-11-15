import supabase from "./Supabase";

export async function createUser({
  email,
  password,
  firstName,
  lastName,
  location,
  phoneNumber,
}) {
  const { data: userData, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        firstName,
        lastName,
        phoneNumber,
        location,
      },
    },
  });

  if (error) {
    console.error(error);
    throw new Error("Account could not be created.");
  }

  return userData;
}

export async function userLogin() {
  const { data: userData, error } = await supabase.auth.signInWithPassword({
    email: "someone@email.com",
    password: "IjgHBmupADyHCClFsYjt",
  });
  if (error) {
    console.error(error);
    throw new Error("Account could not be created.");
  }
}
