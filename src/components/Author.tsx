
export interface User {
   firstName: string;
   lastName: string;
  }
  

const getAuthorName = async (userID:number): Promise<User> => {
    const response = await fetch(`http://dummyjson.com/users/${userID}?&select=firstName,lastName`);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
  };
  

export const Author:React.FC<{userId:number}> = async({userId}) => {
    const username = await getAuthorName(userId);
    
    return (
    <>
      <h1 className="text-xs text-gray-600 font-bold ml-2">{username.firstName}</h1>
    </>
  );
};
