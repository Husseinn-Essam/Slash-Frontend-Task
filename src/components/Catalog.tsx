import Card from "./Card";
import { Post } from "../types/types";
import CardLoadingSkeleton from "./CardLoadingSkeleton";

const getData = async (): Promise<Post[]> => {
  const response = await fetch("https://dummyjson.com/posts");
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data.posts;
};

const Catalog = async () => {
  const blogPosts = await getData();

  if (!blogPosts) {
    return (
      <>
        {Array.from({ length: 8 }).map((_, index) => (
          <CardLoadingSkeleton key={index} />
        ))}
      </>
    );
  }
  return (
    <div className="w-screen sm:w-auto md:w-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {blogPosts.map((blogPost) => (
          <Card key={blogPost.id} blogPost={blogPost} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
