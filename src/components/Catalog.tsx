import Card from "./Card";

interface Post {
    id: number;
    title: string;
    tags: string[];
    userId: number;
    views: number;
  }
  
  interface ApiResponse {
    posts: Post[];
  }

const getData = async(): Promise<Post[]>=>{
    const response = await fetch('https://dummyjson.com/posts');
    if (!response.ok) {
        throw new Error('Something went wrong');
    }
    const data: ApiResponse = await response.json();
    return data.posts;
    
}


const Catalog = async() => {
    
    const posts = await getData();
    
    return (
        <div className="border-s-violet-100 grid grid-cols-1 bg-base sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 justify-items-center">
          {posts.map((blog, index) => (
            <Card key={index} categories={blog.tags} title={blog.title} author={blog.userId.toString()} views={blog.views} />
          ))}
        </div>
      );
}

export default Catalog;
