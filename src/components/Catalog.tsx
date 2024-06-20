import Card from "./Card";
import { Post } from "../types/types";

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

  return (
    <div className=" border-s-violet-100 grid grid-cols-1 bg-base sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 justify-items-center">
      {blogPosts.map((blogPost) => (
        <Card key={blogPost.id} blogPost={blogPost} />
      ))}
    </div>
  );
};

export default Catalog;
