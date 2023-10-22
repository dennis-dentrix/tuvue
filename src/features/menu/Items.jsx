import ItemCard from "./ItemCard";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/postApi";

import Loader from "../../ui/Loader";

function Items() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: getPosts,
  });

  if (isLoading) return <Loader />;
  return (
    <ul className="flex items-center gap-5">
      {posts.map((post) => (
        <ItemCard post={post} key={post.id} />
      ))}
    </ul>
  );
}

export default Items;
