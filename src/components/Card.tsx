
interface CardProps {
    categories: string[];
    title: string;
    author: string;
    views: number;
}

import React from 'react'

 const Card: React.FC<CardProps> = ({categories,title,author,views}) => {
  return (
    
        <div className="flex flex-col border rounded-md border-gray-800">
          <div className="w-full p-2 rounded-md">
            <img
              className="rounded-md"
              src="https://via.placeholder.com/300"
              alt="placeholder"
            />
          </div>
          <div className="flex p-2 gap-1">
            {categories.map((category,index)=>(
                 <div key={index} className="text-dark-primary rounded-lg px-1 py-1 text-xs bg-indigo-950">
                    {category}
               </div>
            ))}

          </div>
          <div className="flex flex-col w-2/3 px-3">
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-row items-center gap-10 ">
              <div className="flex flex-row items-center p-3 ">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="avatar"
                />
                <h1 className="text-xs text-gray-600 font-bold ml-2 ">{author}</h1>
              </div>
              <p className="text-xs text-gray-600 font-bold ml-2">{views} Views</p>
            </div>
          </div>
        </div>
      );
  
}


export default Card;