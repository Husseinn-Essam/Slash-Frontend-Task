"use client";
import { useState } from "react";
import Notification from "@/components/Notification";

interface BlogPost {
  title: string;
  content: string;
  tags: string[];
}

const CreatePostPage: React.FC = () => {
  const [post, setPost] = useState<BlogPost>({
    title: "",
    content: "",
    tags: [],
  });

  const [showNotification, setShowNotification] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim());
    setPost({
      ...post,
      tags,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Submitting post: ", post);
      setShowNotification(true);
      setPost({
        title: "",
        content: "",
        tags: [],
      });
      setErrors({});
    }
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: { [key: string]: string } = {};

    if (!post.title.trim()) {
      newErrors["title"] = "Title is required";
      valid = false;
    }

    if (!post.content.trim()) {
      newErrors["content"] = "Content is required";
      valid = false;
    }

    if (!post.tags.length) {
      newErrors["tags"] = "At least one tag is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="min-h-screen flex  justify-center bg-dark-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-dark-txt -mb-5">
          Create a New Post
        </h2>
        <div className="h-1 bg-dark-primary"></div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="title" className="text-dark-txt">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${
                  errors["title"] ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Title"
                value={post.title}
                onChange={handleChange}
              />
              {errors["title"] && (
                <p className="text-red-500 text-sm mt-1">{errors["title"]}</p>
              )}
            </div>
            <div>
              <label htmlFor="title" className="text-dark-txt">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${
                  errors["content"] ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Content"
                rows={5}
                value={post.content}
                onChange={handleChange}
              />
              {errors["content"] && (
                <p className="text-red-500 text-sm mt-1">{errors["content"]}</p>
              )}
            </div>
            <div>
              <label htmlFor="title" className="text-dark-txt">
                Tags
              </label>
              <input
                id="tags"
                name="tags"
                type="text"
                className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${
                  errors["tags"] ? "border-red-500" : "border-gray-300"
                } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Tags (comma separated)"
                value={post.tags.join(", ")}
                onChange={handleTagChange}
              />
              {errors["tags"] && (
                <p className="text-red-500 text-sm mt-1">{errors["tags"]}</p>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Blog
            </button>
          </div>
        </form>
      </div>
      {showNotification && (
        <Notification
          message="Post submitted successfully!"
          onClose={closeNotification}
        />
      )}
    </div>
  );
};

export default CreatePostPage;
