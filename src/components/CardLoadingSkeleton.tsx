const CardLoadingSkeleton = () => {
  return (
    <div className="w-full flex flex-col border rounded-md border-gray-800 p-4 bg-dark-bg shadow-lg h-full animate-pulse ">
      <div className="w-full rounded-md bg-gray-800 h-40 "></div>
      <div className="flex flex-col w-full flex-grow mt-4 space-y-2">
        <div className="h-6 bg-gray-800 rounded-md w-3/4"></div>
        <div className="h-4 bg-gray-800 rounded-md w-full"></div>
        <div className="h-4 bg-gray-800 rounded-md w-5/6"></div>
      </div>
      <div className="flex flex-row items-center mt-4 space-x-4">
        <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
        <div className="h-4 bg-gray-800 rounded-md w-1/4"></div>
        <div className="flex-grow"></div>
        <div className="h-4 bg-gray-800 rounded-md w-1/6"></div>
      </div>
    </div>
  );
};

export default CardLoadingSkeleton;
