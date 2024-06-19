export default function Card() {
  return (
    <div className="flex flex-col border rounded-md border-gray-800">
      <div className="w-full p-2 rounded-md">
        <img
          className="rounded-md"
          src="https://via.placeholder.com/300"
          alt="placeholder"
        />
      </div>
      <div className="flex p-2">
        <div className="text-dark-primary rounded-lg px-1 py-1 text-xs bg-indigo-950">
          Technology
        </div>
      </div>
      <div className="flex flex-col w-2/3 px-3">
        <h1 className="text-xl font-bold">Title2</h1>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row items-center gap-10 ">
          <div className="flex flex-row items-center p-3 ">
            <img
              className="w-6 h-6 rounded-full"
              src="https://via.placeholder.com/150"
              alt="avatar"
            />
            <h1 className="text-xs text-gray-600 font-bold ml-2 ">Author</h1>
          </div>
          <p className="text-xs text-gray-600 font-bold ml-2">900 Views</p>
        </div>
      </div>
    </div>
  );
}
