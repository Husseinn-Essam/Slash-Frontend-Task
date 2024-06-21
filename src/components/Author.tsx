// i decided to make the author name a server component because it does its own fetching of data 
// and i didn't want to block the rendering of the blog post while waiting for the author name to load 
interface User {
  firstName: string;
  lastName: string;
}

const getAuthorName = async (userID: number): Promise<User> => {
  const response = await fetch(
    `http://dummyjson.com/users/${userID}?&select=firstName,lastName`
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
 
  const data = await response.json();

  return data;
};

export const Author: React.FC<{ userId: number }> = async ({ userId }) => {
  const username = await getAuthorName(userId);

  return (
    <>
      <h1 className="text-sm text-gray-500 font-bold ml-2">
        {username.firstName}
      </h1>
    </>
  );
};
