import Card from "./Card";
export default function Catalog() {
    const cardData = {
        categories: ['Technology', 'Programming'],
        title: 'Sample Title',
        author: 'John Doe',
        views: 900
      };
  return (
    <div className=" border-s-violet-100 grid grid-cols-1 bg-base  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 justify-items-center">
     
     <Card
        categories={cardData.categories}
        title={cardData.title}
        author={cardData.author}
        views={cardData.views}
      />
     
    </div>
  );
}
