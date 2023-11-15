import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { Eye, EyeSlash, Google } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../services/user";
import { toast } from "react-hot-toast";
import Loader from "../../ui/Loader";
import InputField from "./../../ui/Input";

export default function Signup() {
  const [showPswd, setShowPswd] = useState(false);
  const { emailRef, passwordRef, phoneRef, locationRef } = useRef();

  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  console.log("Errors: ", errors);

  const queryClient = useQueryClient();

  const { mutate: creatingUser, isLoading: isCreating } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast.success("Account created");
      queryClient.invalidateQueries({
        queryKey: ["user"],
        queryfn: createUser,
      });
      reset();
    },

    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data, onError) {
    creatingUser(data);
    navigate("/menu");
    if (onError) return;
  }

  function onError(error) {
    console.log(error);
  }

  function handleShowPswd() {
    setShowPswd(!showPswd);
  }

  if (isCreating) return <Loader />;
  return (
    <form
      className="w-2/3 mx-auto rounded"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <h1 className="text-lg font-bold">Create Account</h1>
      <div className="bg-white px-3 py-6 w-full">
        <div className="flex justify-around gap-1 mb-3">
          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="firstName">
              First Name
            </label>
            <InputField error={errors?.firstName?.message}>
              <input
                type="text"
                name="firstName"
                className="border border-grey rounded-md px-2 py-1 focus:outline-none w-64"
                disabled={isCreating}
                {...register("firstName", {
                  required: "Name is required",
                  min: {
                    message: "Enter name",
                  },
                })}
              />
            </InputField>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="lastName" ref={locationRef}>
              Last Name
            </label>
            <InputField error={errors?.firstName?.message}>
              <input
                type="text"
                name="firstName"
                className="border border-grey rounded-md px-2 py-1 focus:outline-none w-64"
                disabled={isCreating}
                {...register("firstName", {
                  required: "Name is required",
                  min: {
                    message: "Enter name",
                  },
                })}
              />
            </InputField>
          </div>
        </div>

        <div className="flex justify-around gap-1">
          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="phone" ref={phoneRef}>
              Phone
            </label>
            <InputField error={errors?.phoneNumber?.message}>
              <input
                type="text"
                name="phoneNumber"
                className="border border-grey rounded-md px-2 py-1 focus:outline-none w-64"
                disabled={isCreating}
                {...register("phoneNumber", {
                  required: "Phone number is required.",
                  min: {
                    message: "Phone number is required",
                  },
                })}
              />
            </InputField>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="email" ref={emailRef}>
              Email
            </label>

            <InputField error={errors?.email?.message}>
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: "This field is required",
                  min: {
                    message: "Enter your email",
                  },
                })}
                className="border border-grey rounded-md px-2 py-1 focus:outline-none w-64"
                disabled={isCreating}
              />
            </InputField>
          </div>
        </div>

        <div className="flex justify-around gap-1">
          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="location">
              Location
            </label>
            <InputField error={errors?.location?.message}>
              <input
                type="text"
                name="location"
                className="border border-grey rounded-md px-2 py-1 focus:outline-none w-64"
                disabled={isCreating}
                {...register("location", {
                  required: "This field is required",
                  min: {
                    message: "Please enter your location",
                  },
                })}
              />
            </InputField>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-black" htmlFor="email" ref={passwordRef}>
              Password
            </label>
            <div className="flex items-center border border-grey rounded-md pl-1">
              <InputField error={errors?.password?.message}>
                <input
                  type={showPswd ? "text" : "password"}
                  name="password"
                  id="password"
                  {...register("password", {
                    required: "Enter password",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long.",
                    },
                  })}
                  className=" px-2 py-1 focus:outline-none w-[15rem]"
                />
              </InputField>

              {showPswd ? (
                <EyeSlash onClick={handleShowPswd} />
              ) : (
                <Eye onClick={handleShowPswd} />
              )}
            </div>
          </div>
        </div>
        <p className="py-4">
          I have an account already{" "}
          <Link className="border-b border-green text-maroon">Login</Link>
        </p>
      </div>

      <div className="flex items-center gap-3 my-4 pl-7">
        <button className="bg-green rounded-lg text-white px-3 py-2 w-24">
          Signup
        </button>
        <p>or</p>
        <button className="flex items-center gap-1 bg-maroon px-3 py-2 rounded-md w-24">
          <Google /> <span className="text-white">Google</span>
        </button>
      </div>
    </form>
  );
}
