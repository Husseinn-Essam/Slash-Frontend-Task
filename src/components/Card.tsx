import React, { Suspense } from "react";
import { Post } from "../types/types";
import { Author } from "./Author";
import Link from "next/link";

interface CardProps {
  blog: Post;
}

const Card: React.FC<CardProps> = ({ blog }) => {
  return (
    <div className="flex flex-col border rounded-md border-gray-800 p-4 h-full">
      <div className="w-full rounded-md">
        <img
          className="rounded-md"
          src="https://via.placeholder.com/300"
          alt="placeholder"
        />
      </div>
      <div className="flex p-2 gap-1">
        {blog.tags.map((category: string, index: number) => (
          <div
            key={index}
            className="text-dark-primary rounded-lg px-1 py-1 text-xs bg-indigo-950"
          >
            {category}
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full px-3 flex-grow">
        <h1 className="text-xl font-bold line-clamp-2">{blog.title}</h1>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{blog.body}</p>
        <Link
          href={`/blog/${blog.id}`}
          className="text-indigo-600 font-semibold mt-2"
        >
          Read More
        </Link>
      </div>
      <div className="flex flex-row items-center mt-2">
        <div className="flex flex-row items-center flex-grow">
          <img
            className="w-6 h-6 rounded-full"
            src="https://via.placeholder.com/150"
            alt="avatar"
          />
          <Suspense
            fallback={
              <div className="text-xs text-gray-600 font-bold ml-2">
                loading
              </div>
            }
          >
            <Author userId={blog.userId} />
          </Suspense>
        </div>
        <p className="text-xs text-gray-600 font-bold ml-2">
          {blog.views} Views
        </p>
      </div>
    </div>
  );
};

export default Card;
