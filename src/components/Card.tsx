import React, { Suspense } from "react";
import { Post } from "../types/types";
import { Author } from "./Author";
import Link from "next/link";
import BlogTags from "@/components/BlogTags";
import Image from "next/image";
interface CardProps {
  blogPost: Post;
}

const Card: React.FC<CardProps> = ({ blogPost }) => {
  return (
    <div className=" flex flex-col border rounded-md border-gray-800 p-4 h-full">
      <div className="w-full rounded-md">
        <Image
          src="https://picsum.photos/id/0/300/300"
          alt="placeholder"
          width={300}
          height={300}
        />
       
      </div>
      <BlogTags tags={blogPost.tags} />

      <div className="flex flex-col w-full px-3 flex-grow">
        <h1 className="text-xl font-bold line-clamp-2">{blogPost.title}</h1>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{blogPost.body}</p>
        <Link
          href={`/Post/${blogPost.id}`}
          className="text-indigo-600 font-semibold mt-2"
        >
          Read More
        </Link>
      </div>
      <div className="flex flex-row items-center mt-2">
        <div className="flex flex-row items-center flex-grow">
          <Image
            className="w-6 h-6 rounded-full"
            src="https://via.placeholder.com/150"
            alt="avatar"
            width={150}
            height={150}
          />
          <Suspense
            fallback={
              <div className="text-xs text-gray-600 font-bold ml-2">
                loading
              </div>
            }
          >
            <Author userId={blogPost.userId} />
          </Suspense>
        </div>
        <p className="text-xs text-gray-600 font-bold ml-2">
          {blogPost.views} Views
        </p>
      </div>
    </div>
  );
};

export default Card;
