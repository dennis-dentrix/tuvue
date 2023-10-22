import { Pen, Trash } from "react-bootstrap-icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePosts, getPosts } from "../../services/postApi";
import Loader from "../../ui/Loader";
import toast from "react-hot-toast";
import { getFish } from "../../services/fishApi";

export default function AllAds() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: getPosts,
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1 className="text-lg mb-2 text-green">My products</h1>

      <>
        <table className="table-fixed text-left border-collapse  w-full px-2">
          <thead>
            <tr className="border-b border-black">
              <th>Fish type</th>
              <th>Source</th>
              <th>Target weight(grams)</th>
              {/* <th>Sold (grams)</th> */}
              <th>Unit price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <AdsRow key={post.id} post={post} />
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}

function AdsRow({ post }) {
  const { id: postId, totalWeight, price, source, fishId } = post;
  const queryClient = useQueryClient();

  const { mutate, isLoaading: isDeleting } = useMutation({
    mutationFn: deletePosts,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["post"],
      });
      toast.success("Post Deleted Successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  const { data: fishData, isLoading } = useQuery({
    queryKey: ["fishSpecies"],
    queryFn: getFish,
  });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <tr className="py-2">
          <td>{fishData.map((fish) => fishId === fish.id && fish.name)}</td>
          <td>{source}</td>
          <td>{totalWeight ? totalWeight : "_"}</td>
          <td>{price}</td>
          <td>
            <button className="flex gap-1  items-center text-green">
              <Pen />
              Edit
            </button>
          </td>
          <td>
            <button
              className="flex gap-1 items-center text-maroon"
              onClick={() => mutate(postId)}
              disabled={isDeleting}
            >
              <Trash />
              Delete
            </button>
          </td>
        </tr>
      )}
    </>
  );
}
