import React from 'react';

const PostSkeleton = () => {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 py-8 bg-dark-bg animate-pulse">
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="h-6 bg-gray-800 rounded-md w-16"></div>
        <div className="h-6 bg-gray-800 rounded-md w-16"></div>
        <div className="h-6 bg-gray-800 rounded-md w-16"></div>
      </div>
      <div className="h-10 bg-gray-800 rounded-md mb-4"></div>
      <div className="flex flex-row items-center mt-2">
        <div className="flex flex-row items-center flex-grow">
          <div className="w-6 h-6 rounded-full bg-gray-800"></div>
          <div className="ml-2 h-4 bg-gray-800 rounded-md w-1/5"></div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="h-4 bg-gray-800 rounded-md w-8"></div>
          <div className="h-4 bg-gray-800 rounded-md w-8"></div>
        </div>
      </div>
      <div className="mt-3 bg-gray-800 rounded-xl w-full h-48"></div>
      <div className="mt-8 mb-12">
        <div className="h-4 bg-gray-800 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-800 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-800 rounded-md mb-2"></div>
        <div className="h-4 bg-gray-800 rounded-md mb-2"></div>
      </div>
    </div>
  );
};

export default PostSkeleton;
