import { Suspense } from "react";
import { Author } from "@/components/Author";
import BlogTags from "@/components/BlogTags";
import BlogMetrics from "@/components/BlogMetrics";
import Image from "next/image";
interface BlogProps {
  params: { slug: string };
}

const getData = async (blogID: number) => {
  const response = await fetch(`https://dummyjson.com/posts/${blogID}`,{cache:'no-store'});
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
};

const Post: React.FC<BlogProps> = async ({ params }) => {
  const blogID = parseInt(params.slug, 10);

  const blog = await getData(blogID);

  const { title, userId, tags, body, views, reactions } = blog;
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-8 bg-dark-bg">
      <BlogTags tags={tags} />
      <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
      <div className="flex flex-row items-center mt-2">
        <div className="flex flex-row items-center flex-grow">
          <Image
            className="w-6 h-6 rounded-full"
            src="/profile.png"
            alt="avatar"
            width={150}
            height={150}
          />
          <Suspense
            fallback={
              <div className="ml-2 h-4 bg-gray-800 rounded-md w-1/5 animate-pulse"></div>
            }
          >
            <Author userId={userId} />
          </Suspense>
        </div>
        <BlogMetrics views={views} reactions={reactions} />
      </div>
      <Image
        className="mt-3 rounded-xl w-full items-center mx-auto max-h-96 object-cover"
        src="/water.jpg"
        alt="placeholder"
        width={1400}
        height={1400}
      />
      <div className="mt-8 mb-12">
        <p className="text-lg text-white">{body}</p>
      </div>
    </div>
  );
};

export default Post;
