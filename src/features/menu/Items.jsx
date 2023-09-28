import ItemCard from "./ItemCard";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/apiFish";

function Items() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["post"],
    queryFn: getPosts,
  });
  if (isLoading) return <p>Loading...</p>;
  return (
    // <ul className="pt-10 flex justify-center space-x-11 items-center overflow-x-scroll">
    <ul className="flex items-center gap-5">
      {posts.map((post) => (
        <ItemCard post={post} key={post.id} />
      ))}
    </ul>
  );
}

export default Items;
