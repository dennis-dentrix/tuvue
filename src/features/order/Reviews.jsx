import { StarRating } from "../../ui/StarRating";
import { Button } from "../../ui/Button";

export function Reviews() {
  return (
    <div>
      <div className="flex flex-col justify-between items-baseline  md:flex-row md:items-center sm:gap-2">
        <h1 className="text-black font-bold text-xl tracking-widest">
          Customer Review
        </h1>
        <div className="flex gap-2">
          <StarRating color="#4c7c7d" size={Number("40")} />
          {/* <p className="text-lg text-black">5/5</p> */}
        </div>
      </div>

      <div className="overflow-scroll h-[25rem]">
        <UserReview />
        <UserReview />
        <UserReview />
        <UserReview />
      </div>

      <form className="space-y-6">
        <div className="flex flex-col gap-3 ">
          <label
            htmlFor="review"
            className="font-bold text-xl text-black tracking-widest"
          >
            Add your comment
          </label>
          <input
            type="text"
            name="review"
            className="py-6 px-4 tracking-wide text-black text-lg font-semibold"
          />
        </div>

        <Button type="primary">Add review</Button>
      </form>
    </div>
  );
}

export function UserReview() {
  return (
    <div className="bg-white m-3 px-6 py-3 rounded-md">
      <h2 className="text-black font-bold text-lg tracking-wide">Simon</h2>

      <p className=" mt-3tracking-widest text-black font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>

      <div className=" flex flex-col sm:items-baseline space-y-2 sm:flex-row items-baseline justify-between my-3">
        <p className="text-xs text-black font-light">September 20, 2023</p>
        {/* <StarRating color="#4c7c7d" size="30" defaultRating="4" /> */}

        <p className="text-xs text-black font-light">4/5</p>
      </div>
    </div>
  );
}
