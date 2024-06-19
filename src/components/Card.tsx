import React from 'react';

export interface Post {
  title: string;
  tags: string[];
  userId: number;
  views: number;
  body: string;
}

const Card: React.FC<Post> = ({ tags, title, userId, views, body }) => {
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
        {tags.map((category, index) => (
          <div key={index} className="text-dark-primary rounded-lg px-1 py-1 text-xs bg-indigo-950">
            {category}
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full px-3 flex-grow">
        <h1 className="text-xl font-bold line-clamp-2">{title}</h1>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {body}
        </p>
        <a href={`/post/${userId}`} className="text-indigo-600 font-semibold mt-2">
          Read More
        </a>
      </div>
      <div className="flex flex-row mt-2">
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-row items-center p-3">
            <img
              className="w-6 h-6 rounded-full"
              src="https://via.placeholder.com/150"
              alt="avatar"
            />
            <h1 className="text-xs text-gray-600 font-bold ml-2">{userId}</h1>
          </div>
          <p className="text-xs text-gray-600 font-bold ml-2">{views} Views</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
