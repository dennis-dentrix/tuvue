import { ArrowLeft, X } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../services/postApi";
import toast from "react-hot-toast";
import { getFish } from "../services/fishApi";
import Loader from "../ui/Loader";
import InputField from "../ui/Input";
import { useNavigate } from "react-router-dom";

function Post() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("New post created");
      queryClient.invalidateQueries({
        queryKey: ["post"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const { data: fish, isLoading } = useQuery({
    queryKey: ["fishSpecies"],
    queryFn: getFish,
  });

  if (isLoading) return <Loader />;

  function onSubmit(data) {
    mutate(data);
    navigate("/myads/all");
  }

  function onError(error) {
    console.log(error);
  }

  return (
    <>
      <div className="flex flex-col sm:items-center items-start ">
        <div className="flex items-center justify-between border border-green px-3 py-2 rounded-sm sm:w-1/2 w-full">
          <div>
            <ArrowLeft />
          </div>
          <h1 className="text-green tracking-wider text-lg">Post ad</h1>

          <div className="flex items-center gap-2">
            <X />
            <p className="text-sm text-maroon">Clear</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="my-6 flex flex-col items-start gap-4 h-full w-full sm:w-1/2 bg-white shadow-md shadow-green px-3 py-2 rounded-md"
        >
          <div className="flex flex-col items-start w-full sm:w-1/2 gap-2">
            <label className="font-medium tracking-wider" htmlFor="id">
              Fish Name
            </label>
            <select
              name="id"
              id="name"
              {...register("fishId")}
              className="px-3 py-1 rounded-md bg-grey tracking-wider focus:outline-none focus:ring-1 focus:ring-green w-[18vw]"
            >
              {fish.map((fish) => (
                <option value={fish.id} className="focus:bg-grey" key={fish.id}>
                  {fish.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col items-start w-full gap-2">
            <label className="font-medium tracking-wider" htmlFor="source">
              Weight instock
            </label>
            <input
              type="text"
              name="totalWeight"
              placeholder="eg. 2000"
              {...register("totalWeight", {
                required: "This field is required",
              })}
              className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-green placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-green focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
            />
          </div>

          <InputField
            label="Minimum weight(grams)"
            error={errors?.minWeight?.message}
          >
            <input
              type="number"
              name="minWeight"
              id="minWeight"
              {...register("minWeight", {
                required: "This field is required",
                min: {
                  value: 250,
                  message: "Minimum weight sold should be 250grams",
                },
              })}
              placeholder="eg.500"
              className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-green placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-green focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
            />
          </InputField>

          <div className="flex flex-col items-start w-full gap-2">
            <label className="font-medium tracking-wider" htmlFor="source">
              Minimum price (kes)
            </label>
            <input
              type="text"
              name="price"
              placeholder="eg. 200"
              {...register("price", {
                required: "This field is required",
              })}
              className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-green placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-green focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
            />
          </div>

          <div className="flex flex-col items-start w-full gap-2">
            <label className="font-medium tracking-wider" htmlFor="source">
              Source
            </label>
            <input
              type="text"
              name="source"
              placeholder="eg. Lake Baringo"
              className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-green placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-green focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
              {...register("source", {
                required: "This field is required",
              })}
            />
          </div>

          <div className="flex flex-col items-start w-full gap-2">
            <label className="font-medium tracking-wider" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="enter constituency"
              {...register("location")}
              className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-green placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-green focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
            />
          </div>

          <div className="flex flex-col items-start w-full gap-2">
            <label className="font-medium tracking-wider" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              {...register("description", {
                required: "This field is required",
              })}
              cols="30"
              rows="10"
              className="bg-grey text-sm focus:outline-none focus:ring-1 focus:ring-green focus:scale-[1.01] transition-all duration-500 px-2 py-1"
            ></textarea>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <label htmlFor="inStock" className="font-medium tracking-wider">
                Instock
              </label>
              <input
                type="checkbox"
                name="inStock"
                defaultChecked
                id=""
                {...register("inStock")}
                className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-green placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-green focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
              />
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="delivery" className="font-medium tracking-wider">
                Delivery
              </label>
              <input
                type="checkbox"
                name="delivery"
                id=""
                {...register("delivery")}
                className="px-3 py-1 bg-grey font-family-inherit tracking-wider text-sm placeholder:text-green placeholder:text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-green focus:scale-[1.01] transition-all duration-500 w-full sm:w-1/2"
              />
            </div>
          </div>

          <div className="w-[18vw]">
            <button
              className="px-4 py-2 text-grey bg-green hover:text-white rounded-md inline-block font-semibold  tracking-wide  transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-1"
              disabled={isCreating}
            >
              Add post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Post;
