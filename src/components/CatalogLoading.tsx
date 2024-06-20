import CardLoadingSkeleton from "./CardLoadingSkeleton";

const CatalogLoading = () => {
  return (
    <div className="w-screen px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <CardLoadingSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default CatalogLoading;
